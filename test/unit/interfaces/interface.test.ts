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

test('if the scope is state, use the name as the input', async t => {
  const scopedData = dataInterface('az', 'state');

  await scopedData();
  await scopedData.timeseries();

  t.true(get.calledWith(buildUrl({name: 'az', scope: 'state', input: 'AZ'})));
  t.true(get.calledWith(buildUrl({name: 'az.timeseries', scope: 'state', input: 'AZ.timeseries'})));
});

test('if the scope is county, use the name as the input', async t => {
  const scopedData = dataInterface('01234', 'county');

  await scopedData();
  await scopedData.timeseries();

  t.true(get.calledWith(buildUrl({name: '01234', scope: 'county', input: '01234'})));
  t.true(get.calledWith(buildUrl({name: '01234.timeseries', scope: 'county', input: '01234.timeseries'})));
});

