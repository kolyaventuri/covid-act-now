import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';

import {dataInterface as realInterface} from '../../src/interfaces/interface';
import context from '../../src/context';
import {buildUrl} from '../../src/utils/url';

context.set('key', 'apikey');

const get = stub();
const {dataInterface} = proxyquire<{dataInterface: typeof realInterface}>('../../src/interfaces/interface', {
  '../get': {get},
});

const idata = dataInterface('data');

test('top level makes a function call', async t => {
  await idata();

  t.true(get.calledWith(buildUrl('data')));
});

test('adds a timeseries call', async t => {
  await idata.timeseries();

  t.true(get.calledWith(buildUrl('data.timeseries')));
});
