import path from 'node:path'
import { fileURLToPath } from 'node:url';
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'

import pkg from './package.json' assert { type: 'json' }

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, 'dist')
const getBabelOptions = ({ useESModules = false, corejs = false } = {}) => ({
  exclude: 'node_modules/**',
  babelHelpers: 'runtime',
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules,
        corejs,
      },
    ],
  ],
})

export default [
  // CommonJs
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.name}.common.js`,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [typescript(), nodeResolve(), babel(getBabelOptions())],
  },

  // ES
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.name}.esm.js`,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
    ],
  },

  // ES browser
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.name}.esm.browser.js`,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },

  // ES browser production
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.name}.esm.browser.min.js`,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
  },

  // UMD
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.name}.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
    },
    plugins: [
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ corejs: 3 })),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },

  // UMD production
  {
    input: 'src/index.ts',
    output: {
      file: `${outDir}/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
    },
    plugins: [
      typescript(),
      nodeResolve(),
      babel(getBabelOptions({ corejs: 3 })),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
  },
]
