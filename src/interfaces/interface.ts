import {get} from '../get';
import {Scope} from '../types';
import {buildUrl} from '../utils/url';

interface InterfaceMethod<T> {
  (): Promise<T>;
  timeseries(): Promise<T[]>;
}

export const dataInterface = <T>(name: string, scope: Scope | null = null): InterfaceMethod<T> => {
  const __interfaceMethod = async (): Promise<T> => get<T>(buildUrl(name, scope));

  __interfaceMethod.timeseries = async (): Promise<T[]> => get<T[]>(buildUrl(`${name}.timeseries`, scope));

  return __interfaceMethod;
};
