# micell

[![Build Status](https://github.com/micell/micell/actions/workflows/ci.yml/badge.svg)](https://github.com/micell/micell/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/micell/micell/branch/main/graph/badge.svg)](https://codecov.io/gh/micell/micell)
[![npm](https://img.shields.io/npm/v/micell.svg)](https://www.npmjs.com/package/micell)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/micell)
![NPM](https://img.shields.io/npm/l/micell)

**English** | **[简体中文](README_zh-CN.md)**

A collection of functions for web development, with no runtime dependencies.

* Base64 encoding and decoding a string or binary data
* Character range checking
* Cookie manipulation
* Date diff and format
* DOM computing and manipulation
* Easing functions
* Deciding the type of Javascript value
* File path operation
* Querystring parse and stringify
* Common regular expressions
* String manipulation
* UserAgent detection
* Ajax, css, jsonp, random string, uuid and more.

## Install

```sh
npm install micell
# or
pnpm add micell
# or
yarn add micell
```

**CDN**

The package is ESM-only; load it as a module:

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

micell is also available on [unpkg](https://unpkg.com/), e.g.
`https://unpkg.com/micell@1/dist/micell.es.js`.

## Usage

```js
import * as micell from 'micell'

// Generate a random string
micell.randomString(6)

// Get a cookie value
micell.cookie.get('name')
```

More functions see the [Docs](https://micell.org/docs).

### Bundle size

The package is ESM-only and declares `"sideEffects": false`, so bundlers can
drop it entirely when it is not imported. The library has no runtime
dependencies, so it adds nothing to your dependency tree.

Import a single module instead of the whole library:

```js
// Only the date module and its dependencies are bundled
import { format, parse } from 'micell/date'

// Or take the module namespace
import date from 'micell/date'
```

Every module under `src/` has a matching subpath: `micell/base64`, `micell/char`,
`micell/cookie`, `micell/date`, `micell/dom`, `micell/easing`, `micell/emitter`,
`micell/lang`, `micell/path`, `micell/qs`, `micell/regex`, `micell/string`,
`micell/ua` and `micell/url`. All entries are ESM-only.

## Docs

See [Docs](https://micell.org/docs).

## Compatibility

* Chrome >= 87
* Edge >= 88
* Firefox >= 78
* Safari >= 13

## Upgrading from 0.x

See [UPGRADING.md](UPGRADING.md). 1.0 drops IE 11 and the built-in polyfills.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) and [Release notes](https://github.com/micell/micell/releases).

## Contributing

If you have a bug or feature request or document improvement about micell, you can [open](https://github.com/micell/micell/issues/new) an issue or [create](https://github.com/micell/micell/pull/new/main) a pull request to [main](https://github.com/micell/micell/tree/main) branch.

Also, you can read the [CONTRIBUTING](.github/CONTRIBUTING.md) guide.

## License

MIT

Copyright (c) 2019-present, Alex Chao
