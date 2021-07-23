import {fetch} from './fetch';

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const json = await response.json() as T;

  return json;
};
