import { FipsCode } from "../types";
import { dataInterface, InterfaceMethod } from "./interface";

export type CountyInterface = (fips: FipsCode) => InterfaceMethod<unknown>;

export const county: CountyInterface = (fips) => dataInterface(fips, 'county');
