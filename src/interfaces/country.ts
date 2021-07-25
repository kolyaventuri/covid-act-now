import {dataInterface, InterfaceMethod} from './interface';

export interface CountryInterface extends InterfaceMethod<unknown> {
  (): Promise<unknown>;

  timeseries(): Promise<unknown[]>;
}

const input = 'US';
const countryInterface: CountryInterface = (() => {
  const _interface = dataInterface('country', 'country');

  const mainMethod: CountryInterface = async () => _interface(input);

  mainMethod.timeseries = async () => _interface.timeseries(`${input}.timeseries`);

  return mainMethod;
})();

export const country = countryInterface;
