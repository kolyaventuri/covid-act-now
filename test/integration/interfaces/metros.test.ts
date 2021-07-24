import test from 'ava';
import {client} from '../helpers/client';
import { timeoutTest } from '../helpers/timeout-test';

test('calls the metros interface', async t => {
  const fn = () => client.metros();

  await t.notThrowsAsync(fn);
});

test('calls the metros interface with timeseries', async t => {
  /* (kolyaventuri): WARNING. This is just such a large response, that it's more reliable to 
  * just wait for it to not fail within 5s, than it is to parse the whole data set. 
  */
  const fn = () => timeoutTest(client.metros.timeseries, 5000);

  await t.notThrowsAsync(fn);
});
