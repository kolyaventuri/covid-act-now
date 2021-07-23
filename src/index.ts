import {states, counties, metros} from './interfaces';
import context from './context';

class CovidActNow {
  readonly states = states;
  readonly counties = counties;
  readonly metros = metros;

  constructor(apiKey: string) {
    context.set('key', apiKey);
  }
}

export default CovidActNow;
