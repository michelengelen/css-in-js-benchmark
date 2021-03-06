const path = require('path')

const { TreatPlugin } = require('treat/webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolve = dir => path.resolve(__dirname, dir)
const library = 'treat'

const options = {
    appRoot: `../apps/${library}`,
    outPath: `../public/${library}/built`,
}

module.exports = {
    mode: 'production',
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
                include: [resolve(options.appRoot)],
            },
        ],
    },
    plugins: [
        new TreatPlugin({
            outputLoaders: [MiniCssExtractPlugin.loader],
        }),
        new MiniCssExtractPlugin(),
    ],
}
