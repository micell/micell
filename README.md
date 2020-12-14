# micell

[![Build Status](https://travis-ci.com/micell/micell.svg?branch=master)](https://travis-ci.com/micell/micell)
[![codecov](https://codecov.io/gh/micell/micell/branch/master/graph/badge.svg)](https://codecov.io/gh/micell/micell)
[![npm](https://img.shields.io/npm/v/micell.svg)](https://www.npmjs.com/package/micell)
![David](https://img.shields.io/david/micell/micell)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/micell)
![NPM](https://img.shields.io/npm/l/micell)
[![Netlify Status](https://api.netlify.com/api/v1/badges/bff6938e-fda6-416f-84fd-bf33fc6a6072/deploy-status)](https://app.netlify.com/sites/pensive-leakey-00e229/deploys)

**English** | **[简体中文](README_zh-CN.md)**

A collection of functions for web development.

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

**Npm**

```sh
npm i -S micell
```

**Yarn**

```sh
yarn add micell
```

**CDN**

If you want use micell with `<script>` directly, you can use [jsDelivr](https://www.jsdelivr.com/package/npm/micell).

The latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/micell"></script>
```

The specific version:

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.1.0/dist/micell.js"></script>
```

The ES Modules version:

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.1.0/dist/micell.esm.browser.js"></script>
```

The micell also exists in [unpkg](https://unpkg.com/).

## Usage

```js
import micell from 'micell'

// Generate a random string
micell.randomString();

// Get a cookie value
micell.cookie.get('name')
```

More functions see the [Docs](/docs/).

### Reduce the bundle size

You can use the [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash) to bundle
the methods as you needed.

**.babelrc**

```json
{
  "plugins": [
    ["lodash", { "id": ["micell"] }]
  ]
}
```

## Docs

See [Docs](https://micell.org/docs).

## Compatibility

* Chrome
* Firefox
* Safari
* Edge
* IE >= 11
* iOS >= 10
* Android >= 5

## Changelog

See [Release notes](https://github.com/micell/micell/releases).

## Contributing

If you have a bug or feature request or document improvement about micell, you can [open](https://github.com/micell/micell/issues/new) an issue or [create](https://github.com/micell/micell/pull/new/dev) a pull request to [dev](https://github.com/micell/micell/tree/dev) branch.

Also, you can read the [CONTRIBUTING](CONTRIBUTING.md) guide.
## License

MIT

Copyright (c) 2019-preset, Alex Chao
