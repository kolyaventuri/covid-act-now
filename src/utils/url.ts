import {BASE_URL} from '../constants/urls';
import context from '../context';
import {Scope} from '../types';

export const buildUrl = (name: string, scope: Scope | null = null): string => {
  const {key} = context.getState() as {key: string};
  const scopePrefix = scope ? `${scope}/` : '';
  return `${BASE_URL}${scopePrefix}${name}.json?apiKey=${key}`;
};
