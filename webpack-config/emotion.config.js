const path = require('path');

module.exports = {
    mode: "production",
    uniqueName: "benchmark-emotion",
    name: "benchmark-emotion-config",
    entry: "../apps/emotion",
    output: {
        path: path.resolve(__dirname, "public/emotion/built"),
        filename: 'built.min.js'
    },
    resolve: ['*.js', '*.jsx'],
};
