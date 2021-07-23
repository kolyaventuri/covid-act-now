import {BASE_URL} from '../constants/urls';
import context from '../context';
import {Scope} from '../types';

interface BuildUrlArgs {
  name: string;
  scope?: Scope | null;
  input?: string | null;
}

export const buildUrl = (options: BuildUrlArgs): string => {
  const {scope} = options;
  let {name} = options;

  const {key} = context.getState() as {key: string};
  const scopePrefix = scope ? `${scope}/` : '';
  if (scope === 'country') {
    name = name.endsWith('timeseries') ? 'US.timeseries' : 'US';
  }

  return `${BASE_URL}${scopePrefix}${name}.json?apiKey=${key}`;
};
