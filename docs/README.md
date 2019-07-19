---
home: true
heroImage: /logo.svg
heroText: Micell
tagline: A collection of functions for web development
actionText: Documentation →
actionLink: /docs/
features:
- title: Great Various
  details: Many categories, such as character, string, date, dom, cookie and so on.
- title: TypeScript Support
  details: Including sufficient TypeScript type definitions
- title: Small Size
  details: Use the babel-plugin-lodash to reduce the bundle size.
footer: MIT Licensed | Copyright © 2019-present Alex Chao
---

## Install

**Npm**

```sh
npm i --save micell
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

## Reduce the bundle size

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
