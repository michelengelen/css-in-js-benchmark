## Puppeteer

---

#### Command To run the test

```bash
npm run puppeteer-bench
```

### Results

all metrics are measured in ms

---

`FirstMeaningfulPaint`

request to `/`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         | 40.58 ms | 50.17 ms | 31.79 ms | 33.89 ms | 42.21 ms | 39.73 ms |
| sass              | 46.44 ms | 46.95 ms | 57.34 ms | 48.39 ms | 48.96 ms | 49.62 ms |
| styled-components | 48.05 ms | 45.84 ms | 47.50 ms | 54.81 ms | 60.73 ms | 51.39 ms |
| treat             | 63.59 ms | 58.01 ms | 67.35 ms | 67.04 ms | 67.32 ms | 64.66 ms |
| typestyle         | 63.55 ms | 53.31 ms | 61.07 ms | 65.60 ms | 65.01 ms | 61.71 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         | 182.48 ms | 203.73 ms | 200.47 ms | 186.96 ms | 199.77 ms | 194.68 ms |
| sass              | 234.28 ms | 234.74 ms | 221.99 ms | 235.20 ms | 250.85 ms | 235.41 ms |
| styled-components | 231.36 ms | 237.49 ms | 218.17 ms | 234.43 ms | 232.59 ms | 230.81 ms |
| treat             | 214.63 ms | 215.04 ms | 212.69 ms | 207.06 ms | 213.35 ms | 212.55 ms |
| typestyle         | 281.12 ms | 299.29 ms | 284.53 ms | 289.26 ms | 314.35 ms | 293.71 ms |

**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded. It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`LayoutCount`

request to `/`

| library           | 1. run | 2. run | 3. run | 4. run | 5. run |                   average |
| :---------------- | -----: | -----: | -----: | -----: | -----: | ------------------------: |
| react-jss         |   3000 |   3000 |   3000 |   3000 |   3000 | 6000600060006000640.00 ms |
| sass              |   2000 |   2000 |   2000 |   2000 |   2000 | 4000400040004000256.00 ms |
| styled-components |   2000 |   2000 |   2000 |   2000 |   2000 | 4000400040004000256.00 ms |
| treat             |   3000 |   3000 |   3000 |   3000 |   3000 | 6000600060006000640.00 ms |
| typestyle         |   3000 |   3000 |   3000 |   3000 |   3000 | 6000600060006000640.00 ms |

request to `/table`

| library           | 1. run | 2. run | 3. run | 4. run | 5. run |                    average |
| :---------------- | -----: | -----: | -----: | -----: | -----: | -------------------------: |
| react-jss         |   4000 |   5000 |   5000 |   5000 |   5000 |  8001000100010000384.00 ms |
| sass              |   3000 |   3000 |   3000 |   4000 |   3000 |  6000600060008000512.00 ms |
| styled-components |   4000 |   4000 |   4000 |   4000 |   3000 |  8000800080008000512.00 ms |
| treat             |   5000 |   5000 |   5000 |   4000 |   5000 | 10001000100008001536.00 ms |
| typestyle         |   5000 |   6000 |   6000 |   6000 |   6000 | 10001200120012001280.00 ms |

---

`LayoutDuration`

request to `/`

| library           |  1. run |  2. run |  3. run |  4. run |  5. run | average |
| :---------------- | ------: | ------: | ------: | ------: | ------: | ------: |
| react-jss         | 0.43 ms | 0.50 ms | 0.46 ms | 0.45 ms | 0.43 ms | 0.45 ms |
| sass              | 0.36 ms | 0.40 ms | 0.44 ms | 0.42 ms | 0.55 ms | 0.44 ms |
| styled-components | 0.39 ms | 0.44 ms | 0.44 ms | 0.40 ms | 0.40 ms | 0.41 ms |
| treat             | 0.44 ms | 0.53 ms | 0.46 ms | 0.45 ms | 0.46 ms | 0.47 ms |
| typestyle         | 0.45 ms | 0.46 ms | 0.44 ms | 0.49 ms | 0.49 ms | 0.47 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         |  62.65 ms |  70.61 ms |  66.54 ms |  59.13 ms |  70.47 ms |  65.88 ms |
| sass              |  63.05 ms |  66.75 ms |  57.51 ms |  60.85 ms |  71.99 ms |  64.03 ms |
| styled-components |  64.68 ms |  68.53 ms |  57.93 ms |  60.62 ms |  59.08 ms |  62.17 ms |
| treat             |  61.46 ms |  66.45 ms |  59.89 ms |  56.08 ms |  61.22 ms |  61.02 ms |
| typestyle         | 125.65 ms | 141.39 ms | 124.46 ms | 135.00 ms | 149.85 ms | 135.27 ms |

