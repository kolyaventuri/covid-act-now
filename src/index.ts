import {states, counties, metros, state, county, metro, country} from './interfaces';
import context from './context';

class CovidActNow {
  readonly states = states;
  readonly counties = counties;
  readonly metros = metros;

  readonly state = state;
  readonly county = county;
  readonly metro = metro;

  readonly country = country;

  constructor(apiKey: string) {
    context.set('key', apiKey);
  }
}

export default CovidActNow;
