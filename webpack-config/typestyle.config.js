const path = require('path');

const resolve = dir => path.resolve(__dirname, dir)
const library = 'typestyle'

const options = {
    appRoot: `../apps/${library}`,
    outPath: `../public/${library}/built`
}

module.exports = {
    mode: "production",
    entry: resolve(`${options.appRoot}/entry.jsx`),
    output: {
        path: resolve(options.outPath),
        filename: 'built.min.js',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                include: [resolve(options.appRoot)]
            },
        ],
    },
};
