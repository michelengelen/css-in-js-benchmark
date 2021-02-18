'use strict'

const express = require("express");
const app = express(); // create express app
const posix = require('posix');

// raise maximum number of open file descriptors to 10k,
// hard limit is left unchanged
posix.setrlimit('nofile', { soft: 100000 });

const server = app.listen(1337, () => {
    console.log('--> Server starts listening for on port 1337')
})

const createServer = () => {
    return new Promise((res) => {
        try {
            app.use('/', express.static('public'))
        } catch (ex) {
            server.close()
            console.log(`Exception setting up tests: ${ex}`)
            process.exit(0)
        }
        return res(console.log('Tests setup!'))
    })
}

const destroyServer = () => {
    server.close()
    console.log('Tests complete - servers shut down!')
    process.exit(0)
}

module.exports = {
    createServer,
    destroyServer
}
