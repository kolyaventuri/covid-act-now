import {BASE_URL} from '../constants/urls';
import context from '../context';
import {Scope} from '../types';

interface BuildUrlArgs {
  name: string;
  scope?: Scope | null;
  input?: string | null;
}

export const buildUrl = (options: BuildUrlArgs): string => {
  const {scope, input} = options;
  let {name} = options;

  const {key} = context.getState() as {key: string};
  const scopePrefix = scope ? `${scope}/` : '';
  if (scope === 'country') {
    name = name.endsWith('timeseries') ? 'US.timeseries' : 'US';
  }

  const endpoint = scope ? input! : name;
  const url = `${BASE_URL}${scopePrefix}${endpoint}.json?apiKey=${key}`;

  return url;
};
