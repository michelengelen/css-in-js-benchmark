const childProcess = require('child_process')
const { promisify } = require('util')
const { libraries } = require('../benchConfig')
const { printH3, printP } = require('../utils/helpers')

const exec = promisify(childProcess.exec)

const run = () => {
    if (!Array.isArray(libraries) || libraries.length === 0) {
        process.exit(1)
    }

    printH3('Start building apps', true)
    const promises = libraries.map(lib => {
        printP(`Building ${lib}`)
        const build = `webpack --config webpack-config/${lib}.config.js --json=results/build-stats/${lib}.stats.json`
        return exec(build)
    })

    Promise.all(promises)
        .then(() => {
            printH3('Successfully built apps', true)
            process.exit(0)
        })
        .catch(error => {
            printH3(`Error while building apps: ${error}`)
            process.exit(1)
        })
}

run()
