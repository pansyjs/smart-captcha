import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { PluginPure as pure } from 'rollup-plugin-pure';

const pluginPure = pure({
  functions: ['defineComponent'],
});
const pluginDts = dts();

const externals = [
  '@pansy/use-external',
];

export default defineConfig([
  {
    input: 'src/index.tsx',
    plugins: [
      esbuild({ target: 'es2018' }),
      pluginPure,
    ],
    external: [
      ...externals,
    ],
    output: [
      {
        file: `dist/index.mjs`,
        format: 'es',
      },
      {
        file: `dist/index.cjs`,
        format: 'cjs',
      },
    ],
  },
  {
    input: 'src/index.tsx',
    plugins: [
      pluginDts,
    ],
    external: [
      ...externals,
    ],
    output: [
      { file: `dist/index.d.cts` },
      { file: `dist/index.d.mts` },
      { file: `dist/index.d.ts` }, // for node10 compatibility
    ],
  },
]);
