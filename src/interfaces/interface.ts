import {get} from '../get';
import {Scope} from '../types';
import {buildUrl} from '../utils/url';

export interface InterfaceMethod<T, P> {
  (input?: string): Promise<T>;

  timeseries(input?: string): Promise<P>;
}

const definedScopes = new Set(['state', 'county', 'cbsa']);
export const dataInterface = <T, P>(name: string, scope: Scope | null = null): InterfaceMethod<T, P> => {
  const __interfaceMethod = async (input: string | undefined = undefined): Promise<T> => {
    if (scope) {
      const value = definedScopes.has(scope) ? name.toUpperCase() : input;
      return get<T>(buildUrl({name, scope, input: String(value)}));
    }

    return get<T>(buildUrl({name}));
  };

  __interfaceMethod.timeseries = async (input: string | null = null): Promise<P> => {
    const value = definedScopes.has(scope!) ? `${name.toUpperCase()}.timeseries` : input;
    return get<P>(buildUrl({name: `${name}.timeseries`, scope, input: String(value)}));
  };

  return __interfaceMethod;
};
