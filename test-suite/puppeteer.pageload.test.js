const puppeteer = require('puppeteer');
const chalk = require('chalk');
const {createServer, destroyServer} = require('../scripts/createServer');
const {createPuppeteerResultsFile} = require('../scripts/createResults');
const {libraries, responseMetrics, paintMetrics, serverPorts} = require('../benchConfig');

const RESPONSE_RESULTS = {
    home: {},
    table: {}
}
const PAINT_RESULTS = {
    home: {},
    table: {}
}
const RESULTS = {
    home: {},
    table: {}
}

const createBrowser = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    return {browser, page};
}

const extractDataFromPerformanceTiming = (timing, ...dataNames) => {
    const start = timing.redirectStart;

    const extractedData = {};
    dataNames.forEach(name => {
        extractedData[name] = timing[name] - start;
    });

    return extractedData;
};

const getTimeFromPerformanceMetrics = (metrics, name) =>
    metrics.metrics.find(x => x.name === name).value * 1000;

const extractDataFromPerformanceMetrics = (metrics, ...dataNames) => {
    const navigationStart = getTimeFromPerformanceMetrics(
        metrics,
        'NavigationStart'
    );

    const extractedData = {};
    dataNames.forEach(name => {
        extractedData[name] = getTimeFromPerformanceMetrics(metrics, name) - navigationStart;
    });

    return extractedData;
};

const consecResponseTests = (page, libraryKeys) => {
    if (libraryKeys.length === 1) return testPageResponse(page, libraryKeys[0])
    const library = libraryKeys.shift()
    return testPageResponse(page, library).then(() => consecResponseTests(page, libraryKeys))
}

const testPageResponse = async (page, key) => {
    await page.goto(`http://localhost:${serverPorts[key]}/`);

    const performanceHomeTiming = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance.getEntries()))
    );

    if (!RESPONSE_RESULTS.home[key]) RESPONSE_RESULTS.home[key] = [];
    RESPONSE_RESULTS.home[key].push(extractDataFromPerformanceTiming(
        performanceHomeTiming[0] || {},
        ...responseMetrics
    ));

    await page.goto(`http://localhost:${serverPorts[key]}/table`);

    const performanceTableTiming = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance.getEntries()))
    );

    if (!RESPONSE_RESULTS.table[key]) RESPONSE_RESULTS.table[key] = [];
    RESPONSE_RESULTS.table[key].push(extractDataFromPerformanceTiming(
        performanceTableTiming[0] || {},
        ...responseMetrics
    ));
}

const consecPaintTests = (page, libraryKeys) => {
    if (libraryKeys.length === 1) return testPageFirstPaint(page, libraryKeys[0])
    const library = libraryKeys.shift()
    return testPageFirstPaint(page, library).then(() => consecPaintTests(page, libraryKeys))
}

const testPageFirstPaint = async (page, key) => {
    const client = await page.target().createCDPSession();
    await client.send('Performance.enable');

    await page.goto(`http://localhost:${serverPorts[key]}/`);

    await page.waitForTimeout(1000);
    const performanceHomeMetrics = await client.send('Performance.getMetrics');

    if (!PAINT_RESULTS.home[key]) PAINT_RESULTS.home[key] = []
    PAINT_RESULTS.home[key].push(extractDataFromPerformanceMetrics(
        performanceHomeMetrics,
        ...paintMetrics
    ));

    await page.goto(`http://localhost:${serverPorts[key]}/table`);

    await page.waitForTimeout(1000);
    const performanceTableMetrics = await client.send('Performance.getMetrics');

    if (!PAINT_RESULTS.table[key]) PAINT_RESULTS.table[key] = []
    PAINT_RESULTS.table[key].push(extractDataFromPerformanceMetrics(
        performanceTableMetrics,
        ...paintMetrics
    ));
}

const parseResults = async () => {
    await [...responseMetrics, ...paintMetrics].forEach(metric => {
        RESULTS.home[metric] = {}
        RESULTS.table[metric] = {}
    })
    await libraries.forEach(library => {
        if (PAINT_RESULTS.home[library] && PAINT_RESULTS.table[library]) {
            paintMetrics.forEach(metric => createResultArray(PAINT_RESULTS.home[library], library, metric, 'home'))
            paintMetrics.forEach(metric => createResultArray(PAINT_RESULTS.table[library], library, metric, 'table'))
        }
        if (RESPONSE_RESULTS.home[library] && RESPONSE_RESULTS.table[library]) {
            responseMetrics.forEach(metric => createResultArray(RESPONSE_RESULTS.home[library], library, metric, 'home'))
            responseMetrics.forEach(metric => createResultArray(RESPONSE_RESULTS.table[library], library, metric, 'table'))
        }
    })
}

const createResultArray = (arr, library, metric, page) => {
    if (!RESULTS[page][metric][library]) RESULTS[page][metric][library] = []
    RESULTS[page][metric][library] = arr.map(x => x[metric])
    RESULTS[page][metric][library].push(arr.reduce((a, b) => a + b[metric], 0) / arr.length)
}

createServer()
    .then(() => createBrowser())
    .then(async ({page, browser}) => {
        return consecResponseTests(page, [...libraries])
            .then(() => consecResponseTests(page, [...libraries]))
            .then(() => consecResponseTests(page, [...libraries]))
            .then(() => consecPaintTests(page, [...libraries]))
            .then(() => consecPaintTests(page, [...libraries]))
            .then(() => consecPaintTests(page, [...libraries]))
            .then(() => parseResults())
            .then(() => createPuppeteerResultsFile(RESULTS))
            .then(() => browser)
    })
    .then(async (browser) => await browser.close())
    .then(() => destroyServer())
    .catch((error) => console.log('--> !!! ERROR !!!', error))
