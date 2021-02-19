'use strict'
const path = require('path');
const chalk = require('chalk');
const express = require("express");
const posix = require('posix');
const {libraries, serverPorts} = require('../benchConfig')

// raise maximum number of open file descriptors to 10k,
// hard limit is left unchanged
posix.setrlimit('nofile', { soft: 100000 });

const servers = {};

const createServer = async () => {
    console.log(chalk.white(`${chalk.green('~~~')} Setting up fresh servers for benchmarking ${chalk.green('~~~')}`))
    console.log('')
    try {
        await libraries.forEach((lib, i) => {
            servers[lib] = {}
            servers[lib].app = express();
            servers[lib].server = servers[lib].app.listen(serverPorts[lib], () => {
                console.log(chalk.white(`${chalk.bgGreen.bold.black(' --> ')} Server starts listening on port ${chalk.red(serverPorts[lib])} for ${chalk.red(lib)}`))
            });
            servers[lib].app.use('/', express.static(`public/${lib}`))
            servers[lib].app.get('*', function(req, res) {
                res.sendFile('index.html', {root: path.join(__dirname, `../public/${lib}`)});
            });
        })
        console.log('')
        console.log(chalk.white(`${chalk.green('~~~')} Setup finished ${chalk.green('~~~')}`))
        console.log('')
    } catch (ex) {
        libraries.forEach((lib) => {
            if (servers[lib] && servers[lib].server) {
                servers[lib].server.close()
            }
        })
        console.log(`Exception setting up tests: ${ex}`)
        process.exit(0)
    }
}

const destroyServer = () => {
    console.log('')
    console.log(chalk.white(`${chalk.green('~~~')} Benchmarking finished ${chalk.green('~~~')}`))
    console.log('')
    libraries.forEach((lib) => {
        if (servers[lib] && servers[lib].server) {
            console.log(chalk.white(`${chalk.bgGreen.bold.black(' --> ')} closing server for ${chalk.red(lib)}`))
            servers[lib].server.close()
        }
    })
    console.log('')
    console.log(chalk.white(`${chalk.green('~~~')} Server instances closed ${chalk.green('~~~')}`))
    console.log('')
    process.exit(0)
}

module.exports = {
    createServer,
    destroyServer
}
