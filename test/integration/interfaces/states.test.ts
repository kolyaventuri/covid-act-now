import test from 'ava';
import {client} from '../helpers/client';

test('calls the states interface', async t => {
  const fn = async () => client.states();

  await t.notThrowsAsync(fn);
});

test('calls the states interface with timeseries', async t => {
  const fn = async () => client.states.timeseries();

  await t.notThrowsAsync(fn);
});
