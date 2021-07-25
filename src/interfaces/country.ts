import {Country, CountryTimeseries} from '../types/country';
import {dataInterface, InterfaceMethod} from './interface';

export interface CountryInterface extends InterfaceMethod<Country, CountryTimeseries> {
  (): Promise<Country>;

  timeseries(): Promise<CountryTimeseries>;
}

const input = 'US';
const countryInterface: CountryInterface = (() => {
  const _interface = dataInterface<Country, CountryTimeseries>('country', 'country');

  const mainMethod: CountryInterface = async () => _interface(input);

  mainMethod.timeseries = async () => _interface.timeseries(`${input}.timeseries`);

  return mainMethod;
})();

export const country = countryInterface;
