import test from 'ava';
import CovidActNow from '../../src';
import * as interfaces from '../../src/interfaces';
import context from '../../src/context';

test('the API client can be instantiated with my key', t => {
  const key = 'abcd123';
  new CovidActNow(key); /* eslint-disable-line no-new */

  const state = context.getState();
  t.is(state.key, key);
});

const client = new CovidActNow('abc');
const expectedInterfaces = ['states', 'counties', 'metros', 'state', 'county', 'metro', 'country'];
for (const name of expectedInterfaces) {
  test(`contains the ${name} interface`, t => {
    t.is((client as any)[name], (interfaces as any)[name]);
  });
}
