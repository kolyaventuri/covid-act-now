import test from 'ava';
import CovidActNow from '../src';
import {states} from '../src/interfaces';
import context from '../src/context';

test('the API client can be instantiated with my key', t => {
  const key = 'abcd123';
  new CovidActNow(key);

  const state = context.getState();
  t.is(state.key, key);
});

const client = new CovidActNow('abc');
test('contains the states interface', t => {
  t.is(client.states, states);
});
