import {BASE_URL} from '../constants/urls';
import context from '../context';
import {Scope} from '../types';

export const buildUrl = (name: string, scope: Scope | null = null): string => {
  console.log(scope);
  const {key} = context.getState() as {key: string};
  return `${BASE_URL}/${name}.json?apiKey=${key}`;
};
