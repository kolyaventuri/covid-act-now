import {dataInterface} from './interface';

export const states = dataInterface('states');
export const counties = dataInterface('counties');
export const metros = dataInterface('cbsas');

export {state} from './state';
export {county} from './county';
export {metro} from './metro';

export const country = dataInterface('country', 'country');
