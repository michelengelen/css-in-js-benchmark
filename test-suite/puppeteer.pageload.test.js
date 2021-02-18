const puppeteer = require('puppeteer');
const libraries = require('../libraries');
const {createServer, destroyServer} = require('./createServer');

const RESPONSE_RESULTS = {}
const PAINT_RESULTS = {}

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
        extractedData[name] =
            getTimeFromPerformanceMetrics(metrics, name) - navigationStart;
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

    RESPONSE_RESULTS[key] = extractDataFromPerformanceTiming(
        performanceTiming[0] || {},
        'responseEnd',
        'domInteractive',
        'domContentLoadedEventEnd',
        'loadEventEnd'
    );
}

const consecPaintTests = (page, libraryKeys) => {
    if (libraryKeys.length === 1) return testPageFirstPaint(page, libraryKeys[0])
    const library = libraryKeys.shift()
    return testPageFirstPaint(page, library).then(() => consecPaintTests(page, libraryKeys))
}

const testPageFirstPaint = async (page, key) => {
    console.log('### PAINT - library: ', key)
    const client = await page.target().createCDPSession();
    await client.send('Performance.enable');

    await page.goto(`http://localhost:1337/${key}`);

    await page.waitForTimeout(1000);
    const performanceMetrics = await client.send('Performance.getMetrics');

    console.log('### PAINT - metrics: ', performanceMetrics)

    PAINT_RESULTS[key] = extractDataFromPerformanceMetrics(
        performanceMetrics,
        'FirstMeaningfulPaint'
    );
}

createServer()
    .then(() => createBrowser())
    .then(async ({page, browser}) => {
        await consecResponseTests(page, [...libraries])
        await consecPaintTests(page, [...libraries])
        return browser
    })
    .then(async (browser) => await browser.close())
    .then(() => {
        console.log('--> response results: ', RESPONSE_RESULTS)
        console.log('--> paint results: ', PAINT_RESULTS)
        return destroyServer()
    })
    .catch((error) => console.log('--> !!! ERROR !!!', error))
