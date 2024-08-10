# Global

## ajax

```js
ajax(url, [options])
```

**Since**

0.1.0

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

## classNames

```js
classNames(...args)
```

Generate the `className` value of an element by any number of arguments. It is same as [JedWatson/classnames](https://github.com/JedWatson/classnames).

**Since**

0.10.0

**Arguments**

* **`[args] (any[])`**: See the below example.

**Return**

* **`(string)`**

**Example**

```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values and none of string, object and array are just ignored
classNames(null, false, 'bar', undefined, 0, 1, true, { baz: null }, ''); // => 'bar'

// Arrays will be recursively flattened as per the rules above
const arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

## css

```js
css(el, [prop])
```

Get the value of the specified or all CSS properties.

**Since**

0.1.0

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

**Since**

0.1.0

**Arguments**

* **`duration (number)`**: The duration.

**Return**

* **`(Promise)`**

## download

```js
download(file, [fileName])
```

Download a url or a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object or a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object. This function originates from [eligrey/FileSaver.js](https://github.com/eligrey/FileSaver.js).

**Arguments**

* **`file (string | Blob | File)`**: a url string or a `Blob` object or a `File` object.
* **`[fileName] (string)`**: Prefer use this argument as file name, then the name of `file` if `file` is type of `File`, and finally the `'download'` string.

**Example**

```js
// Download the file located by a url string
download('https://micell.org/logo.svg', 'micell-logo.svg')

// Download the Blob
const blob = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' })
download(blob, 'hello-world.txt')
```
## jsonp

```js
jsonp(url, [options])
```

**Since**

0.1.0

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

**Since**

0.4.0

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

**Since**

0.1.0

## numberFormat

```js
numberFormat(number, [digits], [dot], [sep])
```

Format a number.

**Since**

0.1.0

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

**Since**

0.2.0

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

**Since**

0.8.0

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

**Since**

0.1.0

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

**Since**

0.1.0

**Return**

* **`(string)`**

**Example**

```js
uuid();
// => 'fedb3747-4208-475d-b473-e51b583cddaf'
```
