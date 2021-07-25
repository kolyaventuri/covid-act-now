import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';

import {state as realState} from '../../../src/interfaces';
import {STATES} from '../../../src/constants/keys';
import {dataInterface} from '../../../src/interfaces/interface';

const countyMethod = stub();
(countyMethod as any).timeseries = stub();
const county = stub().returns(countyMethod);

const {state} = proxyquire.noCallThru()<{state: typeof realState}>('../../../src/interfaces/state', {
  './county': {county},
});

test('creates an interface for each state', t => {
  for (const stateKey of STATES) {
    t.true(typeof state[stateKey] === typeof dataInterface(stateKey, 'state'), `Missing ${stateKey} interface.`);
  }
});

test('adds an additional counties method to the interface', t => {
  t.true(typeof state.az.counties === 'function');
  t.true(county.calledWith('az'));
});

test('the additional counties method makes a call to the county interface', async t => {
  await state.az.counties();
  await state.az.counties.timeseries();

  t.true(countyMethod.called);
  t.true((countyMethod as any).timeseries.called);
});
