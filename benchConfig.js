module.exports = {
    libraries: [
        // "sass",
        "react-jss",
        //"emotion",
        // "styled-components",
        // "phantom",
        "typestyle",
    ],
    serverPorts: {
        "react-jss": 1337,
        typestyle: 1338,
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
    numberOfRequests: 2000,
}
