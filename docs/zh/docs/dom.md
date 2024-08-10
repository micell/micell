# dom

## clientX

```js
clientX(elem)
```

获取一个元素左边界距离视口（浏览器窗口可视区域）左边界距离。

**起始版本**

0.1.0

**参数**

* **`elem (Element)`**

**返回值**

* **`(number)`**

**示例**

```js
const el = document.getElementById('el');
const x = clientX(el);
// x => 100
```

## clientY

```js
clientY(elem)
```

获取一个元素顶部距离视口（浏览器窗口可视区域）顶部距离。

**起始版本**

0.1.0

**参数**

* **`elem (Element)`**

**返回值**

* **`(number)`**

**示例**

```js
const el = document.getElementById('el');
const y = clientY(el);
// y => 100
```

## createEvent

```js
createEvent(type, [options])
```

创建一个自定义事件对象。

**起始版本**

0.1.0

**参数**

* **`type (string)`**：事件名称。
* **`[options] (string)`**：事件配置对象。
  + **`[bubbles = false] (boolean)`**：事件是否冒泡。
  + **`[cancelable = false] (boolean)`**：事件是否可被取消。
  + **`[detail = null] (Object)`**：附加的数据。

**返回值**

* **`(Event)`**

**示例**

```js
const btn = document.getElementById('btn');
const event = createEvent('click');

btn.dispatchEvent(event);
```

## domReady

```js
domReady(callback)
```

延迟执行一个回调函数，直到`DOMContentLoaded`事件触发或者 DOM 可访问时执行。如果`domReady`执行时，`DOMContentLoaded`
事件已经触发或者 DOM 已经可访问，则`callback`会在下一个事件循环（event loop）被执行。

**起始版本**

0.1.0

**参数**

* **`callback (Function)`**：被执行的回调函数。

**示例**

```js
domReady(function () {
  // ...
});

// 可以使用多次。
domReady(function () {
  // 其他回调
});
```


## insertScript

```js
insertScript(url, [props])
```

插入一个`<script>`标签到文档中。

**起始版本**

0.1.0

**参数**

* **`url (string)`**：`<script>`标签的`src`属性。
* **`[props] (Object)`**：其他`<script>`标签支持的属性。

## isElement

```js
isElement(obj)
```

判断一个值是否为元素对象。

**起始版本**

0.1.0

**参数**

* **`obj (Any)`**：任意值。

**返回值**

* **`(boolean)`**

## isInViewport

```js
isInViewport(el)
```

判断一个元素是否位于视口（浏览器可视区域）内。

**起始版本**

0.1.0

**参数**

* **`el (Element)`**：一个元素。

**返回值**

* **`(boolean)`**

## isWindow

```js
isWindow(obj)
```

判断一个值是否是`window`对象。

**起始版本**

0.1.0

**参数**

* **`obj (Any)`**：任意值。

**返回值**

* **`(boolean)`**

## pageHeight

```js
pageHeight([el])
```

返回元素内容高度，包括由于溢出导致未显示部分。

**起始版本**

0.13.0

**参数**

* **`[el] (Element)`**

**返回值**

* **`(number)`**

**示例**

```js
// 当前页面文档高度
pageHeight()

// 元素内容高度
pageHeight(document.getElementById('el1'))
```

## pageWidth

```js
pageWidth([el])
```

返回元素内容宽度，包括由于溢出导致未显示部分。

**起始版本**

0.13.0

**参数**

* **`[el] (Element)`**

**返回值**

* **`(number)`**

**示例**

```js
// 当前页面文档宽度
pageWidth()

// 元素内容宽度
pageWidth(document.getElementById('el1'))
```

## pageX

```js
pageX(el)
```

返回一个元素距离页面左边界的水平距离。

**起始版本**

0.1.0

**参数**

* **`el (Element)`**

**返回值**

* **`(number)`**

**示例**

```js
const el = document.getElementById('el')
pageX(el)
```

## pageY

```js
pageY(el)
```

返回一个元素距离页面顶部的竖直距离。

**起始版本**

0.1.0

**参数**

* **`el (Element)`**

**返回值**

* **`(number)`**

**示例**

```js
const el = document.getElementById('el')
pageY(el)
```

## scrollTo

```js
scrollTo(x, y)
scrollTo(options)
scrollTo(elOrWindow, x, y)
scrollTo(elOrWindow, options)
```

滚动页面或元素到指定位置。

**起始版本**

0.1.0

**参数**

* **`[x = 0] (number)`**
* **`[y = 0] (number)`**
* **`[elOrWindow = window] (Element | Window)`**
* **`[options] (ExScrollToOptions)`**
  + **`[x = 0] (number)`**
  + **`[y = 0] (number)`**
  + **`[easing] (string)`**：类似 CSS 的 [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)。 值为`linear`/`ease`/`easeIn`/`easeInOut`/`easeOut`/`cubic-bezier(x1, y1, x2, y2)`之一。
  + **`[behavior] (string)`**：值为`smooth` or `auto`。查看[兼容性](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions).

**示例**

```js
// 滚动页面到 (100, 100)
scroll(100, 100)

// 平滑滚动页面到 (100, 100)
scroll({ x: 100, y: 100, behavior: 'smooth' })

// 滚动页面到 (100, 100)，并且应用一个缓动函数
scroll({ x: 100, y: 100, easing: 'ease-out' })

// 滚动元素到 (100, 100)
scroll(el, 100, 100)

// 平滑滚动元素到 (100, 100)
scroll(el, { x: 100, y: 100, behavior: 'smooth' })

// 滚动元素到 (100, 100)，并且应用一个缓动函数
scroll(el, { x: 100, y: 100, easing: 'ease-out' })
```

## scrollX

```js
scrollX([elOrWindow])
```

返回一个元素或页面的水平滚动距离。

**起始版本**

0.1.0

**参数**

* **`[elOrWindow = window] (Element|Window)`**：一个元素或`window`对象。

**返回值**

* **`(number)`**

**示例**

```js
// 如果不传任何参数，则返回页面的水平滚动距离。
scrollX();

const el = document.getElementById('el')
scrollX(el);
```

## scrolY

```js
scrollY([elOrWindow])
```

返回一个元素或页面的竖直滚动距离。

**起始版本**

0.1.0

**参数**

* **`[elOrWindow = window] (Element|Window)`**：一个元素或`window`对象。

**返回值**

* **`(number)`**

**示例**

```js
// 如果不传任何参数，则返回页面的竖直滚动距离。
scrollY();

const el = document.getElementById('el')
scrollY(el);
```

## viewport

```js
viewport([elOrWindow])
```

获取一个元素或`window`的视口宽度和高度。

**起始版本**

0.1.0

**参数**

* **`[elOrWindow = window] (Element|Window)`**：一个元素或`window`对象。

**返回值**

* **`(Object)`**

**示例**

```js
viewport();
// => { width: 1920, height: 900 }
```
