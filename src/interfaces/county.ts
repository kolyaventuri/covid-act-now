import {FipsCode} from '../types';
import {County, CountyTimeseries} from '../types/county';
import {dataInterface, InterfaceMethod} from './interface';

export type CountyInterface = (fips: FipsCode) => InterfaceMethod<County, CountyTimeseries>;

export const county: CountyInterface = fips => dataInterface<County, CountyTimeseries>(fips, 'county');
