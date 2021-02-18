const puppeteer = require('puppeteer');
const {createServer, destroyServer} = require('../scripts/createServer');
const {createPuppeteerResultsFile} = require('../scripts/createResults');
const {libraries, responseMetrics, paintMetrics} = require('../benchConfig');

const RESPONSE_RESULTS = {}
const PAINT_RESULTS = {}
const RESULTS = {}

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
    await page.goto(`http://localhost:1337/${key}`);

    const performanceTiming = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance.getEntries()))
    );

    if (!RESPONSE_RESULTS[key]) RESPONSE_RESULTS[key] = [];
    RESPONSE_RESULTS[key].push(extractDataFromPerformanceTiming(
        performanceTiming[0] || {},
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

    await page.goto(`http://localhost:1337/${key}`);

    await page.waitForTimeout(1000);
    const performanceMetrics = await client.send('Performance.getMetrics');

    if (!PAINT_RESULTS[key]) PAINT_RESULTS[key] = []
    PAINT_RESULTS[key].push(extractDataFromPerformanceMetrics(
        performanceMetrics,
        ...paintMetrics
    ));
}

const parseResults = async () => {
    await [...responseMetrics, ...paintMetrics].forEach(metric => RESULTS[metric] = {})
    await libraries.forEach(library => {
        if (PAINT_RESULTS[library]) {
            paintMetrics.forEach(metric => createResultArray(PAINT_RESULTS[library], library, metric))
        }
        if (RESPONSE_RESULTS[library]) {
            responseMetrics.forEach(metric => createResultArray(RESPONSE_RESULTS[library], library, metric))
        }
    })
}

const createResultArray = (arr, library, metric) => {
    if (!RESULTS[metric][library]) RESULTS[metric][library] = []
    RESULTS[metric][library] = arr.map(x => x[metric])
    RESULTS[metric][library].push(arr.reduce((a, b) => a + b[metric], 0) / arr.length)
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
