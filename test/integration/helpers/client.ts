import CovidActNow from '../../../src';

const key = process.env.COVID_ACT_NOW_KEY!;
export const client = new CovidActNow(key);
