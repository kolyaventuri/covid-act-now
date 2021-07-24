import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';

import {dataInterface as realInterface} from '../../../src/interfaces/interface';
import context from '../../../src/context';
import {buildUrl} from '../../../src/utils/url';

context.set('key', 'apikey');

const get = stub();
const {dataInterface} = proxyquire<{dataInterface: typeof realInterface}>('../../../src/interfaces/interface', {
  '../get': {get},
});

const idata = dataInterface('data');

test('top level makes a function call', async t => {
  await idata();

  t.true(get.calledWith(buildUrl({name: 'data'})));
});

test('adds a timeseries call', async t => {
  await idata.timeseries();

  t.true(get.calledWith(buildUrl({name: 'data.timeseries'})));
});

test('if a scope is defined, the top level call accepts an argument', async t => {
  const scopedData = dataInterface('scopeData', 'county');

  await scopedData('foo');

  t.true(get.calledWith(buildUrl({name: 'scopeData', scope: 'county', input: 'foo'})));
});
