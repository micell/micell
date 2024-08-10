# qs

## get

```js
get(name)
```

获取查询字符串当中指定名称的值。

**起始版本**

0.1.0

**参数**

* **`name (string)`**

**返回值**

* **`(string|Array\<string\>)`**

**示例**

```js
// location.search = '?hello=world'
getQuery('hello');
// => "world"


// location.search = '?fruits=apple&fruits=orange'
getQuery('fruits');
// => ["apple", "orange"]
```

## parse

```js
parse(search)
```

解析一个查询字符串。

**起始版本**

0.1.0

**参数**

* **`search (string)`**

**返回值**

* **`(Object)`**

## stringify

```js
stringify(query)
```

将对象序列化为查询字符串。

**起始版本**

0.1.0

**参数**

* **`query (Object)`**

**返回值**

* **`(string)`**
