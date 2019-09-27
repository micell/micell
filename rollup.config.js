import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const outDir = path.join(__dirname, 'dist')
const getBabelOptions = ({ useESModules = false } = {}) => ({
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  plugins: [['@babel/plugin-transform-runtime', { useESModules }]]
})

const isExternal = id => !id.startsWith('.') && !id.startsWith('/')

export default [
  // CommonJs
  {
    input: 'src/index.js',
    output: {
      file: `${outDir}/${pkg.name}.common.js`,
      format: 'cjs'
    },
    external: isExternal,
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true }))
    ]
  },

  // ES
  {
    input: 'src/index.js',
    output: {
      file: `${outDir}/${pkg.name}.esm.js`,
      format: 'es'
    },
    external: isExternal,
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true }))
    ]
  },

  // ES browser
  {
    input: 'src/index.js',
    output: {
      file: `${outDir}/${pkg.name}.esm.browser.js`,
      format: 'es'
    },
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },

  // ES browser production
  {
    input: 'src/index.js',
    output: {
      file: `${outDir}/${pkg.name}.esm.browser.min.js`,
      format: 'es'
    },
    plugins: [
      nodeResolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  },

  // UMD
  {
    input: 'src/index.js',
    output: {
      file: `${outDir}/${pkg.name}.js`,
      format: 'umd',
      name: pkg.name
    },
    plugins: [
      nodeResolve(),
      babel(getBabelOptions()),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },

  // UMD production
  {
    input: 'src/index.js',
    output: {
      file: `${outDir}/${pkg.name}.min.js`,
      format: 'umd',
      name: pkg.name
    },
    plugins: [
      nodeResolve(),
      babel(getBabelOptions()),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
]
