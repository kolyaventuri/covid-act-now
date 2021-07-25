import {states, counties, metros, state, county, metro, country} from './interfaces';
import type {InterfaceMethod} from './interfaces/interface';
import context from './context';
import {StateInterfaces} from './interfaces/state';
import {CountyInterface} from './interfaces/county';
import {MetroInterface} from './interfaces/metro';
import {CountryInterface} from './interfaces/country';
import {State, StateTimeseries} from './types/state';

class CovidActNow {
  readonly states: InterfaceMethod<State[], StateTimeseries> = states;
  readonly counties: InterfaceMethod<unknown, unknown> = counties;
  readonly metros: InterfaceMethod<unknown, unknown> = metros;

  readonly state: StateInterfaces = state;
  readonly county: CountyInterface = county;
  readonly metro: MetroInterface = metro;

  readonly country: CountryInterface = country;

  constructor(apiKey: string) {
    context.set('key', apiKey);
  }
}

export default CovidActNow;
