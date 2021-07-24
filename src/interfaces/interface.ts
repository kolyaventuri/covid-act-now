import {get} from '../get';
import {Scope} from '../types';
import {buildUrl} from '../utils/url';

export interface InterfaceMethod<T> {
  (input?: string): Promise<T>;

  timeseries(): Promise<T[]>;
}

export const dataInterface = <T>(name: string, scope: Scope | null = null): InterfaceMethod<T> => {
  const __interfaceMethod = async (input: string | undefined = undefined): Promise<T> => {
    if (scope) {
      return get<T>(buildUrl({name, scope, input: String(input)}));
    }

    return get<T>(buildUrl({name}));
  };

  __interfaceMethod.timeseries = async (input: string | null = null): Promise<T[]> => get<T[]>(buildUrl({name: `${name}.timeseries`, scope, input}));

  return __interfaceMethod;
};
