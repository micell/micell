---
sidebar: auto
---
# Docs

## base64

### decode

```js
decode(input, [options])
```

Decoding a base64-encoded string to a utf8 string, hex string or byte array.

**Arguments**

* **`input (string)`**
* **`[options = {} (Object)]`**
  + `[encoding = 'utf8' (string)]`: The encoding of output, it can be `'utf8'` or `'hex'` or `'binary'`.

**Return**

* **`(string | Array)`**

**Example**

```js
const input = 'aGVsbG8g5L2g5aW9'

// Output a utf8 string
decode(input)
// => 'hello 你好'

// Output a hex string
decode(input, { encoding: 'hex' })
// => '68656c6c6f20e4bda0e5a5bd'

// Output a byte array
decode(input, { encoding: 'binary' })
// => [104, 101, 108, 108, 111, 32, 228, 189, 160, 229, 165, 189]
```

### encode

Encoding a utf8 string, byte array or Uint8Array to a base64 string.

```js
encode(input)
```

**Arguments**

* **`input (string | Array | Uint8Array)`**

**Return**

* **`(string)`**

**Example**

```js
// Input a string
encode('hello 你好')
// => 'aGVsbG8g5L2g5aW9'

// Input a byte array
const bytes = [104, 101, 108, 108, 111, 32, 228, 189, 160, 229, 165, 189]
encode(bytes)
// => 'aGVsbG8g5L2g5aW9'

// Input a Uint8Array
const uint8 = new Uint8Array(bytes)
encode(uint8)
// => 'aGVsbG8g5L2g5aW9'
```

## char

### isAlphabetic

```js
isAlphabetic(ch)
```

Detect a character whether it is one of a-z or A-Z.

**Arguments**

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

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

* **`ch (string)`**: A string with length equal to 1.

**Return**

* **`(boolean)`**

**Example**

```js
isUpper('a');
// => true
```

## cookie

### get

```js
get(key)
```

Get the cookie's value of the specified name, with `decodeURIComponent` decoding.

**Arguments**

* **`key (string)`**: Cookie name.

**Return**

* **`(string)`**

### getAll

```js
getAll()
```

Get the all cookies' value, with `decodeURIComponent` decoding.

**Return**

* **`(Object)`**

### getJson

```
getJson(key)
```

Get the cookie's value of the specified name, with `JSON.parse` decoding.

**Arguments**

* **`key (string)`**: Cookie name.

**Return**

* **`(string)`**

### getRaw

```
getRaw(key)
```

Get the cookie's value of the specified name, without decoding.

**Arguments**

* **`key (string)`**

**Return**

* **`(string)`**

### isEnabled

```js
isEnabled()
```

Check if the cookie is enabled.

**Return**

* **`(boolean)`**

### remove

```js
remove(key, [options])
```

Remove a cookie.

**Arguments**

* **`key (string)`**: Cookie name.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**
  + **`[path = "/"] (string)`**

### set

```js
set(key, value, options)
```

Set a cookie, and the `value` argument will be encoded with `encodeURIComponent`.

**Arguments**

* **`key (string)`**: Cookie name.
* **`value (string)`**: Cookie value.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**: The domain belongs to.
  + **`[path = "/"] (string)`**: The path belongs to.
  + **`[expires] (number|string|Date)`**: It can accept a `Date` object, a parsable date string (parsed by `Date.parse()`), an integer (unit: day) or a numeric string with a suffix character which specifies the time unit.
  + **`[max-age] (number)`** The time of existence.
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**

| Unit suffix | Representation |
| ----------- | -------------- |
| Y           | One year       |
| M           | One month      |
| D           | One day        |
| h           | One hour       |
| m           | One minute     |
| s           | One second     |

### setJson

```js
set(key, value, [options])
```

Same as `set`, set a cookie, and the `value` argument will be encoded with `JSON.stringify`.

**Arguments**

* **`key (string)`**: Cookie name.
* **`value (Any)`**: Cookie value.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**: The domain belongs to.
  + **`[path = "/"] (string)`**: The path belongs to.
  + **`[expires] (number|string|Date)`**: It can accept a `Date` object, a parsable date string (parsed by `Date.parse()`), an integer (unit: day) or a numeric string with a suffix character which specifies the time unit.
  + **`[max-age] (number)`** The time of existence.
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**

### setRaw

```js
set(key, value, options)
```

Same as `set`, set a cookie without any encoding.

**Arguments**

