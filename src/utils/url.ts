import {BASE_URL} from '../constants/urls';
import context from '../context';
import {Scope} from '../types';

interface BuildUrlArgs {
  name: string;
  scope?: Scope;
  input?: string;
}

export const buildUrl = (opts: BuildUrlArgs): string => {
  const {name, scope} = opts;

  const {key} = context.getState() as {key: string};
  const scopePrefix = scope ? `${scope}/` : '';
  return `${BASE_URL}${scopePrefix}${name}.json?apiKey=${key}`;
};
