import {FipsCode} from '../types';
import {dataInterface, InterfaceMethod} from './interface';

export type MetroInterface = (fips: FipsCode) => InterfaceMethod<unknown>;

export const metro: MetroInterface = fips => dataInterface(fips, 'cbsa');

