import { defineConfig } from 'tsup'

const modules = [
  'base64',
  'char',
  'cookie',
  'date',
  'dom',
  'easing',
  'emitter',
  'lang',
  'path',
  'qs',
  'regex',
  'string',
  'ua',
  'url',
]

/**
 * ESM-only distribution:
 *   dist/micell.es.js            root entry (`import micell from 'micell'`)
 *   dist/<module>.es.js          per-module entries (`import { format } from 'micell/date'`)
 *   dist/micell.d.ts + chunks    declarations
 *
 * Every entry is a self-contained ES bundle; consumers must use a bundler or
 * native ESM (`<script type="module">`). No CommonJS or IIFE output.
 */
export default defineConfig({
  entry: {
    micell: 'src/index.ts',
    ...Object.fromEntries(modules.map((name) => [name, `src/entries/${name}.ts`])),
  },
  format: ['esm'],
  target: 'es2020',
  sourcemap: true,
  splitting: false,
  clean: true,
  dts: true,
  outExtension() {
    return { js: '.es.js' }
  },
})
