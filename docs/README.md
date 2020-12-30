---
home: true
heroImage: /logo.svg
heroText: Micell
tagline: A collection of functions for web development
actionText: Documentation →
actionLink: /docs/
features:
- title: Great Various
  details: Many categories, such as character, string, date, dom, cookie, url and so on.
- title: TypeScript Support
  details: Including sufficient TypeScript type definitions
- title: Small Size
  details: Use the babel-plugin-lodash to reduce the bundle size.
footer: MIT Licensed | Copyright © 2019-present Alex Chao
---

## What is Micell?

Micell (pronounced /maɪˈsel/, like **my-cell**) is a collection of functions which is used with
web development daily. Micell only includes the common functions in the most projects. Also,
for integrity, it will include some uncommon functions.

## What is not Micell?

* It is not a replace to Lodash, Momentjs or Dayjs.
* It is not to include all utility functions in your application.

## Why Micell?

* **Shared in community**: You don't need to write the common utility functions repeatedly. Micell make reusing across all projects.
* **Typescript support**: Source code is written with TypeScript. And type declaration files is bundled in npm package.
* **High reliability**: Test in all modern browsers, even in IE 11. Up to 96% test coverage.
* **Import as need**: Use **babel-plugin-lodash** to import the used modules.

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
<script src="https://cdn.jsdelivr.net/npm/micell@0.11.0/dist/micell.js"></script>
```

The ES Modules version:

```html
<script src="https://cdn.jsdelivr.net/npm/micell@0.11.0/dist/micell.esm.browser.js"></script>
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
