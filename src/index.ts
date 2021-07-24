import {states, counties, metros, state, county, metro, country} from './interfaces';
import type {InterfaceMethod} from './interfaces/interface';
import context from './context';
import {StateInterfaces} from './interfaces/state';
import {CountyInterface} from './interfaces/county';

class CovidActNow {
  readonly states: InterfaceMethod<unknown> = states;
  readonly counties: InterfaceMethod<unknown> = counties;
  readonly metros: InterfaceMethod<unknown> = metros;

  readonly state: StateInterfaces = state;
  readonly county: CountyInterface = county;
  readonly metro: InterfaceMethod<unknown> = metro;

  readonly country: InterfaceMethod<unknown> = country;

  constructor(apiKey: string) {
    context.set('key', apiKey);
  }
}

export default CovidActNow;
