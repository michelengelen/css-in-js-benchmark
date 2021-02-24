'use strict'
const path = require('path')
const chalk = require('chalk')
const express = require('express')
const posix = require('posix')
const { libraries, serverPorts } = require('../benchConfig')
const { printH1, printH2, printH3, printP } = require('../utils/helpers')

// raise maximum number of open file descriptors to 10k,
// hard limit is left unchanged
posix.setrlimit('nofile', { soft: 100000 })

const servers = {}

const createServer = async () => {
    printH3('Setting up fresh servers for benchmarking', true)
    try {
        await libraries.forEach((lib, i) => {
            servers[lib] = {}
            servers[lib].app = express()
            servers[lib].server = servers[lib].app.listen(serverPorts[lib], () => {
                printP(`Server starts listening on port ${chalk.red(serverPorts[lib])} for ${chalk.red(lib)}`)
            })
            servers[lib].app.use('/', express.static(`public/${lib}`))
            servers[lib].app.get('*', function (req, res) {
                res.sendFile('index.html', { root: path.join(__dirname, `../public/${lib}`) })
            })
        })
        printH3('Server setup finished', true)
    } catch (ex) {
        libraries.forEach(lib => {
            if (servers[lib] && servers[lib].server) {
                servers[lib].server.close()
            }
        })
        console.log(`Exception setting up tests: ${ex}`)
        process.exit(0)
    }
}

const destroyServer = () => {
    printH3('Preparing to close down servers', true)
    libraries.forEach(lib => {
        if (servers[lib] && servers[lib].server) {
            printP(`closing server for ${chalk.red(lib)}`)
            servers[lib].server.close()
        }
    })
    printH3('Server instances closed', true)
    console.log('')
    process.exit(0)
}

module.exports = {
    createServer,
    destroyServer,
}
