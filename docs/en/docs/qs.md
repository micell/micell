# qs

## get

```js
get(name)
```

Get the value of the specified name in the current search string.

**Since**

0.1.0

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

## parse

```js
parse(search)
```

Parse a search string.

**Since**

0.1.0

**Arguments**

* **`search (string)`**

**Return**

* **`(Object)`**

## stringify

```js
stringify(query)
```

Convert an object to a search string.

**Since**

0.1.0

**Arguments**

* **`query (Object)`**

**Return**

* **`(string)`**
