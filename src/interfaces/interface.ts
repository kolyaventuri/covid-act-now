import {get} from '../get';
import {Scope} from '../types';
import {buildUrl} from '../utils/url';

interface InterfaceMethod<T> {
  (): Promise<T>;
  timeseries(): Promise<T[]>;
}

export const dataInterface = <T>(name: string, scope: Scope | null = null): InterfaceMethod<T> => {
  const __interfaceMethod = async (input: string | null = null): Promise<T> => get<T>(buildUrl({name, scope, input}));

  __interfaceMethod.timeseries = async (input: string | null = null): Promise<T[]> => get<T[]>(buildUrl({name: `${name}.timeseries`, scope, input}));

  return __interfaceMethod;
};
