const chalk = require('chalk')
const puppeteer = require('puppeteer')
const cloneDeep = require('lodash.clonedeep')
const { printH1, printH2, printH3, printP } = require('../utils/helpers')
const { createServer, destroyServer } = require('../scripts/createServer')
const { createPuppeteerResultsFile } = require('../scripts/createResults')
const { libraries, responseMetrics, paintMetrics, serverPorts, numberOfIterations } = require('../benchConfig')

const RESPONSE_RESULTS = {
    home: {},
    table: {},
}
const PAINT_RESULTS = {
    home: {},
    table: {},
}
const RESULTS = {
    home: {},
    table: {},
}

const createBrowser = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    return { browser, page }
}

const extractDataFromPerformanceTiming = (timing, ...dataNames) => {
    const start = timing.redirectStart

    const extractedData = {}
    dataNames.forEach(name => {
        extractedData[name] = timing[name] - start
    })

    return extractedData
}

const getValueFromPerformanceMetrics = (metrics, name) => metrics.metrics.find(x => x.name === name).value

const extractDataFromPerformanceMetrics = (metrics, ...dataNames) => {
    const navigationStart = getValueFromPerformanceMetrics(metrics, 'NavigationStart')

    const extractedData = {}
    dataNames.forEach(name => {
        switch (true) {
            case name.includes('Count'):
                extractedData[name] = `${getValueFromPerformanceMetrics(metrics, name)}`
                break
            case name.includes('Duration'):
                extractedData[name] = getValueFromPerformanceMetrics(metrics, name) * 1000
                break
            default:
                extractedData[name] = (getValueFromPerformanceMetrics(metrics, name) - navigationStart) * 1000
        }
    })

    return extractedData
}

const consecResponseTests = (page, libraryKeys) => {
    printH3(`Testing page load responsiveness for ${libraryKeys[0]}`, true)
    if (libraryKeys.length === 1) return testPageResponse(page, libraryKeys[0])
    const library = libraryKeys.shift()
    return testPageResponse(page, library).then(() => consecResponseTests(page, libraryKeys))
}

const testPageResponse = async (page, key) => {
    printP(`Navigating to ${chalk.yellow(`http://localhost:${serverPorts[key]}/`)}`)
    await page.goto(`http://localhost:${serverPorts[key]}/`)

    printP('Fetching performance metrics')
    const performanceHomeTiming = JSON.parse(await page.evaluate(() => JSON.stringify(window.performance.getEntries())))

    if (!RESPONSE_RESULTS.home[key]) RESPONSE_RESULTS.home[key] = []
    printP('Extracting performance metrics', true)
    RESPONSE_RESULTS.home[key].push(
        extractDataFromPerformanceTiming(performanceHomeTiming[0] || {}, ...responseMetrics)
    )

    printP(`Navigating to ${chalk.yellow(`http://localhost:${serverPorts[key]}/table`)}`)
    await page.goto(`http://localhost:${serverPorts[key]}/table`)

    printP('Fetching performance metrics')
    const performanceTableTiming = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance.getEntries()))
    )

    if (!RESPONSE_RESULTS.table[key]) RESPONSE_RESULTS.table[key] = []
    printP('Extracting performance metrics', true)
    RESPONSE_RESULTS.table[key].push(
        extractDataFromPerformanceTiming(performanceTableTiming[0] || {}, ...responseMetrics)
    )
}

const consecPaintTests = (page, libraryKeys) => {
    printH3(`Testing first paint metric for ${libraryKeys[0]}`, true)
    if (libraryKeys.length === 1) return testPageFirstPaint(page, libraryKeys[0])
    const library = libraryKeys.shift()
    return testPageFirstPaint(page, library).then(() => consecPaintTests(page, libraryKeys))
}

const testPageFirstPaint = async (page, key) => {
    printP('Creating CDP session', true)
    const client = await page.target().createCDPSession()
    await client.send('Performance.enable')

    printP(`Navigating to ${chalk.yellow(`http://localhost:${serverPorts[key]}/`)}`)
    await page.goto(`http://localhost:${serverPorts[key]}/`)

    await page.waitForTimeout(1000)
    printP('Fetching performance metrics')
    const performanceHomeMetrics = await client.send('Performance.getMetrics')

    if (!PAINT_RESULTS.home[key]) PAINT_RESULTS.home[key] = []
    printP('Extracting performance metrics', true)
    PAINT_RESULTS.home[key].push(extractDataFromPerformanceMetrics(performanceHomeMetrics, ...paintMetrics))

    printP(`Navigating to ${chalk.yellow(`http://localhost:${serverPorts[key]}/table`)}`)
    await page.goto(`http://localhost:${serverPorts[key]}/table`)

    await page.waitForTimeout(1000)
    printP('Fetching performance metrics')
    const performanceTableMetrics = await client.send('Performance.getMetrics')

    if (!PAINT_RESULTS.table[key]) PAINT_RESULTS.table[key] = []
    printP('Extracting performance metrics', true)
    PAINT_RESULTS.table[key].push(extractDataFromPerformanceMetrics(performanceTableMetrics, ...paintMetrics))
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
            responseMetrics.forEach(metric =>
                createResultArray(RESPONSE_RESULTS.home[library], library, metric, 'home')
            )
            responseMetrics.forEach(metric =>
                createResultArray(RESPONSE_RESULTS.table[library], library, metric, 'table')
            )
        }
    })
}

const createResultArray = (arr, library, metric, page) => {
    if (!RESULTS[page][metric][library]) RESULTS[page][metric][library] = []
    RESULTS[page][metric][library] = arr.map(x => x[metric])
    if (!metric.includes('Count')) {
        RESULTS[page][metric][library].push(arr.reduce((a, b) => a + b[metric], 0) / arr.length)
    }
}

const runTests = (page, ...args) => {
    const _args = cloneDeep(args)
    return consecResponseTests(page, ...args).then(() => consecPaintTests(page, ..._args))
}

/**
 * @param   {Function}    promise
 * @param   {number}      iteration
 * @param   {any}         page
 * @param   {any}         rest
 * @returns {Promise<*>}
 */
const consecIterations = (promise, iteration, page, ...rest) => {
    printH2(`Starting ${iteration}. run`)
    const _rest = cloneDeep(rest)
    if (iteration === numberOfIterations) return promise(page, ..._rest)
    return promise(page, ...rest).then(() => consecIterations(promise, iteration + 1, page, ..._rest))
}

createServer()
    .then(() => printH1('PREPARING PUPPETEER PAGE-LOAD BENCHMARK', true))
    .then(() => createBrowser())
    .then(({ page, browser }) => {
        return consecIterations(runTests, 1, page, [...libraries])
            .then(() => parseResults())
            .then(() => {
                printH2('Test runs finished')
                printH2('Writing results markdown file')
                return createPuppeteerResultsFile(RESULTS)
            })
            .then(() => browser)
    })
    .then(async browser => {
        await browser.close()
    })
    .then(() => printH1('PUPPETEER PAGE-LOAD BENCHMARK FINISHED', true))
    .then(() => destroyServer())
    .catch(error => console.log('--> !!! ERROR !!!', error))
