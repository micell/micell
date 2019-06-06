# API

- [API](#api)
  - [char](#char)
    - [isAlphabetic](#isalphabetic)
    - [isAlphanumeric](#isalphanumeric)
    - [isASCII](#isascii)
    - [isCJK](#iscjk)
    - [isControl](#iscontrol)
    - [isDigit](#isdigit)
    - [isGraph](#isgraph)
    - [isHexadecimal](#ishexadecimal)
    - [isLower](#islower)
    - [isPrint](#isprint)
    - [isPunctuation](#ispunctuation)
    - [isSpace](#isspace)
    - [isUpper](#isupper)
  - [date](#date)
    - [diff](#diff)
    - [format](#format)
    - [timeAgo](#timeago)
  - [lang](#lang)
    - [isArray](#isarray)
    - [isBoolean](#isboolean)
    - [isDate](#isdate)
    - [isError](#iserror)
    - [isFunction](#isfunction)
    - [isNil](#isnil)
    - [isNull](#isnull)
    - [isNumber](#isnumber)
    - [isObject](#isobject)
    - [isRegExp](#isregexp)
    - [isString](#isstring)
    - [isUndefined](#isundefined)
  - [regex](#regex)
    - [isAscii](#isascii)
    - [isDecimal](#isdecimal)
    - [isDigit](#isdigit-1)
    - [isDomain](#isdomain)
    - [isEmail](#isemail)
    - [isHexColor](#ishexcolor)
    - [isHsl](#ishsl)
    - [isHsla](#ishsla)
    - [isInteger](#isinteger)
    - [isIP](#isip)
    - [isIPv4](#isipv4)
    - [isIPv4](#isipv4-1)
    - [isQQ](#isqq)
    - [isRealNumber](#isrealnumber)
    - [isRgb](#isrgb)
    - [isRgba](#isrgba)
  - [string](#string)
    - [countLines](#countlines)
    - [escapeRegexp](#escaperegexp)
    - [firstChar](#firstchar)
    - [isValidJSON](#isvalidjson)
    - [lastChar](#lastchar)
    - [truncate](#truncate)
  - [ua](#ua)
    - [isWindows](#iswindows)
    - [isMacOS](#ismacos)
    - [isLinux](#islinux)
    - [isAndroid](#isandroid)
    - [isIOS](#isios)
    - [isMobile](#ismobile)
    - [isTablet](#istablet)
    - [isWechat](#iswechat)
    - [isIPhone](#isiphone)
    - [isIPad](#isipad)
  - [basename](#basename)
  - [dirname](#dirname)
  - [domReady](#domready)
  - [extname](#extname)
  - [getHashQuery](#gethashquery)
  - [getQuery](#getquery)
  - [insertScript](#insertscript)
  - [pageX](#pagex)
  - [pageY](#pagey)
  - [randomString](#randomstring)

## char

### isAlphabetic

```js
isAlphabetic(ch)
```

Detect a character whether it is one of a-z or A-Z.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

Detect a character whether it is one of a-z or A-Z or 0-9.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

Detect a character whether it is an ASCII character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

Detect a character whether it is a CJK (Chinese, Japanese and Korean) character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

Detect a character whether it is a decimal digit (0-9).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

Detect a character whether it is a [graphic character](https://en.wikipedia.org/wiki/Graphic_character).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

Detect a character whether it is a hexadecimal character (0-9, a-f, A-F).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

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

Detect a character whether it is a lower-case character (a-z).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

```js
isLower('a');
// => true
```

### isPrint

```js
isPrint(ch)
```

Detect a character whether it is a [printable character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

```js
isPrint('a');
// => true
```

### isPunctuation

```js
isPunctuation(ch)
```

Detect a character whether it is a punctuation character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

```js
isPunctuation(',');
// => true
```

### isSpace

```js
isSpace(ch)
```

Detect a character whether it is a space character.

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

```js
isSpace(' ');
// => true
```

### isUpper

```js
isUpper(ch)
```

Detect a character whether it is a upper-case character (A-Z).

**Arguments**

* **ch (String)**: A string with length equal to 1.

**Returns**

* **(Boolean)**

**Example**

```js
isUpper('a');
// => true
```

## date

### diff

```js
diff(date1, date2, unit, roundFunc)
```

Compute the difference of the specified period unit between two dates.

**Arguments**

* **date1 (Number|Date|String)**: A timestamp number, a Date object or a parsable date string.
* **date2 (Number|Date|String)**: A timestamp number, a Date object or a parsable date string.
* **unit (String)**: A string specifies the peroid unit, default is `"ms"`. See unit table.
* **roundFunc (Function)**: A round function, default is `Math.round`.

**Returns**

* **(Number)**

**Unit table**

| Unit value | Representation |
| ---------- | -------------- |
| Y | Years |
| M | Months |
| D | Days |
| h | hours |
| m | minutes |
| s | seconds |
| ms | milliseconds |

**Example

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
format(date, format, isUTC)
```

**Arguments**

* **date (Date|Number)**: A Date object or a timestamp number.
* **format (String)**: A string of tokens, which is subset of the [moment format tokens](http://momentjs.com/docs/#/displaying/format/). see below table.
* **isUTC (Boolean)**: Use the UTC time, default is `false`.

**Returns**

* **(String)**

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

**Example**

```js
const date = new Date(1970, 0, 1, 13, 1, 1);
format(date, 'YYYY-MM-DD HH:mm:ss');
// => "1970-01-01 13:01:01"
format(date, 'YYYY-M-D h:m:s');
// => "1970-1-1 1:1:1"
```

### timeAgo

```js
timeAgo.format(date, locale, nowDate)
```

**Arguments**

* **date (Number|Date|String)**: A timestamp, a Date object or a parsable date string.
* **locale (String)**: the locale, "en_US" (default) and "zh_CN" are builtins supported.
* **nowDate (Date)**: The base date.

**Returns**

* **(String)**

**Example**

```js
const d = new Date();
d.setMinutes(d.getMinutes() - 10);
timeAgo.format(d);
// => "10 minutes ago"

timeAgo.format(d, 'zh_CN');
// => "10 分钟前"
```

## lang

### isArray

```js
isArray(value)
```

Check if a value is an Array.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isArray([]);
// => true
```

### isBoolean

```js
isBoolean(value)
```

Check if a value is a Boolean.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isBoolean(true);
// => true
```

### isDate

```js
isDate(value)
```

Check if a value is a Date object.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isDate([]);
// => true
```

### isError

```js
isError(value)
```

Check if a value is an Error object.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isError(new Error('error message'));
// => true
```

### isFunction

```js
isFunction(value)
```

Check if a value is a function, including generator function and async function.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a value is `null` or `undefined`.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a value is `null`

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isNull(null);
// => true
```

### isNumber

```js
isNumber(value)
```

Check if a value is a Number.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isNumber(1);
// => true
```

### isObject

```js
isObject(value)
```

Check if a value is an Object.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a value is a RegExp object.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isRegExp(/\s+/);
// => true
```

### isString

```js
isString(value)
```

Check if a value is a String.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isString('hello world');
// => true
```

### isUndefined

```js
isUndefined(value)
```

Check if a value is `undefined`.

**Arguments**

* **value (any)**

**Returns**

* **(Boolean)**

**Example**

```js
isUndefined(void 0);
// => true
```
## regex

### isAscii

```js
isAscii(str)
```

Check if a string contains the ASCII characters only.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

```js
isAscii('hello world');
// => true
```

### isDecimal

```js
isDecimal(str)
```

Check if a string is a decimal number.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a string contains the digits (0-9) only.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

```js
isDigit('0123');
// => true
```

### isDomain

```js
isDomain(str)
```

Check if a string is an http(s) domain.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

```js
isDomain('https://example.com');
// => true
```

### isEmail

```js
isEmail(str)
```

Check if a string is an email address.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a string is an hex color value.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a string is an HSL value.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a string is an HSLA value.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Same as `isDigit`. Check if a string contains the digits only.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

```js
isInteger('0123');
// => true
```

### isIP

```js
isIP(str)
```

Check if a string is an IP (v4 or v6) address.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a string is an IP (v4) address.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

```js
isIPv4('192.0.0.1');
// => true
```

### isIPv4

```js
isIPv4(str)
```

Check if a string is an IP (v4) address.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

```js
isIPv6('2408:8100:2514:3f70:c98:15fe:9611:acdc');
// => true
```

### isQQ

```js
isQQ(str)
```

Check if a string is a QQ id.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

```js
isQQ('10000');
// => true
```

### isRealNumber

```js
isRealNumber(str)
```

Check if a string is a real number.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a string is a RGB value.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Check if a string is a RGBA value.

**Arguments**

* **str (string)**

**Returns**

* **(Boolean)**

**Example**

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

Count the number of lines separated by `"\n"`.

**Arguments**

* **str (String)**

**Returns**

* **(Number)**

**Example**

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

Escape the special characters in regular expression.

**Arguments**

* **str (String)**

**Returns**

* **(String)**

**Example**

```js
escapeRegexp('a-z');
// => "a\-z"
```

### firstChar

```js
firstChar(str)
```

Return the first character of a string.

**Arguments**

* **str (String)**

**Returns**

* **(String)**

**Example**

```js
firstChar('hello');
// => "h"
```

### isValidJSON

```js
isValidJSON(str)
```

Check if a string is a valid JSON string.

**Arguments**

* **str (String)**

**Returns**

* **(Boolean)**

**Example**

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

Return the last character of a string.

**Arguments**

* **str (String)**

**Returns**

* **(String)**

**Example**

```js
lastChar('hello');
// => "o"
```

### truncate

```js
truncate([str = ''], [options = {}])
```

Return a truncated string end with the specified omission.

**Arguments**

* **[str = ''] (String)**: The string to be truncated.
* **[options = {}] (Object)**: The options object.
  + **[length] (Number)**: The maxmium string length. It is the `str` length by default.
  + **[omission = '...'] (String)**: The omission string.
  + **[countType = 0] (Number)**: How to count the half width and full width characters.
    - `0`: Count 1 for each character.
    - `1`: Count 1 for half width and count 2 for full width.
    - `2`: Count 0.5 for half width and count 1 for full width.

**Returns**

* **(String)**

**Example**

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

Check if the os is Windows.

**Returns**

* **(Boolean)**

### isMacOS

```js
isMacOS()
```

Check if the os is macOS.

**Returns**

* **(Boolean)**

### isLinux

```js
isLinux()
```

Check if the os is Linux.

**Returns**

* **(Boolean)**

### isAndroid

```js
isAndroid()
```

Check if the os is Android.

**Returns**

* **(Boolean)**

### isIOS

```js
isIOS()
```

Check if the os is iOS.

**Returns**

* **(Boolean)**

### isMobile

```js
isMobile()
```

Check if the os is a mobile system.

**Returns**

* **(Boolean)**

### isTablet

```js
isTablet()
```

Check if the os is a tablet system.

**Returns**

* **(Boolean)**

### isWechat

```js
isWechat()
```

Check if the environment is Wechat.

**Returns**

* **(Boolean)**

### isIPhone

```js
isIPhone()
```

Check if the environment is iPhone.

**Returns**

* **(Boolean)**

### isIPad

```js
isIPad()
```

Check if the environment is iPad.

**Returns**

* **(Boolean)**

## basename

```js
basename(str)
```
Return the last part of the path string.

**Arguments**

* **str (String)**

**Returns**

* **(String)**

**Example**

```js
basename('/foo/bar');
// => "bar"
```

## dirname

```js
dirname(str)
```

**Arguments**

* **str (String)**

**Returns**

* **(String)**

**Example**

```js
dirname('/foo/bar');
// => "/foo"
```

## domReady

```js
domReady(callback)
```

Defer the execution of the `callback`, which will be executed in `DOMContentLoaded` event.
If the `DOMContentLoaded` has triggered, then the `callback` will be executed in next event loop.

**Arguments**

* **callback (Function)**

**Example**

```js
domReady(function () {
  // ...
});

// You can use it multiple times.
domReady(function () {
  // other callback
});
```

## extname

```js
extname(str)
```

Return the extension name of the path.

**Arguments**

* **str (String)**

**Returns**

* **(String)**

**Example**

```js
extname('/foo/bar.txt');
// => ".txt"
```

## getHashQuery

```js
getHashQuery(name)
```

**Arguments**

* **name (String)**

**Returns**

* **(String|Array<String>)**

**Example**

```js
// location.hash = '#?hello=world'
getHashQuery('hello');
// => "world"


// location.hash = '#?fruits=apple&fruits=orange'
getHashQuery('fruits');
// => ["apple", "orange"]
```

## getQuery

```js
getQuery(name)
```

**Arguments**

* **name (String)**

**Returns**

* **(String|Array<String>)**

**Example**

```js
// location.search = '?hello=world'
getQuery('hello');
// => "world"


// location.search = '?fruits=apple&fruits=orange'
getQuery('fruits');
// => ["apple", "orange"]
```

## insertScript

```js
insertScript(url, props)
```

Insert a `<script>` to document.

**Arguments**

* **url (String)**: The `script.src` string.
* **props (Object)**: The `<script>` element properties.

## pageX

```js
pageX(el)
```

Return the horizontal distance of an element to the left edge of the page.

**Arguments**

* **el (Element)**

**Returns**

* **(Number)**

## pageY

```js
pageY(el)
```

Return the vertical distance of an element to the left edge of the page.

**Arguments**

* **el (Element)**

**Returns**

* **(Number)**

## randomString

```js
randomString(len, chars)
```

Return a random string which consists of the characters specified by `chars`.

**Arguments**

* **len (Number)**: The length of random string, default is `32`.
* **chars (String)**: The character set, default is lower letters, upper letters and digits.

**Returns**

* **(String)**

**Example**

```js
randomString();

// Generate an 8 length string.
randomString(8);

// Generate a random digit string.
randomString(undefined, '0123456789');
```
