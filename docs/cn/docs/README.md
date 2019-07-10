---
sidebar: auto
---
# 文档

## char

### isAlphabetic

```js
isAlphabetic(ch)
```

判断一个字符是否是 a-z 或 A-Z。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isAlphabetic('a');
// => true

isAlphabetic('1');
// => false
```

### isAlphanumeric

```js
isAlphanumeric(ch)
```

判断一个字符是否是 a-z 或 A-Z 或 0-9。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isAlphanumeric('a');
// => true

isAlphanumeric('1');
// => true

isAlphanumeric('*');
// => false
```

### isASCII

```js
isASCII(ch)
```

判断一个字符是否是一个 ASCII 字符。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isASCII('a');
// => true

isASCII('1');
// => true

isASCII('你');
// => false
```

### isCJK

```js
isCJK(ch)
```

判断一个字符是否是一个 CJK（中文、日文、韩文）字符。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isCJK('你');
// => true

isCJK('の');
// => true
```

### isControl

```js
isControl(ch)
```

Detect a character whether it is a [control character](https://en.wikipedia.org/wiki/Control_character).
判断一个字符是否是一个[控制字符](https://en.wikipedia.org/wiki/Control_character)。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isControl('\t');
// => true

isControl('\r');
// => true
```

### isDigit

```js
isDigit(ch)
```

判断一个字符是否是一个十进制数字（0-9）。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isDigit('0');
// => true

isDigit('1');
// => true
```

### isGraph

```js
isGraph(ch)
```

判断一个字符是否是一个[图形字符](https://en.wikipedia.org/wiki/Graphic_character)。
**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isGraph('0');
// => true

isGraph('a');
// => true
```

### isHexadecimal

```js
isHexadecimal(ch)
```

判断一个字符是否是一个十六进制字符（0-9、a-f、A-F）。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isHexadecimal('0');
// => true

isHexadecimal('a');
// => true

isHexadecimal('A');
// => true
```

### isLower

```js
isLower(ch)
```

判断一个字符是否是小写字符（a-z）。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isLower('a');
// => true
```

### isPrint

```js
isPrint(ch)
```

判断一个字符是否是[可打印字符](https://en.wikipedia.org/wiki/ASCII#Printable_characters)。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isPrint('a');
// => true
```

### isPunctuation

```js
isPunctuation(ch)
```

Detect a character whether it is a punctuation character.
判断一个字符是否是标点字符。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isPunctuation(',');
// => true
```

### isSpace

```js
isSpace(ch)
```

判断一个字符是否是一个空格字符。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isSpace(' ');
// => true
```

### isUpper

```js
isUpper(ch)
```

判断一个字符是否是大写字符（A-Z）。

**参数**

* **`ch (String)`**：长度为 1 的字符串。

**返回值**

* **`(Boolean)`**

**示例**

```js
isUpper('a');
// => true
```

## cookie

### get

```js
get(key)
```

获取指定名称的 Cookie 值，使用`decodeURIComponent`解码。

**参数**

* **`key (String)`**：Cookie 名称。

**返回值**

* **`(String)`**

### getAll

```js
getAll()
```

获取所有的 Cookie 值，使用`decodeURIComponent`解码。

**返回值**

* **`(Object)`**

### getJson

```
getJson(key)
```

获取指定名称的 Cookie 值，使用`JSON.parse`解码。

**参数**

* **`key (String)`**：Cookie 名称。

**返回值**

* **`(Any)`**

### getRaw

```
getRaw(key)
```

获取指定名称的 Cookie 值，不应用任何解码。

**参数**

* **`key (String)`**：Cookie 名称。

**返回值**

* **`(String)`**

### isEnabled

```js
isEnabled()
```

检测 Cookie 功能是否启用。

**返回值**

* **`(Boolean)`**

### remove

```js
remove(key, [options])
```

移除当前域名下指定名称的 Cookie。

**参数**

* **`key (String)`**：Cookie 名称。
* **`[options] (Object)`**：Cookie 配置参数。
  + **`[domain] (String)`**
  + **`[path = "/"] (String)`**

### set

```js
set(key, value, [options])
```

设置一个 Cookie，`value`参数将会使用`encodeURIComponent`进行编码。

**参数**

* **`key (String)`**：Cookie 名称
* **`value (String)`**：Cookie 值。
* **`[options] (Object)`**：Cookie 配置。
  + **`[domain] (String)`**：Cookie 所属域名。
  + **`[path = "/"] (String)`**：Cookie 所属路径。
  + **`[expires] (Number | String | Date)`**：可以是一个`Date`对象，一个可被`Date.parse()`解析的日期字符串，一个整数（单位：天），或者一个带时间后缀的数值字符串。
  + **`[max-age] (Number)`**：Cookie 持续时间。
  + **`[samesite] (Boolean)`**
  + **`[secure] (Boolean)`**

| 单位后缀     | 含义            |
| ----------- | -------------- |
| Y           | 年             |
| M           | 月             |
| D           | 天             |
| h           | 日             |
| m           | 分             |
| s           | 秒             |

### setJson

```js
set(key, value, [options])
```

同`set`，设置一个 Cookie，只是`value`参数将会使用`JSON.stringify`进行编码。

**参数**

* **`key (String)`**：Cookie 名称
* **`value (String)`**：Cookie 值。
* **`[options] (Object)`**：Cookie 配置。
  + **`[domain] (String)`**：Cookie 所属域名。
  + **`[path = "/"] (String)`**：Cookie 所属路径。
  + **`[expires] (Number | String | Date)`**：可以是一个`Date`对象，一个可被`Date.parse()`解析的日期字符串，一个整数（单位：天），或者一个带时间后缀的数值字符串。
  + **`[max-age] (Number)`**：Cookie 持续时间。
  + **`[samesite] (Boolean)`**
  + **`[secure] (Boolean)`**


### setRaw

```js
set(key, value, [options])
```

同`set`，设置一个 Cookie，只是`value`参数不使用任何编码。

**参数**

* **`key (String)`**：Cookie 名称
* **`value (String)`**：Cookie 值。
* **`[options] (Object)`**：Cookie 配置。
  + **`[domain] (String)`**：Cookie 所属域名。
  + **`[path = "/"] (String)`**：Cookie 所属路径。
  + **`[expires] (Number | String | Date)`**：可以是一个`Date`对象，一个可被`Date.parse()`解析的日期字符串，一个整数（单位：天），或者一个带时间后缀的数值字符串。
  + **`[max-age] (Number)`**：Cookie 持续时间。
  + **`[samesite] (Boolean)`**
  + **`[secure] (Boolean)`**

## date

### diff

```js
diff(date1, date2, [unit], [roundFunc])
```

计算两个日期之间的差，可以指定单位及四舍五入函数。

**参数**

* **`date1 (Number|Date|String)`**：一个时间戳（单位：毫秒），或一个`Date`对象，或一个可被解析的日期字符串。
* **`date2 (Number|Date|String)`**：一个时间戳（单位：毫秒），或一个`Date`对象，或一个可被解析的日期字符串。
* **`[unit = "ms"] (String)`**：一个表示时间单位的字符串，`d`（表示天），详细见下面表格。
* **`[roundFunc = Math.round] (Function)`**：一个四舍五入函数。

**返回值**

* **`(Number)`**

**时间单位**

| 单位值 | 表示含义 |
| ---------- | -------------- |
| Y | 年 |
| M | 月 |
| D | 日 |
| h | 小时 |
| m | 分钟 |
| s | 秒 |
| ms | 毫秒 |

**示例**

```js
const date1 = new Date(2019, 1, 10, 0, 0, 0);
const date2 = '2019-01-01 00:00:00';
diff(date1, date2);
// => 3456000000
diff(date1, date2, 'D')
// => 40
```

### format

```js
format(date, format, [isUTC])
```

根据指定的格式对一个日期格式化。

**参数**

* **`date (Date|Number)`**：一个`Date`对象或一个时间戳（单位：毫秒）。
* **`format (String)`**：一个占位符替换字符串，为 [moment format tokens](http://momentjs.com/docs/#/displaying/format/) 的一部分，具体查看下面表格。
* **`[isUTC = false] (Boolean)`**：是否使用协调世界时（UTC）。

**返回值**

* **`(String)`**

**Format tokens**

| Token | Output |
| ----- | ------ |
| YY | 70 71 ... 18 19 |
| YYYY | 1970 1971 ... 2018 2019 |
| M | 1 2 ... 11 12 |
| MM | 01 02 ... 11 12 |
| D | 1 2 ... 30 31 |
| DD | 01 02 ... 30 31 |
| H | 0 1 ... 22 23 |
| HH | 00 01 ... 22 23 |
| h | 1 2 ... 11 12 |
| hh | 01 02 ... 11 12 |
| m | 1 2 ... 58 59 |
| mm | 01 02 ... 58 59 |
| s | 1 2 ... 58 59 |
| ss | 01 02 ... 58 59 |

**示例**

```js
const date = new Date(1970, 0, 1, 13, 1, 1);
format(date, 'YYYY-MM-DD HH:mm:ss');
// => "1970-01-01 13:01:01"
format(date, 'YYYY-M-D h:m:s');
// => "1970-1-1 1:1:1"
```

### timeAgo

```js
timeAgo.format(date, [locale], [nowDate])
```

将一个日期格式化为“5 分钟之前”之类的字符串。

**参数**

* **`date (Number|Date|String)`**：一个时间戳（单位：毫秒），或一个`Date`对象，或一个可被解析的日期字符串。
* **`[locale = "en_US"] (String)`**：时区，内置支持`"en_US"`和`"zh_CN"`。
* **`[nowDate = new Date() (Date)`**：比对日期。

**返回值**

* **`(String)`**

**示例**

```js
const d = new Date();
d.setMinutes(d.getMinutes() - 10);
timeAgo.format(d);
// => "10 minutes ago"

timeAgo.format(d, 'zh_CN');
// => "10 分钟前"
```

## dom

### clientX

```js
clientX(elem)
```

获取一个元素左边界距离视口（浏览器窗口可视区域）左边界距离。

**参数**

* **`elem (Element)`**

**返回值**

* **`(Number)`**

**示例**

```js
const el = document.getElementById('el');
const x = clientX(el);
// x => 100
```

### clientY

```js
clientY(elem)
```

获取一个元素顶部距离视口（浏览器窗口可视区域）顶部距离。

**参数**

* **`elem (Element)`**

**返回值**

* **`(Number)`**

**示例**

```js
const el = document.getElementById('el');
const y = clientY(el);
// y => 100
```

### createEvent

```js
createEvent(type, [options])
```

创建一个自定义事件对象。

**参数**

* **`type (String)`**：事件名称。
* **`[options] (String)`**：事件配置对象。
  + **`[bubbles = false] (Boolean)`**：事件是否冒泡。
  + **`[cancelable = false] (Boolean)`**：事件是否可被取消。
  + **`[detail = null] (Object)`**：附加的数据。

**返回值**

* **`(Event)`**

**示例**

```js
const btn = document.getElementById('btn');
const event = createEvent('click');

btn.dispatchEvent(event);
```

### domReady

```js
domReady(callback)
```

延迟执行一个回调函数，直到`DOMContentLoaded`事件触发或者 DOM 可访问时执行。如果`domReady`执行时，`DOMContentLoaded`
事件已经触发或者 DOM 已经可访问，则`callback`会在下一个事件循环（event loop）被执行。

**参数**

* **`callback (Function)`**：被执行的回调函数。

**示例**

```js
domReady(function () {
  // ...
});

// 可以使用多次。
domReady(function () {
  // 其他回调
});
```


### insertScript

```js
insertScript(url, [props])
```

插入一个`<script>`标签到文档中。

**参数**

* **`url (String)`**：`<script>`标签的`src`属性。
* **`[props] (Object)`**：其他`<script>`标签支持的属性。

### isElement

```js
isElement(obj)
```

判断一个值是否为元素对象。

**参数**

* **`obj (Any)`**：任意值。

**返回值**

* **`(Boolean)`**

### isInViewport

```js
isInViewport(el)
```

判断一个元素是否位于视口（浏览器可视区域）内。

**参数**

* **`el (Element)`**：一个元素。

**返回值**

* **`(Boolean)`**

### isWindow

```js
isWindow(obj)
```

判断一个值是否是`window`对象。

**参数**

* **`obj (Any)`**：任意值。

**返回值**

* **`(Boolean)`**

### pageX

```js
pageX(el)
```

返回一个元素距离页面左边界的水平距离。

**参数**

* **`el (Element)`**

**返回值**

* **`(Number)`**

**示例**

```js
const el = document.getElementById('el')
pageX(el)
```

### pageY

```js
pageY(el)
```

返回一个元素距离页面顶部的竖直距离。

**参数**

* **`el (Element)`**

**返回值**

* **`(Number)`**

**示例**

```js
const el = document.getElementById('el')
pageY(el)
```

### scrollX

```js
scrollX([elOrWindow])
```

返回一个元素或页面的水平滚动距离。

**参数**

* **`[elOrWindow = window] (Element | Window)`**：一个元素或`window`对象。

**返回值**

* **`(Number)`**

**示例**

```js
// 如果不传任何参数，则返回页面的水平滚动距离。
scrollX();

const el = document.getElementById('el')
scrollX(el);
```

### scrolY

```js
scrollY([elOrWindow])
```

返回一个元素或页面的竖直滚动距离。

**参数**

* **`[elOrWindow = window] (Element | Window)`**：一个元素或`window`对象。

**返回值**

* **`(Number)`**

**示例**

```js
// 如果不传任何参数，则返回页面的竖直滚动距离。
scrollY();

const el = document.getElementById('el')
scrollY(el);
```

### viewport

```js
viewport([elOrWindow])
```

获取一个元素或`window`的视口宽度和高度。

**参数**

* **`[elOrWindow = window] (Element | Window)`**：一个元素或`window`对象。

**返回值**

* **`(Object)`**

**示例**

```js
viewport();
// => { width: 1920, height: 900 }
```

## lang

### isArray

```js
isArray(value)
```

判断一个值是否是数组类型。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isArray([]);
// => true
```

### isBoolean

```js
isBoolean(value)
```

判断一个值是否是布尔类型。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isBoolean(true);
// => true
```

### isDate

```js
isDate(value)
```

判断一个值是否是 Date 对象。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isDate([]);
// => true
```

### isError

```js
isError(value)
```

判断一个值是否是 Error 类型。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isError(new Error('error message'));
// => true
```

### isFunction

```js
isFunction(value)
```

判断一个值是否是一个函数，包括生成器函数和异步函数。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isFunction(function () {});
// => true

isFunction(function* () {});
// => true
```

### isNil

```js
isNil(value)
```

判断一个值是否是`null`或`undefined`。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isNil(null);
// => true
isNil(undefined);
// => true
```

### isNull

```js
isNull(value)
```

判断一个值是否是`null`。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isNull(null);
// => true
```

### isNumber

```js
isNumber(value)
```

判断一个值是否是数值类型。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isNumber(1);
// => true
```

### isObject

```js
isObject(value)
```

判断一个值是否是一个对象类型。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isObject({});
// => true
isObject(null);
// => false
```

### isRegExp

```js
isRegExp(value)
```

判断一个值是否是 RegExp 对象。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isRegExp(/\s+/);
// => true
```

### isString

```js
isString(value)
```

判断一个值是否是字符串类型。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isString('hello world');
// => true
```

### isUndefined

```js
isUndefined(value)
```

判断一个值是否是`undefined`。

**参数**

* **`value (any)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isUndefined(void 0);
// => true
```

## path

### basename

```js
basename(str)
```
返回一个路径字符串的最后一部分。

**参数**

* **`str (String)`**

**返回值**

* **`(String)`**

**示例**

```js
basename('/foo/bar');
// => "bar"
```

### dirname

```js
dirname(str)
```

返回一个路口字符串的目录部分。

**参数**

* **`str (String)`**

**返回值**

* **`(String)`**

**示例**

```js
dirname('/foo/bar');
// => "/foo"
```

### extname

```js
extname(str)
```

返回一个路径字符串的扩展名部分。

**参数**

* **`str (String)`**

**返回值**

* **`(String)`**

**示例**

```js
extname('/foo/bar.txt');
// => ".txt"
```

## qs

### get

```js
get(name)
```

获取查询字符串当中指定名称的值。

**参数**

* **`name (String)`**

**返回值**

* **`(String|Array\<String\>)`**

**示例**

```js
// location.search = '?hello=world'
getQuery('hello');
// => "world"


// location.search = '?fruits=apple&fruits=orange'
getQuery('fruits');
// => ["apple", "orange"]
```

### parse

```js
parse(search)
```

解析一个查询字符串。

**参数**

* **`search (String)`**

**返回值**

* **`(Object)`**

### stringify

```js
stringify(query)
```

将对象序列化为查询字符串。

**参数**

* **`query (Object)`**

**返回值**

* **`(String)`**

## regex

### isAscii

```js
isAscii(str)
```

判断一个字符串是否只包含 ASCII 字符。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isAscii('hello world');
// => true
```

### isDecimal

```js
isDecimal(str)
```

判断一个字符串是否是一个小数记数法表示的数值。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isDecimal('1');
// => true
isDecimal('3.14');
// => true
```

### isDigit

```js
isDigit(str)
```

判断一个字符串是否只包含十进制数字（0-9）。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isDigit('0123');
// => true
```

### isDomain

```js
isDomain(str)
```

判断一个字符串是否是一个 http(s) 域名。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isDomain('https://example.com');
// => true
```

### isEmail

```js
isEmail(str)
```

判断一个字符串是否一个邮件地址。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isEmail('alexchao1990@gmail.com');
// => true

isEmail('alexchao1990+github@gmail.com');
// => true
```

### isHexColor

```js
isHexColor(str)
```

判断一个字符串是否是一个十六进制数字格式的颜色值。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isHexColor('#f50');
// => true

isHexColor('#ff5500');
// => true

isHexColor('#FF5500');
// => true
```

### isHsl

```js
isHsl(str)
```

判断一个字符串是否是一个 HSL 颜色值。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isHsl('hsl(100, 50, 50)');
// => true

isHsl('HSL(100, 50, 50)');
// => true
```

### isHsla

```js
isHsla(str)
```

判断一个字符串是否是一个 HSLA 颜色值。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isHsla('hsla(100, 50, 50, 0.5)');
// => true

isHsla('HSLA(100, 50, 50, 0.5)');
// => true
```

### isInteger

```js
isInteger(str)
```

与`isDigit`相同，判断一个字符串是否只包含十进制数字。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isInteger('0123');
// => true
```

### isIP

```js
isIP(str)
```

判断一个字符串是否一个 IP（v4 或 v6）地址。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isIP('192.0.0.1');
// => true

isIP('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

### isIPv4

```js
isIPv4(str)
```

判断一个字符串是否是一个 IP v4 地址。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isIPv4('192.0.0.1');
// => true
```

### isIPv6

```js
isIPv6(str)
```

判断一个字符串是否是一个 IP v6 地址。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isIPv6('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

### isQQ

```js
isQQ(str)
```

判断一个字符串是否是一个 QQ 号。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isQQ('10000');
// => true
```

### isRealNumber

```js
isRealNumber(str)
```

判断一个字符串是否是一个实数。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isRealNumber('0.12');
// => true

isRealNumber('1.2e10');
// => true

isRealNumber('1.2e-10');
// => true
```

### isRgb

```js
isRgb(str)
```

判断一个字符串是否是一个 RGB 颜色值。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isRgb('rgb(255, 255, 255)');
// => true

isRgb('RGB(255, 255, 255)');
// => true
```

### isRgba

```js
isRgba(str)
```

判断一个字符串是否是个 RGBA 颜色值。

**参数**

* **`str (string)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isRgb('rgba(255, 255, 255, 0.5)');
// => true

isRgb('RGBA(255, 255, 255, 0.5)');
// => true
```

## string

### countLines

```js
countLines(str)
```

计算字符串的行数（以`\n`为分隔符）。

**参数**

* **`str (String)`**

**返回值**

* **`(Number)`**

**示例**

```js
const str = `hello
world
1`;
countLines(str);
// => 3
```

### escapeRegexp

```js
escapeRegexp(str)
```

对正则表达式当中的特殊字符进行转义。

**参数**

* **`str (String)`**

**返回值**

* **`(String)`**

**示例**

```js
escapeRegexp('a-z');
// => "a\-z"
```

### firstChar

```js
firstChar(str)
```

返回一个字符串的首个字符。

**参数**

* **`str (String)`**

**返回值**

* **`(String)`**

**示例**

```js
firstChar('hello');
// => "h"
```

### isValidJSON

```js
isValidJSON(str)
```

判断一个字符串是否是一个合法的 JSON 字符串。

**参数**

* **`str (String)`**

**返回值**

* **`(Boolean)`**

**示例**

```js
isValidJSON('{"name": "Alex Chao"}');
// => true

isValidJSON('""');
// => true
```

### lastChar

```js
lastChar(str)
```

返回一个字符串的最后一个字符。

**参数**

* **`str (String)`**

**返回值**

* **`(String)`**

**示例**

```js
lastChar('hello');
// => "o"
```

### truncate

```js
truncate([str = ''], [options = {}])
```

返回一个裁剪之后的字符串，并可指定结尾字符串。

**参数**

* **`[str = ""] (String)`**：被裁剪的字符串。
* **`[options = {}] (Object)`**：配置对象
  + **`[length] (Number)`**：允许的最大字符串长度，默认为`str`长度。
  + **`[omission = "..."] (String)`**：结尾字符串。
  + **`[countType = 0] (Number)`**：如何对半宽与全宽字符计数。
    - `0`：每个字符长度都算做 1。
    - `1`：半宽长度算作 1，全宽字符长度算作 2。
    - `2`：两个半宽字符长度算作 1，不足按 1 算，全宽字符长度算作 1。

**返回值**

* **`(String)`**

**示例**

```js
const str = 'hello, 你好，world!世界！';
truncate(str);
truncate(str, { length: 10 });
truncate(str, { omission: '***' });
truncate(str, { length: 10, countType: 1 });
```

## ua

### isWindows

```js
isWindows()
```

判断运行环境是否是 Windows。

**返回值**

* **`(Boolean)`**

### isMacOS

```js
isMacOS()
```

判断运行环境是否是 macOS。

**返回值**

* **`(Boolean)`**

### isLinux

```js
isLinux()
```

判断运行环境是否是 Linux。

**返回值**

* **`(Boolean)`**

### isAndroid

```js
isAndroid()
```

判断运行环境是否是安卓。

**返回值**

* **`(Boolean)`**

### isIOS

```js
isIOS()
```

判断运行环境是否是 iOS。

**返回值**

* **`(Boolean)`**

### isMobile

```js
isMobile()
```

判断运行环境是否是移动端。

**返回值**

* **`(Boolean)`**

### isTablet

```js
isTablet()
```

判断运行环境是否是平板。

**返回值**

* **`(Boolean)`**

### isWechat

```js
isWechat()
```

判断运行环境是否是微信。

**返回值**

* **`(Boolean)`**

### isIPhone

```js
isIPhone()
```

判断运行环境是否是 iPhone。

**返回值**

* **`(Boolean)`**

### isIPad

```js
isIPad()
```

判断运行环境是否是 iPad。

**返回值**

* **`(Boolean)`**

## ajax

```js
ajax(url, [options])
```

发送一个 AJAX 请求。

**参数**

* **`url (String)`**：请求 URL。
* **`[options] (Object)`**：配置对象。
  + **`[async = true] (Boolean)`**：是否为异步请求。
  + **`[beforeSend] (Function)`**：发送请求之前的回调，如果返回`false`，则不会发送请求。
  + **`[data = null] (String | Object)`**：发送的数据。
  + **`[headers = null] (Object)`**：请求头部。
  + **`[method = "get"] (String)`**：请求方法。
  + **`[responseType = "json"] (String)`**：如何解析响应值。
  + **`[timeout = 0] (Number)`**：请求超时设置。

**返回值**

* **`(Promise)`**

## css

```js
css(el, [prop])
```

获取一个元素所有或指定属性的值。

**参数**

* **`el (Element | String)`**：一个元素对象或者 CSS 选择器。
* **`[prop] (String)`**：CSS 属性名。

**返回值**

* **`(String | Object)`**

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

**参数**

* **`[duration = 0] (Number)`**：持续时间。

**返回值**

* **`(Promise)`**

## jsonp

```js
jsonp(url, [options])
```

**参数**

* **`url (String)`**：请求数据的 URL。
* **`[options] (Object)`**：配置对象。
  + **`[callback] (String)`**：数据请求成功或失败的回调函数。
  + **`[responseType = "json"] (String)`**：对返回的数据如何处理。
  + **`[timeout = 0] (Number)`**：请求超时配置，默认`0`，表示设置请求超时。

**返回值**

* **`(Promise)`**

## noop

该函数为一个空函数，不接受任何参数，不返回任何值。

## numberFormat

```js
numberFormat(number, [digits], [dot], [sep])
```

格式化一个数值。

**参数**

* **`number (Number)`**：被格式化的数值。
* **`[digits = -1] (Number)`**：保留的小数位数，如果为`-1`则表示保留所有小数位数，如果该值`> -1`，则保留的最后一位为四舍五入所得。
* **`[dot = "."] (String)`**：整数与小数部分的分隔符。
* **`[sep = ","] (String)`**：千分位分隔符。

**返回值**

* **`(String)`**

**示例**

```js
numberFormat(3.1415);
// => '3.1415'
numberFormat(3.1415, 3);
// => '3.142'
```

## randomString

```js
randomString([len], [chars])
```

生成一个随机字符串，可以指定字符串的长度和组成字符串的字符集。

**参数**

* **`[len = 32] (Number)`**：随机字符串长度。
* **`[chars] (String)`**：组成字符串的字符集，默认为英文大写字母、小写字母及十进制数字，即 A-Za-z0-9。

**返回值**

* **`(String)`**

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

**返回值**

* **`(String)`**

**示例**

```js
uuid();
// => 'fedb3747-4208-475d-b473-e51b583cddaf'
```
