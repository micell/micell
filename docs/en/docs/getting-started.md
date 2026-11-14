# Getting Started

## Install

**Npm**

```sh
npm i --save micell
```

**Pnpm**

```sh
pnpm add micell
```

**Yarn**

```sh
yarn add micell
```

**CDN**

If you want to use micell with `<script>` directly, you can use [jsDelivr](https://www.jsdelivr.com/package/npm/micell).

The latest version:

```html
<script type="module">
  import * as micell from 'https://cdn.jsdelivr.net/npm/micell@1/dist/micell.es.js'

  micell.randomString(6)
</script>
```

The specific version:

```html
<script type="module">
  import * as micell from 'https://cdn.jsdelivr.net/npm/micell@1.0.0/dist/micell.es.js'
</script>
```

micell is also available on [unpkg](https://unpkg.com/).

## Usage

```js
import * as micell from 'micell'

// Generate a random string
micell.randomString();

// Get a cookie value
micell.cookie.get('name')
```

More functions see the [Docs](/docs/base64).

## Per-module imports

Besides the whole library, each module can be imported on its own (ESM):

```js
// Only the date module and its dependencies are bundled
import { format, parse } from 'micell/date'

// Or take the module namespace
import date from 'micell/date'
```

Available subpaths: `micell/base64`, `micell/char`, `micell/cookie`,
`micell/date`, `micell/dom`, `micell/easing`, `micell/emitter`, `micell/lang`,
`micell/path`, `micell/qs`, `micell/regex`, `micell/string`, `micell/ua` and
`micell/url`. All entries are ESM-only.

> **Tip**: You can try micell in the console of browser which is exported as the global `micell` object.

## Reduce the bundle size

The package is ESM-only and declares `"sideEffects": false`, so bundlers can
drop it entirely when it is not imported. It has no runtime dependencies, and
1.0 no longer injects polyfills.
