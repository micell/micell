# base64

## decode

```js
decode(input, [options])
```

Decoding a base64-encoded string to a utf8 string, hex string or byte array.

**Since**

0.3.0

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

## decodeFile

Decoding a base64 encoded string to a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object.

```js
decodeFile(input, options)
```

**Since**

0.12.0

**Arguments**

* **`input (string)`**: A base64 encoded string.
* **`options (Object)`**
  + `type (string)`:  An MIME type, such as `'plain/text'`.

**Return**

* **`(Promise<Blob>)`**

**Example**

```js
decodeFile('aGVsbG8gd29ybGQ=', { type: 'plain/text' })
  .then(blob => {
    console.log(blob)
    // => Blob {size: 11, type: "plain/text"}
  })
```

## encode

Encoding a utf8 string, byte array or Uint8Array to a base64 string.

```js
encode(input)
```

**Since**

0.3.0

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

## encodeFile

Encoding a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)/[File](https://developer.mozilla.org/en-US/docs/Web/API/File) object to a string.

```js
encodeFile(file)
```

**Since**

0.12.0

**Arguments**

* **`file (Blob)`**

**Return**

* **`(Promise<string>)`**

**Example**

```js
const blob = new Blob(['hello world'], { type: 'plain/text' })
encodeFile(blob)
  .then((str) => {
    console.log(str)
    // => 'aGVsbG8gd29ybGQ='
  })
```
