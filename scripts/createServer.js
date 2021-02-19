'use strict'
const path = require('path');
const express = require("express");
const posix = require('posix');
const {libraries, serverPorts} = require('../benchConfig')

// raise maximum number of open file descriptors to 10k,
// hard limit is left unchanged
posix.setrlimit('nofile', { soft: 100000 });

const servers = {};

const createServer = () => {
    return new Promise((res) => {
        try {
            libraries.forEach((lib, i) => {
                servers[lib] = {}
                servers[lib].app = express();
                servers[lib].server = servers[lib].app.listen(serverPorts[lib], () => {
                    console.log(`--> Server starts listening for ${lib} on port ${serverPorts[lib]}`)
                });
                servers[lib].app.use('/', express.static(`public/${lib}`))
                servers[lib].app.get('*', function(req, res) {
                    res.sendFile('index.html', {root: path.join(__dirname, `../public/${lib}`)});
                });
            })
        } catch (ex) {
            libraries.forEach((lib) => {
                if (servers[lib] && servers[lib].server) {
                    servers[lib].server.close()
                }
            })
            console.log(`Exception setting up tests: ${ex}`)
            process.exit(0)
        }
        return res(console.log('Tests setup!'))
    })
}

const destroyServer = () => {
    libraries.forEach((lib) => {
        if (servers[lib] && servers[lib].server) {
            servers[lib].server.close()
        }
    })
    console.log('Tests complete - servers shut down!')
    process.exit(0)
}

module.exports = {
    createServer,
    destroyServer
}
