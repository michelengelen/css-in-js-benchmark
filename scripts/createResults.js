const path = require('path');
const fse = require('fs-extra');

const {libraries, paintMetrics, responseMetrics, numberOfRequests} = require('../benchConfig');
const numberTemplatePath = '../results/templates/number-request.template.md';
const numberFilePath = '../results/number-request.results.md';
const numberJSONPath = '../results/number-request.results.json';

const puppeteerTemplatePath = '../results/templates/puppeteer-request.template.md';
const puppeteerFilePath = '../results/puppeteer-request.results.md';
const puppeteerJSONPath = '../results/puppeteer-request.results.json';

const readmeTemplatePath = '../results/templates/README.template.md';
const readmeFilePath = '../README.md';

const getBuildStatsPath = (lib) => `../results/build-stats/${lib}.stats.json`;

const noop = () => {};

const getBuildResultsTable = results => getBuildResultsHeader() + getResultsContent(results)
const getBuildResultsHeader = () => `|library|build time|build size|\n|:-----|-----:|-----:|\n`;

const getResultsTable = results => getResultsHeader(results[libraries[0]]) + getResultsContent(results);
const getResultsHeader = results => `|library|${results.map((_, i) => (i + 1) !== results.length ? `${i + 1}. run|` :  `average|`).join('')}\n|:-----|${results.reduce(a => `${a}-----:|`, '')}\n`;
const getResultsContent = results => libraries.map(key => `|${key}|${results[key].reduce((a = '', result) => `${a}${typeof result === 'number' ? `${result.toFixed(2)} ms` : result}|`, '')}`).reduce((a = '', b) => `${a}${b}\n`, '');

const createNumberResultsFile = async (results) => {
    let template = await fse.readFile(path.resolve(__dirname, numberTemplatePath), 'utf-8');
    template = template.replace(/(!~!numberOfRequests!~!)/gm, numberOfRequests);
    template = template.replace('!~!numberOfHomeRequestsResults!~!', getResultsTable(results.home));
    template = template.replace('!~!numberOfTableRequestsResults!~!', getResultsTable(results.table));
    await fse.outputFile(path.resolve(__dirname, numberFilePath), template, noop);
    await fse.writeJson(path.resolve(__dirname, numberJSONPath), results, noop);
    await updateReadmeFile();
};

const createPuppeteerResultsFile = async (results) => {
    let template = await fse.readFile(path.resolve(__dirname, puppeteerTemplatePath), 'utf-8');
    [...responseMetrics, ...paintMetrics].forEach(metric => {
        template = template.replace(`!~!${metric}Home!~!`, getResultsTable(results.home[metric]))
        template = template.replace(`!~!${metric}Table!~!`, getResultsTable(results.table[metric]))
    });
    await fse.outputFile(path.resolve(__dirname, puppeteerFilePath), template, noop);
    await fse.writeJson(path.resolve(__dirname, puppeteerJSONPath), results, noop);
    await updateReadmeFile();
};

const parseBuildResults = async () => {
    const buildStats = {};
    await libraries.forEach(library => {
        let data = fse.readJsonSync(path.resolve(__dirname, getBuildStatsPath(library)), 'utf-8');
        buildStats[library] = [
            `${data.time} ms`, `${data.assets.reduce((a, b) => a + b.size, 0) / 1000} KB`
        ];
    });
    await fse.writeJson(path.resolve(__dirname, getBuildStatsPath('all')), buildStats, noop);
};

const updateReadmeFile = async () => {
    await parseBuildResults();
    let template = await fse.readFile(path.resolve(__dirname, readmeTemplatePath), 'utf-8');
    const puppeteerResults = await fse.readJson(path.resolve(__dirname, puppeteerJSONPath), 'utf-8');
    const requestsResults = await fse.readJson(path.resolve(__dirname, numberJSONPath), 'utf-8');
    const buildResults = await fse.readJson(path.resolve(__dirname, getBuildStatsPath('all')), 'utf-8');

    [...responseMetrics, ...paintMetrics].forEach(metric => {
        template = template.replace(`!~!${metric}Home!~!`, getResultsTable(puppeteerResults.home[metric]))
        template = template.replace(`!~!${metric}Table!~!`, getResultsTable(puppeteerResults.table[metric]))
    });

    template = template.replace(/(!~!numberOfRequests!~!)/gm, numberOfRequests);
    template = template.replace('!~!numberOfHomeRequestsResults!~!', getResultsTable(requestsResults.home));
    template = template.replace('!~!numberOfTableRequestsResults!~!', getResultsTable(requestsResults.table));
    template = template.replace('!~!buildResults!~!', getBuildResultsTable(buildResults));

    await fse.outputFile(path.resolve(__dirname, readmeFilePath), template, noop);
}

module.exports = {
    createNumberResultsFile,
    createPuppeteerResultsFile,
    updateReadmeFile,
}
