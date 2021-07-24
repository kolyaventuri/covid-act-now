import test from 'ava';
import {client} from '../helpers/client';

test('can call the metro interface for a single county', async t => {
  const fn = async () => client.metro('10100')();

  await t.notThrowsAsync(fn);
});

test('calls a metro interface with timeseries', async t => {
  const fn = async () => client.metro('10100').timeseries();

  await t.notThrowsAsync(fn);
});

