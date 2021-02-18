'use strict'

const axios = require('axios')
const dayJS = require('dayjs')

const {createServer, destroyServer} = require('./createServer')
const libraries = require('../libraries')
const {createNumberResultsFile} = require('./createResults')

const MAX_CYCLES = 2000
const RESULTS = {}

const consecTests = (libraryKeys) => {
    if (libraryKeys.length === 1) return performTests(libraryKeys[0])
    const library = libraryKeys.shift()
    return performTests(library).then(() => consecTests(libraryKeys))
}

const consecRequest = (url, i = 0) => {
    if ((i + 1) === MAX_CYCLES) return axios.get(url)
    return axios.get(url).then(() => consecRequest(url, i + 1))
}

const performTests = (library) => {
    let start = dayJS()
    console.log(`--> requesting ${MAX_CYCLES} times for ${library} started at ${start.format('HH:mm:ss')}`)
    console.log(`--> start requesting: http://localhost:1337/${library}`)
    return consecRequest(`http://localhost:1337/${library}/`)
        .then(() => {
            if (!RESULTS[library]) RESULTS[library] = []
            const time = dayJS().valueOf() - start.valueOf()
            RESULTS[library].push(time)
            if (RESULTS[library].length === 3) RESULTS[library].push((RESULTS[library].reduce((a, b) => a + b) / RESULTS[library].length).toFixed(4))
            console.log(`${library} test completed after ${MAX_CYCLES} requests in ${dayJS().valueOf() - start.valueOf()} ms`)
            console.log('')
        })
        .catch((error) => {
            destroyServer()
            console.log(`Exception setting up tests: ${error}`)
            process.exit(0)
        })
}

createServer().then(() => {
    //Wait a bit for the the express server to launch and initialize
    console.log('---------------------------------')
    console.log('--> Preparing to start tests!')
    console.log('')
    setTimeout(() => {
        //We start our tests
        console.log('')
        console.log('---------------------------------')
        console.log('--- Starting 1. run')
        console.log('')
        consecTests([...libraries])
            .then(() => {
                console.log('')
                console.log('---------------------------------')
                console.log('--- Starting 2. run')
                console.log('')
                return consecTests([...libraries])
            })
            .then(() => {
                console.log('')
                console.log('---------------------------------')
                console.log('--- Starting 3. run')
                console.log('')
                return consecTests([...libraries])
            })
            .then(() => {
                console.log('---------------------------------')
                console.log('--> Test runs finished')
                console.log('---------------------------------')
                console.log('')
                console.log('---------------------------------')
                console.log('--> Writing results markdown file')
                console.log('---------------------------------')
                return createNumberResultsFile(RESULTS)
            })
            .then(() => {
                    //Wait for any asynchronous errors
                    console.log('---------------------------------')
                    console.log('--> Preparing to shutdown!')
                    console.log('---------------------------------')
                    setTimeout(() => {
                        destroyServer()
                    }, 2000)
                }
            ).catch((error) => {
                console.log('ERROR while performing requests: ', error)
                destroyServer()
            })
    }, 1000)
})