---

`RecalcStyleCount`

request to `/`

| library           | 1. run | 2. run | 3. run | 4. run | 5. run |                   average |
| :---------------- | -----: | -----: | -----: | -----: | -----: | ------------------------: |
| react-jss         |   3000 |   3000 |   3000 |   3000 |   3000 | 6000600060006000640.00 ms |
| sass              |   3000 |   3000 |   2000 |   3000 |   3000 | 6000600040006000640.00 ms |
| styled-components |   3000 |   3000 |   2000 |   3000 |   2000 | 6000600040006000640.00 ms |
| treat             |   3000 |   3000 |   3000 |   3000 |   3000 | 6000600060006000640.00 ms |
| typestyle         |   3000 |   3000 |   3000 |   3000 |   3000 | 6000600060006000640.00 ms |

request to `/table`

| library           | 1. run | 2. run | 3. run | 4. run | 5. run |                    average |
| :---------------- | -----: | -----: | -----: | -----: | -----: | -------------------------: |
| react-jss         |   5000 |   6000 |   6000 |   6000 |   6000 | 10001200120012001280.00 ms |
| sass              |   4000 |   4000 |   3000 |   5000 |   4000 |  8000800060010001408.00 ms |
| styled-components |   5000 |   5000 |   4000 |   5000 |   3000 | 10001000080010000384.00 ms |
| treat             |   6000 |   6000 |   6000 |   5000 |   6000 | 12001200120010002432.00 ms |
| typestyle         |   5000 |   6000 |   6000 |   6000 |   6000 | 10001200120012001280.00 ms |

---

`RecalcStyleDuration`

request to `/`

| library           |  1. run |  2. run |  3. run |  4. run |  5. run | average |
| :---------------- | ------: | ------: | ------: | ------: | ------: | ------: |
| react-jss         | 0.37 ms | 0.43 ms | 0.36 ms | 0.38 ms | 0.38 ms | 0.38 ms |
| sass              | 0.37 ms | 0.41 ms | 0.40 ms | 0.42 ms | 0.44 ms | 0.41 ms |
| styled-components | 0.41 ms | 0.42 ms | 0.34 ms | 0.40 ms | 0.35 ms | 0.39 ms |
| treat             | 0.39 ms | 0.48 ms | 0.42 ms | 0.40 ms | 0.38 ms | 0.41 ms |
| typestyle         | 0.41 ms | 0.42 ms | 0.39 ms | 0.45 ms | 0.44 ms | 0.42 ms |

request to `/table`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         | 32.21 ms | 39.34 ms | 37.05 ms | 33.52 ms | 38.64 ms | 36.15 ms |
| sass              | 34.98 ms | 34.35 ms | 32.42 ms | 31.83 ms | 38.22 ms | 34.36 ms |
| styled-components | 32.86 ms | 33.56 ms | 31.95 ms | 34.29 ms | 35.71 ms | 33.67 ms |
| treat             | 33.34 ms | 33.72 ms | 33.24 ms | 32.10 ms | 32.56 ms | 32.99 ms |
| typestyle         | 61.39 ms | 69.89 ms | 69.76 ms | 63.89 ms | 72.50 ms | 67.48 ms |

---

`ScriptDuration`

