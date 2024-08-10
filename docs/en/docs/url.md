# url

## isAbsolute

```js
isAbsolute(url)
```

Check if the `url` is an absolute URL.

**Since**

0.6.0

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

## join

```js
join(...args)
```

Join and normalize the url part strings.

**Since**

0.8.0

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

## parse

```js
parse(url)
```

**Since**

0.4.0

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

## stringify

```js
stringify(urlParts)
```

**Since**

0.4.0

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
