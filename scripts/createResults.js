const path = require('path')
const fse = require('fs-extra')

const {libraries, paintMetrics, responseMetrics, numberOfRequests} = require('../benchConfig')
const numberTemplatePath = '../results/templates/number-request.template.md'
const numberFilePath = '../results/number-request.results.md'
const numberJSONPath = '../results/number-request.results.json'

const puppeteerTemplatePath = '../results/templates/puppeteer-request.template.md'
const puppeteerFilePath = '../results/puppeteer-request.results.md'
const puppeteerJSONPath = '../results/puppeteer-request.results.json'

const readmeTemplatePath = '../results/templates/README.template.md'
const readmeFilePath = '../README.md'

const noop = () => {
}
const getResultsTable = results => libraries.map(key => `|${key}|${results[key].reduce((a = '', result) => `${a}${result.toFixed(4)} ms|`, '')}`).reduce((a = '', b) => `${a}${b}\n`, '');

const createNumberResultsFile = async (results) => {
    let template = await fse.readFile(path.resolve(__dirname, numberTemplatePath), 'utf-8');
    template = template.replace(/!~!numberOfRquests!~!/gm, numberOfRequests);
    template = template.replace('!~!numberOfRquestsResults!~!', getResultsTable(results));
    await fse.outputFile(path.resolve(__dirname, numberFilePath), template, noop);
    await fse.writeJson(path.resolve(__dirname, numberJSONPath), results, noop);
    await updateReadmeFile();
}

const createPuppeteerResultsFile = async (results) => {
    let template = await fse.readFile(path.resolve(__dirname, puppeteerTemplatePath), 'utf-8');
    [...responseMetrics, ...paintMetrics].forEach(metric => {
        template = template.replace(`!~!${metric}!~!`, getResultsTable(results[metric]))
    });
    await fse.outputFile(path.resolve(__dirname, puppeteerFilePath), template, noop);
    await fse.writeJson(path.resolve(__dirname, puppeteerJSONPath), results, noop);
    await updateReadmeFile();
}

const updateReadmeFile = async () => {
    let template = await fse.readFile(path.resolve(__dirname, readmeTemplatePath), 'utf-8');
    const puppeteerResults = await fse.readJson(path.resolve(__dirname, puppeteerJSONPath), 'utf-8');
    const requestsResults = await fse.readJson(path.resolve(__dirname, numberJSONPath), 'utf-8');

    [...responseMetrics, ...paintMetrics].forEach(metric => {
        template = template.replace(`!~!${metric}!~!`, getResultsTable(puppeteerResults[metric]));
    });

    template = template.replace('!~!numberOfRquestsResults!~!', getResultsTable(requestsResults));

    await fse.outputFile(path.resolve(__dirname, readmeFilePath), template, noop);
}

module.exports = {
    createNumberResultsFile,
    createPuppeteerResultsFile,
}
