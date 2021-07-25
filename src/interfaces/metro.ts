import {FipsCode} from '../types';
import {Metro, MetroTimeseries} from '../types/metro';
import {dataInterface, InterfaceMethod} from './interface';

export type MetroInterface = (fips: FipsCode) => InterfaceMethod<Metro, MetroTimeseries>;

export const metro: MetroInterface = fips => dataInterface<Metro, MetroTimeseries>(fips, 'cbsa');

