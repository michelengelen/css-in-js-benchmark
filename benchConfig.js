module.exports = {
    libraries: [
        // "sass",
        "react-jss",
        //"emotion",
        "styled-components",
        // "phantom",
        "typestyle",
    ],
    serverPorts: {
        "react-jss": 1337,
        "styled-components": 1338,
        typestyle: 1339,
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
    numberOfRequests: 1000,
}
