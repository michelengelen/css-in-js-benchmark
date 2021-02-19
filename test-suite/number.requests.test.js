'use strict'

const axios = require('axios')
const dayJS = require('dayjs')

const {createServer, destroyServer} = require('../scripts/createServer')
const {createNumberResultsFile} = require('../scripts/createResults')

const {libraries, numberOfRequests, serverPorts} = require('../benchConfig')

const RESULTS = {
    home: {},
    table: {}
}

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
    let startHome = dayJS();
    let startTable;
    console.log(`--> requesting ${numberOfRequests} times for ${library} started at ${startHome.format('HH:mm:ss')}`)
    console.log(`--> start requesting: http://localhost:${serverPorts[library]}`)
    return consecRequest(`http://localhost:${serverPorts[library]}/`)
        .then(() => {
            if (!RESULTS.home[library]) RESULTS.home[library] = []
            const time = dayJS().valueOf() - startHome.valueOf()
            RESULTS.home[library].push(time)
            if (RESULTS.home[library].length === 3) RESULTS.home[library].push((RESULTS.home[library].reduce((a, b) => a + b) / RESULTS.home[library].length))
            console.log('')
            console.log(`--> ${library}: home-test completed after ${numberOfRequests} requests in ${dayJS().valueOf() - startHome.valueOf()} ms`)
            console.log('')
        })
        .then(() => {
            startTable = dayJS()
            console.log(`--> requesting ${numberOfRequests} times for ${library} started at ${startTable.format('HH:mm:ss')}`)
            console.log(`--> start requesting: http://localhost:${serverPorts[library]}/table`)
        })
        .then(() => consecRequest(`http://localhost:${serverPorts[library]}/table`))
        .then(() => {
            if (!RESULTS.table[library]) RESULTS.table[library] = []
            const time = dayJS().valueOf() - startTable.valueOf()
            RESULTS.table[library].push(time)
            if (RESULTS.table[library].length === 3) RESULTS.table[library].push((RESULTS.table[library].reduce((a, b) => a + b) / RESULTS.table[library].length))
            console.log('')
            console.log(`--> ${library}: table-test completed after ${numberOfRequests} requests in ${dayJS().valueOf() - startTable.valueOf()} ms`)
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
            })
            .catch((error) => {
                console.log('ERROR while performing requests: ', error)
                destroyServer()
            })
    }, 1000)
})
