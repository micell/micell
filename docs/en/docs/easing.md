# easing

## cubicBezier

```js
cubicBezier(x1, y1, x2, y2)
```

It generates an easing function, like the `cubic-bezier()` of CSS transition.

**Since**

0.2.0

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

## ease

```js
ease(x)
```

It is a shortand to `cubicBezier(0.25, 0.1, 0.25, 1)`.

**Since**

0.2.0

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

## easeIn

```js
easeIn(x)
```

It is a shortand to `cubicBezier(0.42, 0, 1, 1)`.

**Since**

0.2.0

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

## easeInOut

```js
easeInOut(x)
```

It is a shortand to `cubicBezier(0.42, 0, 0.58, 1)`.

**Since**

0.2.0

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

## easeOut

```js
easeOut(x)
```

It is a shortand to `cubicBezier(0, 0, 0.58, 1)`.

**Since**

0.2.0

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

## linear

```js
linear(x)
```

It is a shortand to `cubicBezier(0, 0, 1, 1)`.

**Since**

0.2.0

**Arguments**

* **`x (number)`**

**Return**

* **`(number)`**

**Example**

```js
linear(0.1)
// => 0.1
```
