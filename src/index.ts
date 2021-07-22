import {states} from './interfaces';
import context from './context';

class CovidActNow {
  readonly states = states;

  constructor(apiKey: string) {
    context.set('key', apiKey);
  }
}

export default CovidActNow;
