# Getting Started

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

If you want to use micell with `<script>` directly, you can use [jsDelivr](https://www.jsdelivr.com/package/npm/micell).

The latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/micell"></script>
```

The specific version:

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.15.2/dist/micell.js"></script>
```

The ES Modules version:

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.15.2/dist/micell.esm.browser.js"></script>
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

More functions see the [Docs](/docs/base64).

> **Tip**: You can try micell in the console of browser which is exported as the global `micell` object.

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
