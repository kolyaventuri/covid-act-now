import test from 'ava';
import {client} from '../helpers/client';

test('can call the county interface for a single county', async t => {
  const fn = async () => client.county('02013')();

  await t.notThrowsAsync(fn);
});

test('calls a county interface with timeseries', async t => {
  const fn = async () => client.county('02013').timeseries();

  await t.notThrowsAsync(fn);
});

