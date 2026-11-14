import { defineConfig } from 'tsdown'

const subpathEntries = [
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
 *   dist/micell.es.js            root entry (`import * as micell from 'micell'`)
 *   dist/<module>.es.js          per-module entries (`import { format } from 'micell/date'`)
 *   dist/micell.d.ts, dist/<module>.d.ts
 *
 * Rolldown hoists code shared between entries into `[name]-[hash].es.js`
 * chunks, and declaration bundling emits hash-suffixed `.d.ts` chunks for the
 * shared types. Entry filenames stay hash-free so the `exports` map and the
 * paths listed above keep resolving; a single entry loaded from a CDN pulls
 * its chunks with it. Consumers must use a bundler or native ESM
 * (`<script type="module">`). No CommonJS or IIFE output.
 */
export default defineConfig({
  entry: {
    micell: 'src/index.ts',
    ...Object.fromEntries(subpathEntries.map((name) => [name, `src/entries/${name}.ts`])),
  },
  format: ['esm'],
  target: 'es2020',
  sourcemap: true,
  clean: true,
  dts: true,
  outExtensions: () => ({ js: '.es.js', dts: '.d.ts' }),
})
