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

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|45.29 ms|29.55 ms|39.48 ms|43.46 ms|38.61 ms|39.28 ms|
|react-jss|53.55 ms|57.04 ms|59.76 ms|55.78 ms|55.86 ms|56.40 ms|
|sass|49.76 ms|55.49 ms|48.35 ms|47.26 ms|62.33 ms|52.64 ms|
|styled-components|46.04 ms|54.16 ms|55.23 ms|60.09 ms|52.91 ms|53.69 ms|
|treat|51.57 ms|48.49 ms|49.99 ms|55.53 ms|51.07 ms|51.33 ms|
|typestyle|50.06 ms|63.52 ms|63.42 ms|67.19 ms|63.17 ms|61.47 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|220.53 ms|214.83 ms|223.24 ms|210.33 ms|220.32 ms|217.85 ms|
|react-jss|179.41 ms|189.65 ms|183.26 ms|192.28 ms|195.49 ms|188.02 ms|
|sass|179.25 ms|179.58 ms|172.28 ms|175.40 ms|175.85 ms|176.47 ms|
|styled-components|223.56 ms|223.05 ms|225.78 ms|228.22 ms|229.61 ms|226.04 ms|
|treat|173.51 ms|190.44 ms|186.60 ms|185.79 ms|190.57 ms|185.38 ms|
|typestyle|276.54 ms|296.34 ms|288.70 ms|291.71 ms|281.62 ms|286.98 ms|


**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded. It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`LayoutCount`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|2|2|2|2|1|
|react-jss|2|2|2|2|2|
|sass|2|2|2|2|2|
|styled-components|2|2|2|2|2|
|treat|2|2|2|2|2|
|typestyle|3|3|3|3|3|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|4|4|3|4|2|
|react-jss|3|3|3|4|4|
|sass|4|3|3|4|4|
|styled-components|3|4|3|3|3|
|treat|3|4|3|3|4|
|typestyle|6|6|5|6|5|


---

`LayoutDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|0.36 ms|0.34 ms|0.39 ms|0.36 ms|0.30 ms|0.35 ms|
|react-jss|0.46 ms|0.46 ms|0.51 ms|0.39 ms|0.41 ms|0.45 ms|
|sass|0.37 ms|0.42 ms|0.37 ms|0.40 ms|0.43 ms|0.40 ms|
|styled-components|0.39 ms|0.45 ms|0.44 ms|0.42 ms|0.44 ms|0.43 ms|
|treat|0.33 ms|0.42 ms|0.42 ms|0.39 ms|0.39 ms|0.39 ms|
|typestyle|0.40 ms|0.46 ms|0.44 ms|0.56 ms|0.44 ms|0.46 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|68.91 ms|60.93 ms|68.61 ms|60.69 ms|64.08 ms|64.64 ms|
|react-jss|62.86 ms|59.24 ms|58.64 ms|61.30 ms|62.89 ms|60.98 ms|
|sass|62.61 ms|61.01 ms|58.22 ms|59.03 ms|57.54 ms|59.68 ms|
|styled-components|57.58 ms|58.29 ms|58.28 ms|57.12 ms|58.15 ms|57.88 ms|
|treat|59.22 ms|59.29 ms|57.37 ms|58.85 ms|60.55 ms|59.06 ms|
|typestyle|131.24 ms|137.69 ms|130.77 ms|133.67 ms|127.43 ms|132.16 ms|


---

`RecalcStyleCount`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|2|2|2|2|1|
|react-jss|2|2|2|2|2|
|sass|3|2|3|3|2|
|styled-components|3|3|2|2|2|
|treat|2|2|2|2|2|
|typestyle|3|3|3|3|3|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|
|:-----|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|4|4|3|4|2|
|react-jss|3|3|3|4|4|
|sass|5|3|4|5|4|
|styled-components|4|5|3|3|3|
|treat|3|4|3|3|4|
|typestyle|6|6|5|6|5|


---

`RecalcStyleDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|0.34 ms|0.30 ms|0.33 ms|0.32 ms|0.22 ms|0.30 ms|
|react-jss|0.39 ms|0.35 ms|0.36 ms|0.36 ms|0.35 ms|0.36 ms|
|sass|0.38 ms|0.41 ms|0.39 ms|0.42 ms|0.39 ms|0.40 ms|
|styled-components|0.37 ms|0.45 ms|0.37 ms|0.40 ms|0.36 ms|0.39 ms|
|treat|0.36 ms|0.39 ms|0.39 ms|0.39 ms|0.39 ms|0.38 ms|
|typestyle|0.36 ms|0.42 ms|0.39 ms|0.52 ms|0.40 ms|0.42 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|37.13 ms|32.36 ms|34.99 ms|32.52 ms|32.65 ms|33.93 ms|
|react-jss|33.39 ms|34.72 ms|32.45 ms|34.20 ms|34.47 ms|33.85 ms|
|sass|36.79 ms|36.35 ms|35.70 ms|34.86 ms|37.22 ms|36.18 ms|
|styled-components|33.42 ms|33.66 ms|32.71 ms|33.90 ms|32.58 ms|33.25 ms|
|treat|35.78 ms|36.22 ms|35.90 ms|35.19 ms|35.59 ms|35.74 ms|
|typestyle|62.93 ms|64.29 ms|61.80 ms|62.95 ms|60.54 ms|62.50 ms|


