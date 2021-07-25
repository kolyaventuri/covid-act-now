import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';

import {dataInterface as realInterface} from '../../../src/interfaces/interface';
import {country as realCountry} from '../../../src/interfaces';
import context from '../../../src/context';
import {buildUrl} from '../../../src/utils/url';

context.set('key', 'apikey');

const get = stub();
proxyquire.noCallThru();
const {dataInterface} = proxyquire<{dataInterface: typeof realInterface}>('../../../src/interfaces/interface', {
  '../get': {get},
});

const {country} = proxyquire<{country: typeof realCountry}>('../../../src/interfaces/country', {
  './interface': {dataInterface},
});

test('when making a call for country, uses US as the input', async t => {
  await country();
  await country.timeseries();

  t.true(get.calledWith(buildUrl({name: 'country', scope: 'country', input: 'US'})));
  t.true(get.calledWith(buildUrl({name: 'country.timeseries', scope: 'country', input: 'US.timeseries'})));
});

