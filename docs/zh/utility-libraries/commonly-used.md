# 工具函数库

这里是一些常用的工具函数库。

> 优先使用内置 API：`structuredClone`、`Intl.*`、`crypto.randomUUID`、`Promise.withResolvers` 以及较新的 `Array`、`Object` 方法已经覆盖了许多零散需求。

## 通用

* [es-toolkit](https://github.com/toss/es-toolkit)：lodash 的现代替代品，支持 tree-shaking，TypeScript 优先。
* [remeda](https://github.com/remeda/remeda)：TypeScript 优先、data-first 的函数式工具函数。
* [Micell](https://github.com/micell/micell)：专注前端开发的工具函数库。
* [immer](https://github.com/immerjs/immer)：通过结构共享完成不可变更新。
* [immutable](https://github.com/immutable-js/immutable-js)：持久化不可变数据结构。

## 日期和时间

* [dayjs](https://github.com/iamkun/dayjs)：2kB 的不可变日期库，API 与 Moment.js 一致。
* [@internationalized/date](https://github.com/adobe/react-spectrum)：面向国际化界面的日期时间工具。
* [pretty-ms](https://github.com/sindresorhus/pretty-ms)：把毫秒格式化为可读字符串。
* [parse-ms](https://github.com/sindresorhus/parse-ms)：把可读的时长解析回毫秒。

## 数字

* [pretty-bytes](https://github.com/sindresorhus/pretty-bytes)：把字节数格式化为可读字符串。
* [filesize](https://github.com/avoidwork/filesize.js)：文件大小格式化，支持 IEC 与 SI。

## 字符串与编码

* [js-base64](https://github.com/dankogai/js-base64)：字符串与二进制数据的 Base64、Base64URL 编解码。

## URL 与查询参数

* [qs](https://github.com/ljharb/qs)：支持嵌套对象的查询字符串解析与序列化。
* [query-string](https://github.com/sindresorhus/query-string)：URL 查询字符串的解析与序列化。

## 数据校验

* [zod](https://github.com/colinhacks/zod)：TypeScript 优先的 schema 校验，并推导静态类型。

## 唯一 ID

* [nanoid](https://github.com/ai/nanoid)：体积小、URL 安全的 ID 生成器。
* [uuid](https://github.com/uuidjs/uuid)：UUID 生成，包含 v7。

## 颜色

* [colord](https://github.com/omgovich/colord)：体积小巧的颜色解析与操作库，可通过插件支持 lab/lch 和混色。
