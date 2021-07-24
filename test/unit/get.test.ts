import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';
import {get as realGet} from '../../src/get';

const data = {foo: 'bar'};
const fetchResponse = {
  json: stub().resolves(data),
};
const fetch = stub().resolves(fetchResponse);

const {get} = proxyquire<{get: typeof realGet}>('../../src/get', {
  './fetch': {fetch},
});

test('makes a fetch request to the specificed URL', async t => {
  const url = 'https://some-url.com';
  const result = await get<typeof data>(url);

  t.deepEqual(result, data);
  t.true(fetch.calledWith(url));
});
