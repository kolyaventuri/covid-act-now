import test from 'ava';

import {state} from '../../../src/interfaces';
import {STATES} from '../../../src/constants/keys';
import {dataInterface} from '../../../src/interfaces/interface';

test('creates an interface for each state', t => {
  for (const stateKey of STATES) {
    t.true(typeof state[stateKey] === typeof dataInterface(stateKey, 'state'), `Missing ${stateKey} interface.`);
  }
});