request to `/`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         |  7.25 ms |  6.90 ms |  6.47 ms |  6.32 ms |  6.34 ms |  6.66 ms |
| sass              |  6.56 ms |  7.00 ms |  7.99 ms |  7.75 ms |  7.60 ms |  7.38 ms |
| styled-components |  8.69 ms |  7.44 ms |  7.51 ms |  8.11 ms |  8.24 ms |  8.00 ms |
| treat             | 25.05 ms | 23.76 ms | 25.76 ms | 25.64 ms | 25.44 ms | 25.13 ms |
| typestyle         | 23.55 ms | 20.32 ms | 23.41 ms | 24.14 ms | 24.56 ms | 23.20 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         |  60.78 ms |  64.27 ms |  67.34 ms |  65.50 ms |  62.66 ms |  64.11 ms |
| sass              | 105.94 ms | 103.47 ms | 104.43 ms | 111.36 ms | 109.90 ms | 107.02 ms |
| styled-components | 105.03 ms | 104.24 ms | 101.18 ms | 109.97 ms | 107.96 ms | 105.68 ms |
| treat             | 101.23 ms |  97.10 ms |  98.75 ms |  98.67 ms |  99.04 ms |  98.96 ms |
| typestyle         |  80.26 ms |  72.98 ms |  78.91 ms |  79.10 ms |  81.07 ms |  78.46 ms |

---

`TaskDuration`

request to `/`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         | 49.56 ms | 52.53 ms | 50.46 ms | 53.05 ms | 50.99 ms | 51.32 ms |
| sass              | 30.94 ms | 31.46 ms | 36.69 ms | 35.75 ms | 33.56 ms | 33.68 ms |
| styled-components | 34.18 ms | 29.36 ms | 32.87 ms | 34.46 ms | 36.24 ms | 33.42 ms |
| treat             | 48.81 ms | 55.33 ms | 63.02 ms | 62.69 ms | 61.22 ms | 58.21 ms |
| typestyle         | 49.92 ms | 42.08 ms | 48.21 ms | 50.04 ms | 51.80 ms | 48.41 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         | 223.79 ms | 248.44 ms | 243.12 ms | 232.58 ms | 244.68 ms | 238.52 ms |
| sass              | 267.99 ms | 271.19 ms | 264.26 ms | 276.51 ms | 289.75 ms | 273.94 ms |
| styled-components | 257.57 ms | 257.94 ms | 243.85 ms | 261.11 ms | 259.38 ms | 255.97 ms |
| treat             | 270.24 ms | 264.68 ms | 267.71 ms | 260.14 ms | 267.55 ms | 266.07 ms |
| typestyle         | 319.79 ms | 334.14 ms | 324.96 ms | 332.41 ms | 359.40 ms | 334.14 ms |

---

`domComplete`

request to `/`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         | 64.65 ms | 38.61 ms | 46.01 ms | 48.00 ms | 45.11 ms | 48.48 ms |
| sass              | 55.18 ms | 41.11 ms | 37.07 ms | 37.29 ms | 36.29 ms | 41.39 ms |
| styled-components | 54.89 ms | 35.55 ms | 37.40 ms | 34.27 ms | 35.60 ms | 39.54 ms |
| treat             | 62.96 ms | 29.62 ms | 29.92 ms | 29.84 ms | 30.50 ms | 36.57 ms |
| typestyle         | 48.73 ms | 32.09 ms | 27.59 ms | 26.75 ms | 28.57 ms | 32.75 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         | 221.35 ms | 207.50 ms | 102.22 ms | 173.84 ms | 186.59 ms | 178.30 ms |
| sass              | 226.03 ms | 242.21 ms | 233.83 ms | 215.83 ms | 242.90 ms | 232.16 ms |
| styled-components | 237.32 ms | 223.49 ms | 220.36 ms | 215.09 ms | 221.41 ms | 223.54 ms |
| treat             | 225.33 ms | 197.81 ms | 102.57 ms | 183.32 ms | 192.10 ms | 180.23 ms |
| typestyle         |  88.43 ms | 106.83 ms |  88.40 ms |  85.25 ms |  84.20 ms |  90.62 ms |

