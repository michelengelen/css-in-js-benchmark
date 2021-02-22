module.exports = {
    libraries: [
        "react-jss",
        "sass",
        //"emotion",
        "styled-components",
        // "phantom",
        "typestyle",
    ],
    serverPorts: {
        "react-jss": 1337,
        sass: 1338,
        "styled-components": 1339,
        typestyle: 1340,
    },
    responseMetrics: [
        'duration',
        'domInteractive',
        'domContentLoadedEventEnd',
        'domComplete'
    ],
    paintMetrics: [
        'FirstMeaningfulPaint'
    ],
    numberOfRequests: 500,
    numberOfIterations: 5,
}
