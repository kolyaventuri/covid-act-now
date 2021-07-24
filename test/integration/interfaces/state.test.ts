import test from 'ava';
import {client} from '../helpers/client';

test('can call the state interface for a single state', async t => {
  const fn = async () => client.state.az();

  await t.notThrowsAsync(fn);
});

test('calls a state interface with timeseries', async t => {
  const fn = async () => client.state.az.timeseries();

  await t.notThrowsAsync(fn);
});

