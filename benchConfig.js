module.exports = {
    libraries: [
        // "sass",
        "react-jss",
        //"emotion",
        // "styled-components",
        // "phantom",
        "typestyle",
    ],
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
