# micell

[![Build Status](https://github.com/micell/micell/actions/workflows/ci.yml/badge.svg)](https://github.com/micell/micell/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/micell/micell/branch/main/graph/badge.svg)](https://codecov.io/gh/micell/micell)
[![npm](https://img.shields.io/npm/v/micell.svg)](https://www.npmjs.com/package/micell)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/micell)
![NPM](https://img.shields.io/npm/l/micell)

**English** | **简体中文**

Web 前端开发函数集，无运行时依赖。

* Base64 对字符串或二进制数据编码和解码
* 字符范围判断
* Cookie 操作
* 日期差计算与格式化
* DOM 计算和操作
* 缓动函数（Easings）
* 判断 JavaScript 值类型
* 文件路径操作
* 查询字符串解析和字符串化
* 常见正则表达式
* 字符串操作
* 用户代理（User Agent）探测
* Ajax、CSS、JSONP、随机字符串、UUID 等等

## 安装

```sh
npm install micell
# 或
pnpm add micell
# 或
yarn add micell
```

**CDN**

包只提供 ESM 格式，通过模块加载：

```html
<script type="module">
  import micell from 'https://cdn.jsdelivr.net/npm/micell@1/dist/micell.es.js'

  micell.randomString(6)
</script>
```

指定版本：

```html
<script type="module">
  import micell from 'https://cdn.jsdelivr.net/npm/micell@1.0.0/dist/micell.es.js'
</script>
```

micell 同样存在于 [unpkg](https://unpkg.com/) 上，例如
`https://unpkg.com/micell@1/dist/micell.es.js`。

## 使用

```js
import micell from 'micell'

// 生成一个随机字符串
micell.randomString(6)

// 获取 Cookie 值
micell.cookie.get('name')
```

更多函数请查看[文档](https://micell.org/docs)。

### 打包体积

包只提供 ESM 格式，声明了 `"sideEffects": false`，未引用时可被打包器完全剔除。
库本身没有运行时依赖，不会给你的依赖树增加任何东西。

只引入单个模块，而不是整个库：

```js
// 只会打包 date 模块及其依赖
import { format, parse } from 'micell/date'

// 或者取模块命名空间
import date from 'micell/date'
```

每个模块都有对应子路径：`micell/base64`、`micell/char`、`micell/cookie`、
`micell/date`、`micell/dom`、`micell/easing`、`micell/emitter`、`micell/lang`、
`micell/path`、`micell/qs`、`micell/regex`、`micell/string`、`micell/ua`、
`micell/url`。所有入口均为 ESM。

## 文档

查看[文档](https://micell.org/docs)。

## 兼容性

* Chrome >= 87
* Edge >= 88
* Firefox >= 78
* Safari >= 13

## 从 0.x 升级

见 [UPGRADING.md](UPGRADING.md)。1.0 移除了 IE 11 支持和内置 polyfill。

## 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 与[版本说明](https://github.com/micell/micell/releases)。

## 贡献

如果你有任何 bug，功能需求或者文档改善，你都可以[提](https://github.com/micell/micell/issues/new)一个 issue 或者[创建](https://github.com/micell/micell/pull/new/main)一个 pull request 到 [main](https://github.com/micell/micell/tree/main) 分支。

此外，你可以阅读 [CONTRIBUTING](.github/CONTRIBUTING.md) 指南。

## 许可证

MIT

版权所有 (c) 2019-至今, Alex Chao
