const path = require('path')
const fse = require('fs-extra')

const libraries = require('../libraries')
const numberTemplatePath = '../results/number-request.template.md'
const numberFilePath = '../results/number-request.results.md'

const getResultsTable = results => libraries.map(key => `|${key}|${results[key].reduce((a = '', result) => `${a}${result} ms|`, '')}`).reduce((a = '', b) => `${a}${b}\n`, '')

const createNumberResultsFile = async (results) => {
    let template = await fse.readFile(path.resolve(__dirname, numberTemplatePath), 'utf-8');
    console.log()
    template = template.replace(/(!~!resultsTablePlaceholder!~!)/g, getResultsTable(results))
    await fse.outputFile(path.resolve(__dirname, numberFilePath), template,  () => {})
}

module.exports = {
    createNumberResultsFile,
}
