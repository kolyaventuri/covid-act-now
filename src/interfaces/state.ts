import {STATES} from '../constants/keys';
import {dataInterface, InterfaceMethod} from './interface';

type StateKey = typeof STATES[number];
const stateMap: {[key in StateKey]?: InterfaceMethod<unknown>} = {};

for (const key of STATES) {
  stateMap[key] = dataInterface<unknown>(key, 'state');
}

export type StateInterfaces = Required<typeof stateMap>;
export const state: StateInterfaces = stateMap as StateInterfaces;

