'use strict'

const chalk = require('chalk')
const axios = require('axios')
const dayJS = require('dayjs')

const { createServer, destroyServer } = require('../scripts/createServer')
const { createNumberResultsFile } = require('../scripts/createResults')
const { printH1, printH2, printP } = require('../utils/helpers')

const cloneDeep = require('lodash.clonedeep')

const { libraries, numberOfRequests, serverPorts, numberOfIterations } = require('../benchConfig')

const RESULTS = {
    home: {},
    table: {},
}

/**
 * @param   {Function}    promise
 * @param   {number}      iteration
 * @param   {any}         rest
 * @returns {Promise<*>}
 */
const consecIterations = (promise, iteration, ...rest) => {
    printH2(`Starting ${iteration}. run`)
    const _rest = cloneDeep(rest)
    if (iteration === numberOfIterations) return promise(...rest)
    return promise(...rest).then(() => consecIterations(promise, iteration + 1, ..._rest))
}

const consecTests = libraryKeys => {
    if (libraryKeys.length === 1) return performTests(libraryKeys[0])
    const library = libraryKeys.shift()
    return performTests(library).then(() => consecTests(libraryKeys))
}

const consecRequest = (url, i = 0) => {
    if (i + 1 === numberOfRequests) return axios.get(url)
    return axios.get(url).then(() => consecRequest(url, i + 1))
}

const performTests = lib => {
    return performTest(lib).then(() => performTest(lib, '/table'))
}

const performTest = (library, path = '/') => {
    const start = dayJS()
    const route = path[0] !== '/' ? `/${path}` : path
    const metric = route === '/' ? 'home' : route.substring(1)
    printP(`Requesting ${numberOfRequests} times for ${library} started at ${start.format('HH:mm:ss')}`)
    printP(`start requesting: http://localhost:${serverPorts[library]}${route}`)
    return consecRequest(`http://localhost:${serverPorts[library]}${route}`)
        .then(() => {
            const time = dayJS().valueOf() - start.valueOf()
            if (!RESULTS[metric][library]) RESULTS[metric][library] = []
            RESULTS[metric][library].push(time)
            if (RESULTS[metric][library].length === numberOfIterations)
                RESULTS[metric][library].push(
                    RESULTS[metric][library].reduce((a, b) => a + b) / RESULTS[metric][library].length
                )
            printP(
                `${library}: tests for route ${chalk.yellow(route)} completed after ${chalk.yellow(
                    numberOfRequests
                )} requests in ${chalk.yellow(dayJS().valueOf() - start.valueOf())} ms`,
                true
            )
        })
        .catch(error => {
            destroyServer()
            console.log(`Exception setting up tests: ${error}`)
            process.exit(0)
        })
}

createServer().then(() => {
    //Wait a bit for the the express server to launch and initialize
    printH1('PREPARING CONSECUTIVE REQUEST BENCHMARK', true)
    setTimeout(() => {
        //We start our tests
        consecIterations(consecTests, 1, [...libraries])
            .then(() => {
                printH2('Test runs finished')
                printH2('Writing results markdown file')
                return createNumberResultsFile(RESULTS)
            })
            .then(() => {
                printH1('CONSECUTIVE REQUEST BENCHMARK FINISHED', true)
                setTimeout(() => {
                    destroyServer()
                }, 2000)
            })
            .catch(error => {
                console.log('ERROR while performing requests: ', error)
                destroyServer()
            })
    }, 1000)
})
