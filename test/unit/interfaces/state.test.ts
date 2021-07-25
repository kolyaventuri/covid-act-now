import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';

import {state} from '../../../src/interfaces';
import {STATES} from '../../../src/constants/keys';
import {dataInterface} from '../../../src/interfaces/interface';

const {state} = proxyquire

test('creates an interface for each state', t => {
  for (const stateKey of STATES) {
    t.true(typeof state[stateKey] === typeof dataInterface(stateKey, 'state'), `Missing ${stateKey} interface.`);
  }
});

test('adds an additional counties method to the interface', t => {
  t.true(typeof state.az.counties === 'function');
});

test('the additional counties method makes a call to the correct URL', async t => {

});
