import test from 'ava';
import CovidActNow from '../src';

test('the API client can be instantiated with my key', t => {
  const key = 'abcd123';

  const client = new CovidActNow(key);

  // (kolyaventuri): Skirts around a TS error due to private member access
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  t.is((client as any).__key, key);
});
