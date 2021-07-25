import {State, StateTimeseries} from '../types/state';
import {County, CountyTimeseries} from '../types/county';
import {Metro, MetroTimeseries} from '../types/metro';
import {dataInterface} from './interface';

export const states = dataInterface<State[], StateTimeseries[]>('states');
export const counties = dataInterface<County[], CountyTimeseries[]>('counties');
export const metros = dataInterface<Metro[], MetroTimeseries[]>('cbsas');

export {state} from './state';
export {county} from './county';
export {metro} from './metro';

export {country} from './country';
