import test from 'ava';

import {dataInterface} from '../../../src/interfaces/interface';
import {states, counties, metros, county, metro, country} from '../../../src/interfaces';

test('states is an instance of Interface', t => {
  t.true(typeof states === typeof dataInterface('states'));
});

test('counties is an instance of Interface', t => {
  t.true(typeof counties === typeof dataInterface('states'));
});

test('metros is an instance of Interface', t => {
  t.true(typeof metros === typeof dataInterface('cbsas'));
});

///

test('county is an instance of Interface', t => {
  t.true(typeof county === typeof dataInterface('county', 'county'));
});

test('metro is an instance of Interface', t => {
  t.true(typeof metro === typeof dataInterface('metro', 'cbsa'));
});

///

test('country is an instance of Interface', t => {
  t.true(typeof country === typeof dataInterface('country', 'country'));
});