The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         | 64.41 ms | 38.39 ms | 45.82 ms | 47.79 ms | 44.89 ms | 48.26 ms |
| sass              | 54.11 ms | 40.01 ms | 35.89 ms | 36.88 ms | 35.86 ms | 40.55 ms |
| styled-components | 53.29 ms | 34.44 ms | 36.94 ms | 33.81 ms | 35.18 ms | 38.73 ms |
| treat             | 62.76 ms | 29.43 ms | 29.72 ms | 29.62 ms | 30.24 ms | 36.35 ms |
| typestyle         | 48.54 ms | 31.83 ms | 27.41 ms | 26.57 ms | 28.31 ms | 32.53 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         |  77.28 ms |  72.69 ms |  67.57 ms |  66.18 ms |  65.73 ms |  69.89 ms |
| sass              | 109.95 ms | 122.93 ms | 114.54 ms | 112.97 ms | 118.19 ms | 115.72 ms |
| styled-components | 114.29 ms | 112.30 ms | 113.87 ms | 107.68 ms | 103.88 ms | 110.40 ms |
| treat             | 103.88 ms |  67.73 ms |  65.63 ms |  62.79 ms |  65.03 ms |  73.01 ms |
| typestyle         |  63.93 ms |  77.24 ms |  64.49 ms |  62.10 ms |  62.36 ms |  66.02 ms |

The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         | 64.47 ms | 38.43 ms | 45.85 ms | 47.83 ms | 44.95 ms | 48.30 ms |
| sass              | 54.15 ms | 40.04 ms | 35.93 ms | 36.91 ms | 35.91 ms | 40.59 ms |
| styled-components | 53.35 ms | 34.47 ms | 36.99 ms | 33.86 ms | 35.21 ms | 38.78 ms |
| treat             | 62.78 ms | 29.46 ms | 29.76 ms | 29.67 ms | 30.28 ms | 36.39 ms |
| typestyle         | 48.58 ms | 31.86 ms | 27.45 ms | 26.61 ms | 28.35 ms | 32.57 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         |  77.30 ms |  72.72 ms |  67.60 ms |  66.23 ms |  65.79 ms |  69.93 ms |
| sass              | 110.01 ms | 122.97 ms | 114.56 ms | 113.00 ms | 118.23 ms | 115.75 ms |
| styled-components | 114.32 ms | 112.34 ms | 113.96 ms | 107.71 ms | 103.91 ms | 110.45 ms |
| treat             | 103.91 ms |  67.76 ms |  65.66 ms |  62.83 ms |  65.07 ms |  73.05 ms |
| typestyle         |  63.97 ms |  77.28 ms |  64.52 ms |  62.13 ms |  62.39 ms |  66.06 ms |

The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

| library           |   1. run |   2. run |   3. run |   4. run |   5. run |  average |
| :---------------- | -------: | -------: | -------: | -------: | -------: | -------: |
| react-jss         | 64.66 ms | 38.61 ms | 46.01 ms | 48.00 ms | 45.12 ms | 48.48 ms |
| sass              | 55.18 ms | 41.11 ms | 37.08 ms | 37.29 ms | 36.29 ms | 41.39 ms |
| styled-components | 54.90 ms | 35.55 ms | 37.40 ms | 34.28 ms | 35.60 ms | 39.55 ms |
| treat             | 62.96 ms | 29.62 ms | 29.92 ms | 29.85 ms | 30.51 ms | 36.57 ms |
| typestyle         | 48.73 ms | 32.10 ms | 27.61 ms | 26.76 ms | 28.58 ms | 32.76 ms |

request to `/table`

| library           |    1. run |    2. run |    3. run |    4. run |    5. run |   average |
| :---------------- | --------: | --------: | --------: | --------: | --------: | --------: |
| react-jss         | 221.36 ms | 207.50 ms | 102.23 ms | 173.84 ms | 186.60 ms | 178.31 ms |
| sass              | 226.03 ms | 242.22 ms | 233.84 ms | 215.83 ms | 242.90 ms | 232.17 ms |
| styled-components | 237.34 ms | 223.50 ms | 220.37 ms | 215.09 ms | 221.42 ms | 223.54 ms |
| treat             | 225.34 ms | 197.82 ms | 102.58 ms | 183.33 ms | 192.10 ms | 180.23 ms |
| typestyle         |  88.44 ms | 106.84 ms |  88.41 ms |  85.27 ms |  84.21 ms |  90.63 ms |

In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [puppeteer-request template](./templates/puppeteer-requests.template.md)
