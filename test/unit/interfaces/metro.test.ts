import test from 'ava';

import {metro} from '../../../src/interfaces';
import {dataInterface} from '../../../src/interfaces/interface';

test('creates an interface when provided a fips code', t => {
  const metroInterface = metro('12345');

  t.true(typeof metroInterface === typeof dataInterface('12345', 'cbsa'));
});
