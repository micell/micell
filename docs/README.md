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
- title: Good Enough
  details: The functions are selected to focus on web development.
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

## Usage

```js
import micell from 'micell'

// Generate a random string
micell.randomString(6);

// Get a cookie value
micell.cookie.get('name')
```

More functions see the [Docs](/docs/).