* **`key (string)`**: Cookie name.
* **`value (Any)`**: Cookie value.
* **`[options] (Object)`**: Cookie options.
  + **`[domain] (string)`**: The domain belongs to.
  + **`[path = "/"] (string)`**: The path belongs to.
  + **`[expires] (number|string|Date)`**: It can accept a `Date` object, a parsable date string (parsed by `Date.parse()`), an integer (unit: day) or a numeric string with a suffix character which specifies the time unit.
  + **`[max-age] (number)`** The time of existence.
  + **`[samesite] (boolean)`**
  + **`[secure] (boolean)`**

## date

### diff

```js
diff(date1, date2, [unit], [roundFunc])
```

Compute the difference of the specified period unit between two dates.

**Arguments**

* **`date1 (number|Date|string)`**: A timestamp number, a Date object or a parsable date string.
* **`date2 (number|Date|string)`**: A timestamp number, a Date object or a parsable date string.
* **`[unit = "ms"] (string)`**: A string specifies the peroid unit, default is `"ms"`. See unit table.
* **`[roundFunc = Math.round] (Function)`**: A round function, default is `Math.round`.

**Return**

* **`(number)`**

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

**Example**

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

**Arguments**

* **`date (number|string|Date)`**: A timestamp number (unit: ms) or a parsable date string or a `Date` object.
* **`format (string)`**: A string of tokens, which is subset of the [moment format tokens](http://momentjs.com/docs/#/displaying/format/). see below table.
* **`[isUTC = false] (boolean)`**: Use the UTC time, default is `false`.

**Return**

* **`(string)`**

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
timeAgo.format(date, [locale], [nowDate])
```

**Arguments**

* **`date (number|Date|string)`**: A timestamp, a Date object or a parsable date string.
* **`[locale = "en_US"] (string)`**: the locale, "en_US" (default) and "zh_CN" are builtins supported.
* **`[nowDate = new Date()](Date)`**: The base date.

**Return**

* **`(string)`**

**Example**

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

Get the difference between the left edge of an element and the left edge of viewport.

**Arguments**

* **`elem (Element)`**: An element.

**Return**

* **`(number)`**

**Example**

```js
const el = document.getElementById('el');
const x = clientX(el);
// x => 100
```

### clientY

```js
clientY(elem)
```

Get the difference between the top edge of an element and the top edge of viewport.

**Arguments**

* **`elem (Element)`**: An element.

**Return**

* **`(number)`**

**Example**

```js
const el = document.getElementById('el');
const y = clientY(el);
// y => 100
```

### createEvent

```js
createEvent(type, [options])
```

Create a custom event.

**Arguments**

* **`type (string)`**: The event type.
* **`[options] (string)`**: The event options.
  + **`[bubbles = false] (boolean)`**:
  + **`[cancelable = false] (boolean)`**:
  + **`[detail = null] (Object)`**

**Return**

* **`(Event)`**

**Example**

```js
const btn = document.getElementById('btn');
const event = createEvent('click');

btn.dispatchEvent(event);
```

### domReady

```js
domReady(callback)
```

Defer the execution of the `callback`, which will be executed in `DOMContentLoaded` event.
If the `DOMContentLoaded` has triggered, then the `callback` will be executed in next event loop.

**Arguments**

* **`callback (Function)`**

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


### insertScript

```js
insertScript(url, [props])
```

Insert a `<script>` to document.

**Arguments**

* **`url (string)`**: The `script.src` string.
* **`[props] (Object)`**: The `<script>` element properties.

### isElement

```js
isElement(obj)
```

Check if the argument is an element.

**Arguments**

* **`obj (Any)`**: Any value.

**Return**

* **`(boolean)`**

### isInViewport

```js
isInViewport(el)
```

Check if an element is in the viewport.

**Arguments**

* **`el (Element)`**: An element.

**Return**

* **`(boolean)`**

### isWindow

```js
isWindow(obj)
```

Check if a value is window object.

**Arguments**

* **`obj (Any)`**: Any value.

**Return**

* **`(boolean)`**

### pageX

```js
pageX(el)
```

Return the horizontal distance of an element to the left edge of the page.

**Arguments**

* **`el (Element)`**

**Return**

* **`(number)`**

**Example**

```js
const el = document.getElementById('el')
pageX(el)
```

### pageY

```js
pageY(el)
```

Return the vertical distance of an element to the left edge of the page.

**Arguments**

* **`el (Element)`**

**Return**

* **`(number)`**

**Example**

```js
const el = document.getElementById('el')
pageY(el)
```

### scrollTo

```js
scrollTo(x, y)
scrollTo(options)
scrollTo(elOrWindow, x, y)
scrollTo(elOrWindow, options)
```

Scroll the page or element to the target position.

**Arguments**

* **`[x = 0] (number)`**
* **`[y = 0] (number)`**
* **`[elOrWindow = window] (Element | Window)`**
* **`[options] (ExScrollToOptions)`**
  + **`[x = 0] (number)`**
  + **`[y = 0] (number)`**
  + **`[easing] (string)`**: Similar to the CSS [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function). It is one of the `linear`/`ease`/`easeIn`/`easeInOut`/`easeOut`/`cubic-bezier(x1, y1, x2, y2)`.
  + **`[behavior] (string)`**: It is `smooth` or `auto`. See the [compatibility](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions).

**Example**

```js
// Scroll the page to (100, 100)
scroll(100, 100)

// Scroll the page to (100, 100) smoothly
scroll({ x: 100, y: 100, behavior: 'smooth' })

// Scroll the page to (100, 100) with an easing function
scroll({ x: 100, y: 100, easing: 'ease-out' })

// Scroll an element to (100, 100)
scroll(el, 100, 100)

// Scroll an element to (100, 100) smoothly
scroll(el, { x: 100, y: 100, behavior: 'smooth' })

// Scroll an element to (100, 100) with an easing function
scroll(el, { x: 100, y: 100, easing: 'ease-out' })
```

### scrollX

```js
scrollX([elOrWindow])
```

Get the horizontal scroll distance of an element or a window.

**Arguments**

* **`[elOrWindow = window] (Element|Window)`**: An element or a window.

**Return**

* **`(number)`**

**Example**

```js
// Return the window scrollX if no argument is passed
scrollX();

const el = document.getElementById('el')
scrollX(el);
```

### scrolY

```js
scrollY([elOrWindow])
```

Get the horizontal scroll distance of an element or a window.

**Arguments**

* **`[elOrWindow = window] (Element|Window)`**: An element or a window.

**Return**

* **`(number)`**

**Example**

```js
// Return the window scrollY if no argument is passed
scrollY();

const el = document.getElementById('el')
scrollY(el);
```

### viewport

```js
viewport([elOrWindow])
```

Get the width and height of the viewport of an element or a window.

**Arguments**

* **`[elOrWindow = window] (Element|Window)`**: An element or a window.

**Return**

* **`(Object)`**

**Example**

```js
viewport();
// => { width: 1920, height: 900 }
```

## easing

### cubicBezier

```js
cubicBezier(x1, y1, x2, y2)
```

It generates an easing function, like the `cubic-bezier()` of CSS transition.

**Arguments**

* **`x1 (number)`**
* **`y1 (number)`**
* **`x2 (number)`**
* **`y2 (number)`**

**Return**

* **`(Function)`**

**Example**

```js
const linear = cubicBezier(0, 0, 1, 1)
linear(0.1)
// => 0.1
```

### ease

```js
ease(x)
```

It is a shortand to `cubicBezier(0.25, 0.1, 0.25, 1)`.

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

### easeIn

```js
easeIn(x)
```

It is a shortand to `cubicBezier(0.42, 0, 1, 1)`.

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

### easeInOut

```js
easeInOut(x)
```

It is a shortand to `cubicBezier(0.42, 0, 0.58, 1)`.

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

### easeOut

```js
easeOut(x)
```

It is a shortand to `cubicBezier(0, 0, 0.58, 1)`.

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

### linear

```js
linear(x)
```

It is a shortand to `cubicBezier(0, 0, 1, 1)`.

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

**Example**

```js
linear(0.1)
// => 0.1
```

## emitter

You can use `micell.emitter.create()` to create an Emitter instance. And, every Emitter instance has the below methods:

* `emit`
* `getListeners`
* `off`
* `on`
* `once`

The `micell.emitter` can be used as a global Emitter instance. That is, the below functions
are the methods of the global emitter.

* `micell.emitter.emit`
* `micell.emitter.getListeners`
* `micell.emitter.off`
* `micell.emitter.on`
* `micell.emitter.once`

### Emitter

```js
new Emitter()
```

The Emitter constructor. Recommend to use the below `create()` method to create an Emitter instance.

**Return**

* **`(Emitter)`**

### create

```js
create()
```

Create an Emitter instance.

**Return**

* **`(Emitter)`**

**Example**

```js
const emitter = create()
emitter.on('foo', () => console.log('foo'))
emitter.emit('foo')
// => 'foo'
```

### emit

```js
emit(type, [arg1], [arg2], ...)
```

**Arguments**

* **`type (string)`**
* **`[argN] (any)`**

```js
micell.emitter.on('foo', (...args) => console.log(args))
micell.emitter.emit('foo', 1, 2, 3)
// => [1, 2, 3]
```

### getListeners

```js
getListeners(type)
```

Return the given type listeners or all listeners.

**Arguments**

* **`[type (string)]`**

**Return**

* **`(Array<Listener>)`**

**Example**

```js
micell.emitter.on('foo', () => console.log('foo 1'))
micell.emitter.on('bar', () => console.log('bar 1'))
micell.emitter.on('foo', () => console.log('foo 2'))

// All listeners for 'foo'
micell.emitter.getListeners('foo')

// All listeners
micell.emitter.getListeners()
```

### off

```js
off(type, listener)
```

* If nothing is passed, all listeners will be removed.
* If only the `type` parameter is passed, the given type listeners will be removed.
* If the `type` and `listener` are passed, then all the `listener`s of the `type` will be removed.

**Arguments**

* **`[type (string)]`**
* **`[listener (function)]`**

**Example**

```js
const fn1 = () => console.log(1)
const fn2 = () => console.log(2)

micell.emitter.on('foo', fn1)
micell.emitter.on('bar', fn1)
micell.emitter.on('foo', fn2)

micell.emitter.off('foo', fn1)
micell.emitter.off('foo')
micell.emitter.off()
```

### on

```js
on(type, listener)
```

Attach a listener to the emitter.

**Arguments**

* **`[type (string)]`**
* **`[listener (function)]`**

### once

```js
once(type, listener)
```

Same as `on`, attach a listener to the emitter but the listener will be triggered once.

**Arguments**

* **`[type (string)]`**
* **`[listener (function)]`**

## lang

### isArray

```js
isArray(value)
```

Check if a value is an Array.

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isArray([]);
// => true
```

### isBigInt

```js
isBigInt(value)
```

Check if a value is a BigInt value.

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isBigInt(BigInt(1));
// => true
```

### isBoolean

```js
isBoolean(value)
```

Check if a value is a Boolean.

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

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

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isString('hello world');
// => true
```

### isSymbol

```js
isSymbol(value)
```

Check if a value is a Symbol value.

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isSymbol(Symbol('foo'));
// => true
```

### isUndefined

```js
isUndefined(value)
```

Check if a value is `undefined`.

**Arguments**

* **`value (any)`**

**Return**

* **`(boolean)`**

**Example**

```js
isUndefined(void 0);
// => true
```

## path

### basename

```js
basename(str)
```
Return the last part of the path string.

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
basename('/foo/bar');
// => "bar"
```

### dirname

```js
dirname(str)
```

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
dirname('/foo/bar');
// => "/foo"
```

### extname

```js
extname(str)
```

Return the extension name of the path.

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
extname('/foo/bar.txt');
// => ".txt"
```

### join

```js
join(...args)
```

Join the path strings seperated by an slash `/`.

**Arguments**

* **`args (string[])`**

**Return**

* **`(string)`**

**Example**

```js
join()
// => ""
join('foo', 'bar')
// => "foo/bar"
join('foo/', '/bar')
// => "foo/bar"
```

## qs

### get

```js
get(name)
```

Get the value of the specified name in the current search string.

**Arguments**

* **`name (string)`**

**Return**

* **`(string|Array\<string\>)`**

**Example**

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

Parse a search string.

**Arguments**

* **`search (string)`**

**Return**

* **`(Object)`**

### stringify

```js
stringify(query)
```

Convert an object to a search string.

**Arguments**

* **`query (Object)`**

**Return**

* **`(string)`**

## regex

### isAscii

```js
isAscii(str)
```

Check if a string contains the ASCII characters only.

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isDigit('0123');
// => true
```

### isDomain

```js
isDomain(str)
```

Check if a string is a domain.

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isDomain('example.com');
// => true
isDomain('https://example.com');
// => false
```

### isEmail

```js
isEmail(str)
```

Check if a string is an email address.

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isHsl('hsl(100, 50%, 50%)');
// => true

isHsl('HSL(100, 50%, 50%)');
// => true
```

### isHsla

```js
isHsla(str)
```

Check if a string is an HSLA value.

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isHsla('hsla(100, 50%, 50%, 0.5)');
// => true

isHsla('HSLA(100, 50%, 50%, 0.5)');
// => true
```

### isInteger

```js
isInteger(str)
```

Same as `isDigit`. Check if a string contains the digits only.

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isIPv4('192.0.0.1');
// => true
```

### isIPv6

```js
isIPv6(str)
```

Check if a string is an IP (v4) address.

**Arguments**

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(number)`**

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

* **`str (string)`**

**Return**

* **`(string)`**

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

* **`str (string)`**

**Return**

* **`(string)`**

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

* **`str (string)`**

**Return**

* **`(boolean)`**

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

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
lastChar('hello');
// => "o"
```

### truncate

```js
truncate([str], [options])
```

Return a truncated string end with the specified omission.

**Arguments**

* **`[str = ""] (string)`**: The string to be truncated.
* **`[options = {}] (Object)`**: The options object.
  + **`[length] (number)`**: The maxmium string length. It is the `str` length by default.
  + **`[omission = "..."] (string)`**: The omission string.
  + **`[countType = 0] (number)`**: How to count the half width and full width characters.
    - `0`: Count 1 for each character.
    - `1`: Count 1 for half width and count 2 for full width.
    - `2`: Count 0.5 for half width and count 1 for full width.

**Return**

* **`(string)`**

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

**Return**

* **`(boolean)`**

### isMacOS

```js
isMacOS()
```

Check if the os is macOS.

**Return**

* **`(boolean)`**

### isLinux

```js
isLinux()
```

Check if the os is Linux.

**Return**

* **`(boolean)`**

### isAndroid

```js
isAndroid()
```

Check if the os is Android.

**Return**

* **`(boolean)`**

### isIOS

```js
isIOS()
```

Check if the os is iOS.

**Return**

* **`(boolean)`**

### isMobile

```js
isMobile()
```

Check if the os is a mobile system.

**Return**

* **`(boolean)`**

### isTablet

```js
isTablet()
```

Check if the os is a tablet system.

**Return**

* **`(boolean)`**

### isWechat

```js
isWechat()
```

Check if the environment is Wechat.

**Return**

* **`(boolean)`**

### isIPhone

```js
isIPhone()
```

Check if the environment is iPhone.

**Return**

* **`(boolean)`**

### isIPad

```js
isIPad()
```

Check if the environment is iPad.

**Return**

* **`(boolean)`**

## url

### isAbsolute

```js
isAbsolute(url)
```

Check if the `url` is an absolute URL.

**Arguments**

* **`url (string)`**

**Return**

* **`(boolean)`**

**Example**

```js
isAbsolute('example.com')
// => false
isAbsolute('https://example.com')
// => true
```

### join

```js
join(...args)
```

Join and normalize the url part strings.

**Arguments**

* **`args (string[])`**

**Return**

* **`(string)`**

**Example**

```js
join('https://example.com', 'foo', 'bar')
// => 'https://example.com/foo/bar'
join('https://example.com', 'foo', 'bar/')
// => 'https://example.com/foo/bar/'
join('https://example.com', 'foo', 'bar', '?hello=world')
// => 'https://example.com/foo/bar?hello=world'
```

### parse

```js
parse(url)
```

**Arguments**

* **`url (string)`**: The parsed url.

**Return**

* **`(Object)`**

**Example**

```js
parse('http://admin:123456@example.com:8080/path-to-somewhere?foo=1&lang=js&lang=css#title')
// =>
// {
//   hash: '#title',
//   host: 'example.com:8080',
//   hostname: 'example.com',
//   href: 'http://admin:123456@example.com:8080/path-to-somewhere?foo=1&lang=js&lang=css#title',
//   origin: 'http://example.com:8080',
//   password: '123456',
//   pathname: '/path-to-somewhere',
//   port: '8080',
//   protocol: 'http',
//   query: {
//     foo: '1',
//     lang: ['js', 'css']
//   },
//   search: '?foo=1&lang=js&lang=css',
//   username: 'admin'
// }
```

### stringify

```js
stringify(urlParts)
```

**Arguments**

* **`urlParts (Object)`**: The url parts object.

**Return**

* **`(string)`**

**Example**

```js
stringify({
  protocol: 'http',
  host: 'example.com',
  pathname: '/path',
  query: {
    foo: '1',
    lang: ['js', 'css']
  }
})
// => 'http://example.com/path?foo=1&lang=js&lang=css'
```

## ajax

```js
ajax(url, [options])
```

**Arguments**

* **`url (string)`**: The request url.
* **`[options] (Object)`**: The ajax options.
  + **`[async = true] (boolean)`**: If the request is send asynchronously.
  + **`[beforeSend] (Function)`**: The callback called before the request sent. If it returns `false`, then the request will not be sent.
  + **`[data = null] (string|Object)`**: The data sent.
  + **`[headers = null] (Object)`**: The request headers.
  + **`[method = "get"] (string)`**: The request method.
  + **`[responseType = "json"] (string)`**: How to parse the response.
  + **`[timeout = 0] (number)`**: The timeout.

**Return**

* **`(Promise)`**

## css

```js
css(el, [prop])
```

Get the value of the specified or all CSS properties.

**Arguments**

* **`el (Element|string)`**: an element or a CSS selector string.
* **`[prop] (string)`**: CSS property name.

**Return**

* **`(string|Object)`**

**Example**

```js
const el = document.getElementById('el');

// Get all properties
css(el);
// => CSSStyleDeclaration { ... }

// Passing a selector string
css('#el');
// => CSSStyleDeclaration { ... }

// Get the specified properties' value
css('#el', 'width');
// => '100px'
```

## delay

```js
delay(duration)
```
Return a promise, it will be resolved after the `duration` time.

**Arguments**

* **`duration (number)`**: The duration.

**Return**

* **`(Promise)`**

## jsonp

```js
jsonp(url, [options])
```

**Arguments**

* **`url (string)`**: The request url
* **`[options] (Object)`**: The options.
  + **`[callback] (string)`**: The callback called after the request success or failed.
  + **`[responseType = "json"] (string)`**: How to parse the response.
  + **`[timeout = 0] (number)`**: The request timeout.

**Return**

* **`(Promise)`**

## md5

```js
md5(input)
```

**Arguments**

* **`input (string | number[] | Uint8Array)`**

**Return**

* **`(string)`**

**Example**

```js
md5('hello 你好')
// => '429f2c0b03ebc9911455cbec2a09bc6f'
```

## noop

This is an empty function, accepting no argument, returning no value.

## numberFormat

```js
numberFormat(number, [digits], [dot], [sep])
```

Format a number.

**Arguments**

* **`number (number)`**: The number to be formatted.
* **`[digits = -1] (number)`**: The length of decimal part. If it's `-1`, then the original decimal part will be preserved. It it's greater than `-1`, the the last of the preserved digits will be obtained with `Math.round`.
* **`[dot = "."] (string)`**: The delimiter of the integer and decimal part.
* **`[sep = ","] (string)`**: The thousand separator.

**Return**

* **`(string)`**

**Example**

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

It is same as [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) when supported. Or, use `setTimeout` to simulate.

**Arguments**

* **`callback (Function)`**: The function to be invoked before the next repaint. A [DOMHighResTimeStamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) similar  to be returned by `performance.now()` is passed to be as the first argument.

**Return**

* **`(number)`**: The timer id to be used to cancel the next callback.

**Example**

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

Return an array of random integer which is greater than or equal to `start` and less than or equal to `end`. In array, each other is not equal.

**Arguments**

* **`start (number)`**: The minimum integer.
* **`end (number)`**: The maximum integer.
* **`length (number)`**: The number of integers.

**Return**

* **`(numbers[])`**

**Example**

```js
randomNumbers(1, 10, 5)
// => [9, 4, 1, 5, 7]
```

## randomString

```js
randomString([len], [chars])
```

Return a random string which consists of the characters specified by `chars`.

**Arguments**

* **`[len = 32] (number)`**: The length of random string, default is `32`.
* **`[chars] (string)`**: The character set, default is lower letters, upper letters and digits.

**Return**

* **`(string)`**

**Example**

```js
randomString();

// Generate an 8 length string.
randomString(8);

// Generate a random digit string.
randomString(undefined, '0123456789');
```

## uuid

```js
uuid()
```

Generate a UUID based on random numbers, see algorithm in [rfc4122](https://tools.ietf.org/html/rfc4122#section-4.4).

**Return**

* **`(string)`**

**Example**

```js
uuid();
// => 'fedb3747-4208-475d-b473-e51b583cddaf'
```
