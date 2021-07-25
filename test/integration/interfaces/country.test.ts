import test from 'ava';
import {client} from '../helpers/client';

test('calls the country interface', async t => {
  const fn = async () => client.country();

  await t.notThrowsAsync(fn);
});

test('calls the country interface with timeseries', async t => {
  const fn = async () => client.country.timeseries();

  await t.notThrowsAsync(fn);
});

