import test from 'ava';
import {BASE_URL} from '../../src/constants/urls';
import context from '../../src/context';
import {buildUrl} from '../../src/utils/url';

context.set('key', 'apikey');

test('#buildUrl returns the right URL', t => {
  const result = buildUrl({name: 'data'});
  t.is(result, `${BASE_URL}data.json?apiKey=apikey`);
});

test('#buildUrl can return a scoped URL', t => {
  const result = buildUrl({name: 'data', scope: 'cbsa', input: 'blah'});
  t.is(result, `${BASE_URL}cbsa/blah.json?apiKey=apikey`);
});

test('#buildUrl builds the correct URL for country data', t => {
  const result = buildUrl({name: 'country', scope: 'country'});
  t.is(result, `${BASE_URL}country/US.json?apiKey=apikey`);
});

test('#buildUrl can return a scoped URL with input data', t => {
  const result = buildUrl({name: 'data', scope: 'cbsa', input: 'some-id'});
  t.is(result, `${BASE_URL}cbsa/some-id.json?apiKey=apikey`);
});

test('#buildUrl does not use the input if no scope is provided', t => {
  const result = buildUrl({name: 'data', input: 'other-data'});
  t.is(result, `${BASE_URL}data.json?apiKey=apikey`);
});
