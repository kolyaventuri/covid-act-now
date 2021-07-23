import test from 'ava';
import {BASE_URL} from '../../src/constants/urls';
import context from '../../src/context';
import {buildUrl} from '../../src/utils/url';

context.set('key', 'apikey');

test('#buildUrl returns the right URL', t => {
  const result = buildUrl('data');
  t.is(result, `${BASE_URL}/data.json?apiKey=apikey`);
});