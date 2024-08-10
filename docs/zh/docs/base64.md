# base64

## decode

```js
decode(input, [options])
```

将 base64 编码的字符串解码为一个 UTF8 字符串、十六进制字符串或者字节数组。

**起始版本**

0.3.0

**参数**

* **`input (string)`**
* **`[options = {} (Object)]`**
  + `[encoding = 'utf8' (string)]`：输出编码，可以是`'utf8'` or `'hex'` or `'binary'`。

**返回值**

* **`(string | Array)`**

**示例**

```js
const input = 'aGVsbG8g5L2g5aW9'

// 返回 utf8 字符串
decode(input)
// => 'hello 你好'

// 返回十六进制字符串
decode(input, { encoding: 'hex' })
// => '68656c6c6f20e4bda0e5a5bd'

// a byte array
// 返回字节数组
decode(input, { encoding: 'binary' })
// => [104, 101, 108, 108, 111, 32, 228, 189, 160, 229, 165, 189]
```

## decodeFile

将一个 base64 编码字符串解码成一个 [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) 对象。

```js
decodeFile(input, options)
```

**起始版本**

0.12.0

**参数**

* **`input (string)`**：一个 base64 编码字符串。
* **`options (Object)`**
  + `type (string)`：MIME 类型，比如`'plain/text'`。

**返回值**

* **`(Promise<Blob>)`**

**示例**

```js
decodeFile('aGVsbG8gd29ybGQ=', { type: 'plain/text' })
  .then(blob => {
    console.log(blob)
    // => Blob {size: 11, type: "plain/text"}
  })
```

## encode

将一个 UTF8 字符串、字节数组或者`Uint8Array`编码为 base64 字符串。

```js
encode(input)
```

**起始版本**

0.3.0

**参数**

* **`input (string | Array | Uint8Array)`**

**返回值**

* **`(string)`**

**示例**

```js
// 输入字符串
encode('hello 你好')
// => 'aGVsbG8g5L2g5aW9'

// 输入字节数组
const bytes = [104, 101, 108, 108, 111, 32, 228, 189, 160, 229, 165, 189]
encode(bytes)
// => 'aGVsbG8g5L2g5aW9'

// 输入 Uint8Array
const uint8 = new Uint8Array(bytes)
encode(uint8)
// => 'aGVsbG8g5L2g5aW9'
```

## encodeFile

将一个 [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)/[File](https://developer.mozilla.org/en-US/docs/Web/API/File) 对象编码成一个字符串。

```js
encodeFile(file)
```

**起始版本**

0.12.0

**参数**

* **`file (Blob)`**

**返回值**

* **`(Promise<string>)`**

**示例**

```js
const blob = new Blob(['hello world'], { type: 'plain/text' })
encodeFile(blob)
  .then((str) => {
    console.log(str)
    // => 'aGVsbG8gd29ybGQ='
  })
```
