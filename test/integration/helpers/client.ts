import CovidActNow from '../../../src';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const key = process.env.COVID_ACT_NOW_KEY!;
export const client = new CovidActNow(key);
