import test from 'ava';

import {dataInterface} from '../../src/interfaces/interface';
import {states, counties, metros} from '../../src/interfaces';

test('states is an instance of Interface', t => {
  t.true(typeof states === typeof dataInterface('states'));
});

test('counties is an instance of Interface', t => {
  t.true(typeof counties === typeof dataInterface('states'));
});

test('metros is an instance of Interface', t => {
  t.true(typeof metros === typeof dataInterface('states'));
});

