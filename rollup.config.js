import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import {cleanupBuild, cleanupDts, cloneTypes} from './rollup/cleanup';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'lib',
      format: 'umd',
      name: 'covidActNow',
      plugins: [terser()]
    },
    plugins: [typescript(), cleanupBuild(), cloneTypes()]
  },
  {
    input: './lib/dts/index.d.ts',
    output: [{file: 'lib/index.d.ts', format: 'umd'}],
    plugins: [dts(), cleanupDts()]
  },
];
