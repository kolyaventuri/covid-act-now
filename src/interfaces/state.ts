import {STATES} from '../constants/keys';
import {FipsCode} from '../types/shared';
import {State, StateTimeseries} from '../types/state';
import {County, CountyTimeseries} from '../types/county';
import {dataInterface, InterfaceMethod} from './interface';
import {county} from './county';

type StateKey = typeof STATES[number];
type CountiesInterface = InterfaceMethod<County[], CountyTimeseries[]>;

interface StateInterface extends InterfaceMethod<State[], StateTimeseries> {
  counties: CountiesInterface;
}
const stateMap: {[key in StateKey]?: StateInterface} = {};

const createStateInterface = (key: StateKey): StateInterface => {
  const dInterface: Partial<StateInterface> = dataInterface<State[], StateTimeseries>(key, 'state');

  // (kolyaventuri): Easiest to reuse the existing county interface, despite that it expects a FIPS code
  const countyMethod = (county(key as FipsCode)) as unknown as CountiesInterface;
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
