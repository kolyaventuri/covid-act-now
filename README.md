# CovidActNow

<img src="./img/covid-act-now.png" width="200px">

---
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
## A [CovidActNow.org](https://covidactnow.org) API client written in TypeScript.

_Note:_ @kolyaventuri is not affiliated with CovidActNow in any way. This is moreso a side-project, as a way to explore building a strictly typed API client from the ground up.

---

# Installing
Browser:
`<script type="text/javascript" src="https://unpkg.com/@kolyaventuri/covid-act-now"/>`
Node:
`npm install @kolyaventuri/covid-act-now`

# Usage
```ts
// import CovidActNow from '@kolyaventuri/covid-act-now';

const client = new CovidActNow(`{API_KEY}`);

...

await client.state.az(); // Get current data for Arizona
```

# The API
Generally the structure follows what is outlined on CovidActNow.org, under their API docs section (https://apidocs.covidactnow.org/api/). The schema outlined in their docs is equivalent to the included type definitions.
---
## All States
### client.states()
- Returns a Promise, resolving with a summary for all states.

### client.states.timeseries()
- Returns a Promise, resolving with a summary of timeseries data for all states
---
## Singular State
### client.state.\<state abbreviation\>()
- Returns a Promise, resolving with a summary for a single state (ex: `client.state.az()`)

### client.state.\<state abbreviation\>.timeseries()
- Returns a Promise, resolving with a summary with timeseries data for a single state (ex: `client.state.az.timeseries()`)

### client.state.\<state abbreviation\>.counties()
- Returns a Promise, resolving with a summary for all counties for a single state (ex: `client.state.az.counties()`)

### client.state\<state abbreviation\>.counties.timeseries()
- Returns a Promise, resolving with a summary with timeseries data for all counties in a single state (ex: `client.state.az.counties.timeseries()`)
---
## All Counties
### client.counties()
- Returns a Promise, resolving with a summary for all counties.

### client.counties.timeseries()
- Returns a Promise, resolving with a summary with timeseries data for all counties.
---
## Singular County
### client.county('{fipsCode}')()
- Returns a Promise, resolving with a summary of a single county.

### client.county(`{fipsCode}`).timeseries()
- Returns a Promise, resolving with a summary with timeseries data for a single county.

### All counties in a state
- See entry under Singular State.
---
## All Metros (CBSAs)
### client.metros()
- Returns a Promise, resolving with a summary for all metro areas.
### client.metros.timeseries()
- Returns a Promise, resolving with a summary with timeseries data for all metro areas.

---
## Singular Metro (CBSA)
### client.metro(`{fipsCode}`)()
- Returns a Promise, resolving with a summary for a single metro area.

### client.metro(`{fipsCode}`).timeseries()
- Returns a Promise, resolving with a summary with timeseries data for a single metro area.
---
## Country Level Data
### client.country()
- Returns a Promise, resolving with a summary for the entire United States.
### client.country.timeseries()
- Returns a Promise, resolving with a summary with timeseries data for the entire United States.

---
# Contributing
PRs are more than welcome! There's some more work to do, such as parsing dates out of the response data (`string -> Date` conversion), and some more robust docs.

## Running Tests
- `npm run test` will run the linter (`tsc && xo`), and the test with `ava`
- `npm run test:integration` will run a basic integration suite, provided you have defined your `COVID_ACT_NOW_KEY` in a `.env` file (see `.env.example`) 
