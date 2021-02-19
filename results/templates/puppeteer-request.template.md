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

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!FirstMeaningfulPaintHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!FirstMeaningfulPaintTable!~!

**First Meaningful Paint (FMP)** is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded.  It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

---

`domComplete`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domCompleteHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domCompleteTable!~!

The **domComplete** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to complete.

---

`domInteractive`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domInteractiveHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domInteractiveTable!~!

The **domInteractive** `read-only` property returns a `timestamp` representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to interactive.

---

`domContentLoadedEventEnd`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domContentLoadedEventEndHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!domContentLoadedEventEndTable!~!

The **domContentLoadedEventEnd** `read-only` property returns a `timestamp` representing the time value equal to the time immediately after the current document's `DOMContentLoaded` event completes.

---

`duration`

request to `/`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!durationHome!~!

request to `/table`

|library|1. run|2. run|3. run|average|
|-------|-----:|-----:|-----:|------:|
!~!durationTable!~!

In this case we are measuring the **duration** for the `navigation` performance type. It returns the `timestamp` that is the difference between the `PerformanceNavigationTiming.loadEventEnd` and `PerformanceEntry.startTime` properties, respectively

---

## Important

This file will be overwritten with every test-run, so any changes to it will get lost eventually. Changes to the texts can be made to the [puppeteer-request template](./templates/puppeteer-requests.template.md)
