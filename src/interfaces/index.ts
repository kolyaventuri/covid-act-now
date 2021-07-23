import {dataInterface} from './interface';

export const states = dataInterface('states');
export const counties = dataInterface('counties');
export const metros = dataInterface('cbsas');

export const state = dataInterface('state', 'state');
export const county = dataInterface('county', 'county');
export const metro = dataInterface('metro', 'cbsa');
