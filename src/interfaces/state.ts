import {STATES} from '../constants/keys';
import {dataInterface, InterfaceMethod} from './interface';

type StateKey = typeof STATES[number];
interface StateInterface extends InterfaceMethod<unknown> {
  counties: () => Promise<unknown>
}
const stateMap: {[key in StateKey]?: StateInterface} = {};

const createStateInterface = (key: StateKey): StateInterface => {
  const dInterface: Partial<StateInterface> = dataInterface<unknown>(key, 'state');

  dInterface.counties = async () => {
    return 1;
  };

  return dInterface as StateInterface;
}

for (const key of STATES) {
  stateMap[key] = createStateInterface(key);
}

export type StateInterfaces = Required<typeof stateMap>;
export const state: StateInterfaces = stateMap as StateInterfaces;

