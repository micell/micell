# Global

## ajax

```js
ajax(url, [options])
```

发送一个 AJAX 请求。

**起始版本**

0.1.0

**参数**

* **`url (string)`**：请求 URL。
* **`[options] (Object)`**：配置对象。
  + **`[async = true] (boolean)`**：是否为异步请求。
  + **`[beforeSend] (Function)`**：发送请求之前的回调，如果返回`false`，则不会发送请求。
  + **`[data = null] (string|Object)`**：发送的数据。
  + **`[headers = null] (Object)`**：请求头部。
  + **`[method = "get"] (string)`**：请求方法。
  + **`[responseType = "json"] (string)`**：如何解析响应值。
  + **`[timeout = 0] (number)`**：请求超时设置。

**返回值**

* **`(Promise)`**
j
## classNames

```js
classNames(...args)
```

根据任意数量的参数生成一个元素的`className`值，和 [JedWatson/classnames](https://github.com/JedWatson/classnames) 相同。

**起始版本**

0.10.0

**参数**

* **`[args] (any[])`**：见下面示例。

**返回值**

* **`(string)`**

**示例**

```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// 接受各种类型参数
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// 假值（falsy）和非字符串/对象/数组值会被忽略
classNames(null, false, 'bar', undefined, 0, 1, true, { baz: null }, ''); // => 'bar'
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// 数组会根据上面规则展开
const arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

## css

```js
css(el, [prop])
```

获取一个元素所有或指定属性的值。

**起始版本**

0.1.0

**参数**

* **`el (Element|string)`**：一个元素对象或者 CSS 选择器。
* **`[prop] (string)`**：CSS 属性名。

**返回值**

* **`(string | Object)`**

**示例**

```js
const el = document.getElementById('el');

// 获取所有属性值
css(el);
// => CSSStyleDeclaration { ... }

// 传入一个 CSS 选择器
css('#el');
// => CSSStyleDeclaration { ... }

// 获取指定属性的值
css('#el', 'width');
// => '100px'
```

## delay

```js
delay([duration])
```

返回一个 Promise，持续`duration`时间之后 resolve。

**起始版本**

0.1.0

**参数**

* **`[duration = 0] (number)`**：持续时间。

**返回值**

* **`(Promise)`**

## download

```js
download(file, [fileName])
```

下载一个 URL 所定位的文件或[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)对象或[`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)对象。该函数来自于[eligrey/FileSaver.js](https://github.com/eligrey/FileSaver.js)。

**参数**

* **`file (string | Blob | File)`**：一个 URL 字符串或`Blob`对象或`File`对象。
* **`[fileName] (string)`**：优先使用该参数作为文件名，其次，如果`file`参数是`File`类型，则使用`file`的`name`属性，最后使用`'download'`字符串。

**示例**

```js
// 下载 url 字符串所定位的文件
download('https://micell.org/logo.svg', 'micell-logo.svg')

// 下载 Blob 对象
const blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' })
download(blob, 'hello-world.txt')
```

## jsonp

```js
jsonp(url, [options])
```

**起始版本**

0.1.0

**参数**

* **`url (string)`**：请求数据的 URL。
* **`[options] (Object)`**：配置对象。
  + **`[callback] (string)`**：数据请求成功或失败的回调函数。
  + **`[responseType = "json"] (string)`**：对返回的数据如何处理。
  + **`[timeout = 0] (number)`**：请求超时配置，默认`0`，表示设置请求超时。

**返回值**

* **`(Promise)`**

## md5

```js
md5(input)
```

**起始版本**

0.4.0

**参数**

* **`input (string | number[] | Uint8Array)`**

**返回值**

* **`(string)`**

**示例**

```js
md5('hello 你好')
// => '429f2c0b03ebc9911455cbec2a09bc6f'
```

## noop

该函数为一个空函数，不接受任何参数，不返回任何值。

**起始版本**

0.1.0

## numberFormat

```js
numberFormat(number, [digits], [dot], [sep])
```

格式化一个数值。

**起始版本**

0.1.0

**参数**

* **`number (number)`**：被格式化的数值。
* **`[digits = -1] (number)`**：保留的小数位数，如果为`-1`则表示保留所有小数位数，如果该值`> -1`，则保留的最后一位为四舍五入所得。
* **`[dot = "."] (string)`**：整数与小数部分的分隔符。
* **`[sep = ","] (string)`**：千分位分隔符。

**返回值**

* **`(string)`**

**示例**

```js
numberFormat(3.1415);
// => '3.1415'
numberFormat(3.1415, 3);
// => '3.142'
```

## raf

```js
raf(callback)
```

如果浏览器支持 [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)，则和其一样。否则，使用`setTimeout`来模拟。

**起始版本**

0.2.0

**参数**

* **`callback (Function)`**：在下一次重绘（repaint）之前调用的函数。一个由`performance.now()`返回的类似 [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) 的时间值将会作为第一个参数传入。

**返回值**

* **`(number)`**：用于取消下一次回调的定时器 ID。

**示例**

```js
raf(time => console.log(time))
// => 120.123

const timerId = raf(() => console.log('never happen'))
raf.cancel(timerId)
```

## randomNumbers

```js
randomNumbers(start, end, length)
```

返回一个随机整数数组，每个整数都大于或等于`start`，并且小于或等于`end`。数组当中每个元素互补相等。

**起始版本**

0.8.0

**参数**

* **`start (number)`**：最小整数。
* **`end (number)`**：最大整数。
* **`length (number)`**：整数的数量。

**返回值**

* **`(numbers[])`**

**示例**

```js
randomNumbers(1, 10, 5)
// => [9, 4, 1, 5, 7]
```

## randomString

```js
randomString([len], [chars])
```

生成一个随机字符串，可以指定字符串的长度和组成字符串的字符集。

**起始版本**

0.1.0

**参数**

* **`[len = 32] (number)`**：随机字符串长度。
* **`[chars] (string)`**：组成字符串的字符集，默认为英文大写字母、小写字母及十进制数字，即 A-Za-z0-9。

**返回值**

* **`(string)`**

**示例**

```js
randomString();

// 生成一个长度为 8 的随机字符串。
randomString(8);

// 生成一串随机数字。
randomString(undefined, '0123456789');
```

## uuid

```js
uuid()
```

生成一个基于随机数字的 UUID，算法见 [rfc4122](https://tools.ietf.org/html/rfc4122#section-4.4)。

**起始版本**

0.1.0

**返回值**

* **`(string)`**

**示例**

```js
uuid();
// => 'fedb3747-4208-475d-b473-e51b583cddaf'
```
