import {get} from '../get';
import {Scope} from '../types';
import {buildUrl} from '../utils/url';

export interface InterfaceMethod<T> {
  (input?: string): Promise<T>;

  timeseries(): Promise<T[]>;
}

const definedScopes = new Set(['state']);
export const dataInterface = <T>(name: string, scope: Scope | null = null): InterfaceMethod<T> => {
  const __interfaceMethod = async (input: string | undefined = undefined): Promise<T> => {
    if (scope) {
      const value = definedScopes.has(scope) ? name : input;
      return get<T>(buildUrl({name, scope, input: String(value)}));
    }

    return get<T>(buildUrl({name}));
  };

  __interfaceMethod.timeseries = async (input: string | null = null): Promise<T[]> => {
    const timeName = `${name}.timeseries`;
    const value = definedScopes.has(scope!) ? timeName : input;
    return get<T[]>(buildUrl({name: timeName, scope, input: String(value)}));
  };

  return __interfaceMethod;
};
