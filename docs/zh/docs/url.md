# url

## isAbsolute

```js
isAbsolute(url)
```

判断`url`是否是一个绝对 URL。

**起始版本**

0.6.0

**参数**

* **`url (string)`**

**返回值**

* **`(boolean)`**

**示例**

```js
isAbsolute('example.com')
// => false
isAbsolute('https://example.com')
// => true
```

## join

```js
join(...args)
```

拼接并正规化 URL 子字符串。

**起始版本**

0.8.0

**参数**

* **`args (string[])`**

**返回值**

* **`(string)`**

**示例**

```js
join('https://example.com', 'foo', 'bar')
// => 'https://example.com/foo/bar'
join('https://example.com', 'foo', 'bar/')
// => 'https://example.com/foo/bar/'
join('https://example.com', 'foo', 'bar', '?hello=world')
// => 'https://example.com/foo/bar?hello=world'
```

## parse

```js
parse(url)
```

**起始版本**

0.4.0

**参数**

* **`url (string)`**：被解析的 url。

**返回值**

* **`(Object)`**

**示例**

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

## stringify

```js
stringify(urlParts)
```

**起始版本**

0.4.0

**参数**

* **`urlParts (Object)`**：URL 配置对象。

**返回值**

* **`(string)`**

**示例**

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
