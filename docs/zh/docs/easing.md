# easing

## cubicBezier

```js
cubicBezier(x1, y1, x2, y2)
```

如同 CSS 过渡（transition）的`cubic-bezier()`，该方法生成一个缓动函数（easing function）。

**起始版本**

0.2.0

**参数**

* **`x1 (number)`**
* **`y1 (number)`**
* **`x2 (number)`**
* **`y2 (number)`**

**返回值**

* **`(Function)`**

**示例**

```js
const linear = cubicBezier(0, 0, 1, 1)
linear(0.1)
// => 0.1
```

## ease

```js
ease(x)
```

等同于`cubicBezier(0.25, 0.1, 0.25, 1)`。

**起始版本**

0.2.0

**参数**

* **`x (number)`**

**返回值**

* **`(number)`**

## easeIn

```js
easeIn(x)
```

等同于`cubicBezier(0.42, 0, 1, 1)`。

**起始版本**

0.2.0

**参数**

* **`x (number)`**

**返回值**

* **`(number)`**

## easeInOut

```js
easeInOut(x)
```

等同于`cubicBezier(0.42, 0, 0.58, 1)`。

**起始版本**

0.2.0

**参数**

* **`x (number)`**

**返回值**

* **`(number)`**

## easeOut

```js
easeOut(x)
```

等同于`cubicBezier(0, 0, 0.58, 1)`。

**起始版本**

0.2.0

**参数**

* **`x (number)`**

**返回值**

* **`(number)`**

## linear

```js
linear(x)
```

等同于`cubicBezier(0, 0, 1, 1)`。

**起始版本**

0.2.0

**参数**

* **`x (number)`**

**返回值**

* **`(number)`**

**示例**

```js
linear(0.1)
// => 0.1
```
