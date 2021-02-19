'use strict'

const axios = require('axios')
const dayJS = require('dayjs')

const {createServer, destroyServer} = require('../scripts/createServer')
const {createNumberResultsFile} = require('../scripts/createResults')

const {libraries, numberOfRequests, serverPorts} = require('../benchConfig')

const RESULTS = {}

const consecTests = (libraryKeys) => {
    if (libraryKeys.length === 1) return performTests(libraryKeys[0])
    const library = libraryKeys.shift()
    return performTests(library).then(() => consecTests(libraryKeys))
}

const consecRequest = (url, i = 0) => {
    if ((i + 1) === numberOfRequests) return axios.get(url)
    return axios.get(url).then(() => consecRequest(url, i + 1))
}

const performTests = (library) => {
    let start = dayJS()
    console.log(`--> requesting ${numberOfRequests} times for ${library} started at ${start.format('HH:mm:ss')}`)
    console.log(`--> start requesting: http://localhost:${serverPorts[library]}`)
    return consecRequest(`http://localhost:${serverPorts[library]}/`)
        .then(() => {
            if (!RESULTS[library]) RESULTS[library] = []
            const time = dayJS().valueOf() - start.valueOf()
            RESULTS[library].push(time)
            if (RESULTS[library].length === 3) RESULTS[library].push((RESULTS[library].reduce((a, b) => a + b) / RESULTS[library].length))
            console.log(`${library} test completed after ${numberOfRequests} requests in ${dayJS().valueOf() - start.valueOf()} ms`)
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
                    // destroyServer()
                }, 2000)
            })
            .catch((error) => {
                console.log('ERROR while performing requests: ', error)
                destroyServer()
            })
    }, 1000)
})
