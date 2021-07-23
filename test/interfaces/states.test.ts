import test from 'ava';

import {dataInterface} from '../../src/interfaces/interface';
import {states} from '../../src/interfaces';

test('is an instance of Interface', t => {
  t.true(typeof states === typeof dataInterface('states'));
});