---

`ScriptDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|5.34 ms|5.18 ms|5.23 ms|5.18 ms|5.05 ms|5.20 ms|
|react-jss|8.92 ms|8.85 ms|8.87 ms|8.60 ms|8.89 ms|8.83 ms|
|sass|4.39 ms|5.26 ms|4.77 ms|5.23 ms|5.38 ms|5.01 ms|
|styled-components|7.25 ms|8.26 ms|8.28 ms|8.49 ms|8.55 ms|8.17 ms|
|treat|18.93 ms|5.09 ms|5.01 ms|4.97 ms|4.91 ms|7.78 ms|
|typestyle|20.50 ms|24.21 ms|23.67 ms|24.15 ms|23.51 ms|23.21 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|88.14 ms|93.52 ms|90.30 ms|89.47 ms|93.07 ms|90.90 ms|
|react-jss|58.78 ms|67.53 ms|64.51 ms|67.53 ms|67.71 ms|65.21 ms|
|sass|46.03 ms|50.04 ms|47.77 ms|48.80 ms|49.94 ms|48.51 ms|
|styled-components|102.08 ms|103.34 ms|106.15 ms|107.48 ms|109.00 ms|105.61 ms|
|treat|64.17 ms|60.65 ms|60.09 ms|59.28 ms|59.30 ms|60.70 ms|
|typestyle|68.24 ms|81.75 ms|80.51 ms|82.31 ms|80.01 ms|78.56 ms|


---

`TaskDuration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|50.68 ms|43.13 ms|53.26 ms|53.68 ms|49.80 ms|50.11 ms|
|react-jss|35.71 ms|35.52 ms|36.01 ms|35.86 ms|37.20 ms|36.06 ms|
|sass|38.46 ms|34.72 ms|29.00 ms|32.52 ms|34.13 ms|33.77 ms|
|styled-components|30.04 ms|36.77 ms|33.32 ms|36.68 ms|34.26 ms|34.22 ms|
|treat|38.95 ms|32.28 ms|30.34 ms|31.77 ms|32.26 ms|33.12 ms|
|typestyle|39.49 ms|49.94 ms|49.49 ms|52.26 ms|49.44 ms|48.13 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|265.35 ms|250.70 ms|269.67 ms|257.11 ms|262.34 ms|261.03 ms|
|react-jss|211.05 ms|217.20 ms|213.04 ms|222.55 ms|227.04 ms|218.17 ms|
|sass|210.30 ms|218.39 ms|206.48 ms|212.51 ms|214.99 ms|212.53 ms|
|styled-components|256.59 ms|251.63 ms|250.41 ms|254.20 ms|252.93 ms|253.15 ms|
|treat|204.48 ms|227.79 ms|222.64 ms|224.10 ms|228.93 ms|221.59 ms|
|typestyle|321.99 ms|338.74 ms|328.88 ms|336.25 ms|322.46 ms|329.66 ms|


---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|75.30 ms|52.01 ms|46.48 ms|49.20 ms|49.01 ms|54.40 ms|
|react-jss|60.26 ms|55.23 ms|37.58 ms|38.29 ms|40.54 ms|46.38 ms|
|sass|56.65 ms|34.51 ms|34.15 ms|34.26 ms|33.23 ms|38.56 ms|
|styled-components|64.15 ms|36.99 ms|36.70 ms|37.46 ms|37.34 ms|42.53 ms|
|treat|53.69 ms|32.63 ms|27.45 ms|26.75 ms|27.07 ms|33.52 ms|
|typestyle|50.49 ms|25.97 ms|27.24 ms|26.23 ms|26.77 ms|31.34 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|255.45 ms|201.19 ms|210.99 ms|215.70 ms|246.13 ms|225.89 ms|
|react-jss|203.28 ms|96.63 ms|174.06 ms|100.39 ms|177.38 ms|150.35 ms|
|sass|193.21 ms|88.31 ms|92.50 ms|90.63 ms|86.45 ms|110.22 ms|
|styled-components|243.28 ms|219.81 ms|219.58 ms|223.32 ms|216.57 ms|224.51 ms|
|treat|197.57 ms|171.96 ms|93.05 ms|94.46 ms|94.46 ms|130.30 ms|
|typestyle|85.04 ms|84.17 ms|89.28 ms|83.01 ms|81.36 ms|84.57 ms|


