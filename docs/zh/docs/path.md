# path

## basename

```js
basename(str)
```
返回一个路径字符串的最后一部分。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(string)`**

**示例**

```js
basename('/foo/bar');
// => "bar"
```

## dirname

```js
dirname(str)
```

返回一个路口字符串的目录部分。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(string)`**

**示例**

```js
dirname('/foo/bar');
// => "/foo"
```

## extname

```js
extname(str)
```

返回一个路径字符串的扩展名部分。

**起始版本**

0.1.0

**参数**

* **`str (string)`**

**返回值**

* **`(string)`**

**示例**

```js
extname('/foo/bar.txt');
// => ".txt"
```

## join

```js
join(...args)
```

拼接路径字符串，使用斜线`/`分隔。

**起始版本**

0.8.0

**参数**

* **`args (string[])`**

**返回值**

* **`(string)`**

**示例**

```js
join()
// => ""
join('foo', 'bar')
// => "foo/bar"
join('foo/', '/bar')
// => "foo/bar"
```
