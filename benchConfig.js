module.exports = {
    libraries: [
        "react-jss",
        "sass",
        //"emotion",
        "styled-components",
        // "phantom",
        "treat",
        "typestyle",
    ],
    serverPorts: {
        "react-jss": 1337,
        sass: 1338,
        "styled-components": 1339,
        treat: 1340,
        typestyle: 1341,
    },
    responseMetrics: [
        'duration',
        'domInteractive',
        'domContentLoadedEventEnd',
        'domComplete'
    ],
    paintMetrics: [
        'FirstMeaningfulPaint',
        'LayoutCount',
        'LayoutDuration',
        'RecalcStyleCount',
        'RecalcStyleDuration',
        'ScriptDuration',
        'TaskDuration',
    ],
    numberOfRequests: 500,
    numberOfIterations: 5,
}
