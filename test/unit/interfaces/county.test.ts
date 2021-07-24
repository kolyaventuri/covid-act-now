import test from 'ava';

import {county} from '../../../src/interfaces';
import {dataInterface} from '../../../src/interfaces/interface';

test('creates an interface when provided a fips code', t => {
  const countyInterface = county('12345');
  
  t.true(typeof countyInterface === typeof dataInterface('12345', 'county'));
});

