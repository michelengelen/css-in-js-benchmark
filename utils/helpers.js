const chalk = require('chalk')

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const printH1 = (text, padded = false) => {
    if (padded) console.log('')
    console.log(chalk.bold.blueBright('='.repeat(process.stdout.columns)))
    console.log('')
    console.log(chalk.bold.white(`${chalk.green('~~~')} ${text} ${chalk.green('~~~')}`))
    console.log('')
    console.log(chalk.bold.blueBright('='.repeat(process.stdout.columns)))
    if (padded) console.log('')
}

const printH2 = (text, padded = false) => {
    if (padded) console.log('')
    console.log(chalk.white('-'.repeat(process.stdout.columns)))
    console.log(`${chalk.bold.black('     ')} ${chalk.bold(text)}`)
    console.log(chalk.white('-'.repeat(process.stdout.columns)))
    if (padded) console.log('')
}

const printH3 = (text, padded = false) => {
    if (padded) console.log('')
    console.log(chalk.white(`${chalk.green(' ~~~ ')} ${text}`))
    if (padded) console.log('')
}

const printP = (text, padded = false) => {
    console.log(`${chalk.bgGreen.bold.black(' --> ')} ${text}`);
    if (padded) console.log('')
}


module.exports = {
    getRandomInt,
    printH1,
    printH2,
    printH3,
    printP,
}
