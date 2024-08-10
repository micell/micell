# path

## basename

```js
basename(str)
```
Return the last part of the path string.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
basename('/foo/bar');
// => "bar"
```

## dirname

```js
dirname(str)
```

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
dirname('/foo/bar');
// => "/foo"
```

## extname

```js
extname(str)
```

Return the extension name of the path.

**Since**

0.1.0

**Arguments**

* **`str (string)`**

**Return**

* **`(string)`**

**Example**

```js
extname('/foo/bar.txt');
// => ".txt"
```

## join

```js
join(...args)
```

Join the path strings seperated by an slash `/`.

**Since**

0.8.0

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
