import {STATES} from '../constants/keys';
import {FipsCode} from '../types';
import {State, StateTimeseries} from '../types/state';
import {dataInterface, InterfaceMethod} from './interface';
import {county} from './county';

type StateKey = typeof STATES[number];

interface StateInterface extends InterfaceMethod<State[], StateTimeseries> {
  counties: InterfaceMethod<unknown, unknown>;
}
const stateMap: {[key in StateKey]?: StateInterface} = {};

const createStateInterface = (key: StateKey): StateInterface => {
  const dInterface: Partial<StateInterface> = dataInterface<State[], StateTimeseries>(key, 'state');

  // (kolyaventuri): Easiest to reuse the existing county interface, despite that it expects a FIPS code
  const countyMethod = county(key as FipsCode);
  const counties = async () => countyMethod();

  counties.timeseries = async () => countyMethod.timeseries();

  dInterface.counties = counties;

  return dInterface as StateInterface;
};

for (const key of STATES) {
  stateMap[key] = createStateInterface(key);
}

export type StateInterfaces = Required<typeof stateMap>;
export const state: StateInterfaces = stateMap as StateInterfaces;