The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|62.82 ms|50.85 ms|45.24 ms|47.89 ms|47.69 ms|50.90 ms|
|react-jss|59.85 ms|54.13 ms|36.42 ms|37.11 ms|36.75 ms|44.85 ms|
|sass|55.40 ms|34.09 ms|33.61 ms|33.77 ms|32.62 ms|37.90 ms|
|styled-components|62.80 ms|36.59 ms|36.30 ms|36.90 ms|36.88 ms|41.90 ms|
|treat|53.38 ms|32.36 ms|27.07 ms|26.29 ms|26.58 ms|33.14 ms|
|typestyle|50.20 ms|25.79 ms|27.04 ms|26.04 ms|26.58 ms|31.13 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|112.64 ms|88.76 ms|102.37 ms|102.82 ms|101.96 ms|101.71 ms|
|react-jss|77.08 ms|63.64 ms|64.83 ms|64.10 ms|63.37 ms|66.61 ms|
|sass|59.05 ms|53.75 ms|56.82 ms|55.87 ms|53.41 ms|55.78 ms|
|styled-components|118.18 ms|107.68 ms|110.02 ms|111.22 ms|108.01 ms|111.02 ms|
|treat|70.90 ms|62.69 ms|59.07 ms|60.37 ms|59.80 ms|62.56 ms|
|typestyle|64.81 ms|63.97 ms|63.82 ms|62.26 ms|60.67 ms|63.11 ms|


The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|62.85 ms|50.89 ms|45.28 ms|47.93 ms|47.75 ms|50.94 ms|
|react-jss|59.89 ms|54.16 ms|36.46 ms|37.14 ms|36.79 ms|44.89 ms|
|sass|55.44 ms|34.13 ms|33.66 ms|33.81 ms|32.65 ms|37.94 ms|
|styled-components|62.84 ms|36.63 ms|36.33 ms|36.97 ms|36.94 ms|41.94 ms|
|treat|53.41 ms|32.40 ms|27.11 ms|26.32 ms|26.61 ms|33.17 ms|
|typestyle|50.26 ms|25.83 ms|27.09 ms|26.08 ms|26.62 ms|31.18 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|112.67 ms|88.79 ms|102.41 ms|102.85 ms|102.01 ms|101.75 ms|
|react-jss|77.12 ms|63.67 ms|64.86 ms|64.13 ms|63.40 ms|66.64 ms|
|sass|59.06 ms|53.78 ms|56.88 ms|55.90 ms|53.44 ms|55.81 ms|
|styled-components|118.21 ms|107.73 ms|110.05 ms|111.24 ms|108.04 ms|111.05 ms|
|treat|70.94 ms|62.72 ms|59.10 ms|60.40 ms|59.83 ms|62.60 ms|
|typestyle|64.84 ms|64.00 ms|63.85 ms|62.29 ms|60.70 ms|63.14 ms|


The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|75.31 ms|52.02 ms|46.48 ms|49.21 ms|49.01 ms|54.41 ms|
|react-jss|60.26 ms|55.23 ms|37.59 ms|38.30 ms|40.56 ms|46.39 ms|
|sass|56.65 ms|34.52 ms|34.17 ms|34.27 ms|33.23 ms|38.57 ms|
|styled-components|64.16 ms|37.00 ms|36.70 ms|37.47 ms|37.34 ms|42.53 ms|
|treat|53.70 ms|32.64 ms|27.46 ms|26.75 ms|27.08 ms|33.53 ms|
|typestyle|50.50 ms|25.98 ms|27.25 ms|26.23 ms|26.77 ms|31.35 ms|


request to `/table`

|library|1. run|2. run|3. run|4. run|5. run|average|
|:-----|-----:|-----:|-----:|-----:|-----:|-----:|
|emotion-styled|255.45 ms|201.19 ms|211.00 ms|215.71 ms|246.13 ms|225.90 ms|
|react-jss|203.29 ms|96.63 ms|174.07 ms|100.39 ms|177.39 ms|150.35 ms|
|sass|193.22 ms|88.32 ms|92.52 ms|90.63 ms|86.46 ms|110.23 ms|
|styled-components|243.28 ms|219.82 ms|219.58 ms|223.33 ms|216.58 ms|224.52 ms|
|treat|197.58 ms|171.96 ms|93.06 ms|94.47 ms|94.46 ms|130.31 ms|
|typestyle|85.04 ms|84.17 ms|89.28 ms|83.01 ms|81.37 ms|84.58 ms|


In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [puppeteer-request template](./templates/puppeteer-requests.template.md)
