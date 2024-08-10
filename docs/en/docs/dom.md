# dom

## clientX

```js
clientX(elem)
```

Get the difference between the left edge of an element and the left edge of viewport.

**Since**

0.1.0

**Arguments**

* **`elem (Element)`**: An element.

**Return**

* **`(number)`**

**Example**

```js
const el = document.getElementById('el');
const x = clientX(el);
// x => 100
```

## clientY

```js
clientY(elem)
```

Get the difference between the top edge of an element and the top edge of viewport.

**Since**

0.1.0

**Arguments**

* **`elem (Element)`**: An element.

**Return**

* **`(number)`**

**Example**

```js
const el = document.getElementById('el');
const y = clientY(el);
// y => 100
```

## createEvent

```js
createEvent(type, [options])
```

Create a custom event.

**Since**

0.1.0

**Arguments**

* **`type (string)`**: The event type.
* **`[options] (string)`**: The event options.
  + **`[bubbles = false] (boolean)`**:
  + **`[cancelable = false] (boolean)`**:
  + **`[detail = null] (Object)`**

**Return**

* **`(Event)`**

**Example**

```js
const btn = document.getElementById('btn');
const event = createEvent('click');

btn.dispatchEvent(event);
```

## domReady

```js
domReady(callback)
```

Defer the execution of the `callback`, which will be executed in `DOMContentLoaded` event.
If the `DOMContentLoaded` has triggered, then the `callback` will be executed in next event loop.

**Since**

0.1.0

**Arguments**

* **`callback (Function)`**

**Example**

```js
domReady(function () {
  // ...
});

// You can use it multiple times.
domReady(function () {
  // other callback
});
```

## insertScript

```js
insertScript(url, [props])
```

Insert a `<script>` to document.

**Since**

0.1.0

**Arguments**

* **`url (string)`**: The `script.src` string.
* **`[props] (Object)`**: The `<script>` element properties.

## isElement

```js
isElement(obj)
```

Check if the argument is an element.

**Since**

0.1.0

**Arguments**

* **`obj (Any)`**: Any value.

**Return**

* **`(boolean)`**

## isInViewport

```js
isInViewport(el)
```

Check if an element is in the viewport.

**Since**

0.1.0

**Arguments**

* **`el (Element)`**: An element.

**Return**

* **`(boolean)`**

## isWindow

```js
isWindow(obj)
```

Check if a value is window object.

**Since**

0.1.0

**Arguments**

* **`obj (Any)`**: Any value.

**Return**

* **`(boolean)`**

## pageHeight

```js
pageHeight([el])
```

Return the height of an element's content, including content not visible on the screen due to overflow.

**Since**

0.13.0

**Arguments**

* **`[el] (Element)`**

**Return**

* **`(number)`**

**Example**

```js
// The height of current document
pageHeight()

// The height of an element's content
pageHeight(document.getElementById('el1'))
```

## pageWidth

```js
pageWidth([el])
```

Return the width of an element's content, including content not visible on the screen due to overflow.

**Since**

0.13.0

**Arguments**

* **`[el] (Element)`**

**Return**

* **`(number)`**

**Example**

```js
// The width of current document
pageWidth()

// The width of an element's content
pageWidth(document.getElementById('el1'))
```

## pageX

```js
pageX(el)
```

Return the horizontal distance of an element to the left edge of the page.

**Since**

0.1.0

**Arguments**

* **`el (Element)`**

**Return**

* **`(number)`**

**Example**

```js
const el = document.getElementById('el')
pageX(el)
```

## pageY

```js
pageY(el)
```

Return the vertical distance of an element to the left edge of the page.

**Since**

0.1.0

**Arguments**

* **`el (Element)`**

**Return**

* **`(number)`**

**Example**

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

Scroll the page or element to the target position.

**Since**

0.1.0

**Arguments**

* **`[x = 0] (number)`**
* **`[y = 0] (number)`**
* **`[elOrWindow = window] (Element | Window)`**
* **`[options] (ExScrollToOptions)`**
  + **`[x = 0] (number)`**
  + **`[y = 0] (number)`**
  + **`[easing] (string)`**: Similar to the CSS [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function). It is one of the `linear`/`ease`/`easeIn`/`easeInOut`/`easeOut`/`cubic-bezier(x1, y1, x2, y2)`.
  + **`[behavior] (string)`**: It is `smooth` or `auto`. See the [compatibility](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions).

**Example**

```js
// Scroll the page to (100, 100)
scroll(100, 100)

// Scroll the page to (100, 100) smoothly
scroll({ x: 100, y: 100, behavior: 'smooth' })

// Scroll the page to (100, 100) with an easing function
scroll({ x: 100, y: 100, easing: 'ease-out' })

// Scroll an element to (100, 100)
scroll(el, 100, 100)

// Scroll an element to (100, 100) smoothly
scroll(el, { x: 100, y: 100, behavior: 'smooth' })

// Scroll an element to (100, 100) with an easing function
scroll(el, { x: 100, y: 100, easing: 'ease-out' })
```

## scrollX

```js
scrollX([elOrWindow])
```

Get the horizontal scroll distance of an element or a window.

**Since**

0.1.0

**Arguments**

* **`[elOrWindow = window] (Element|Window)`**: An element or a window.

**Return**

* **`(number)`**

**Example**

```js
// Return the window scrollX if no argument is passed
scrollX();

const el = document.getElementById('el')
scrollX(el);
```

## scrolY

```js
scrollY([elOrWindow])
```

Get the horizontal scroll distance of an element or a window.

**Since**

0.1.0

**Arguments**

* **`[elOrWindow = window] (Element|Window)`**: An element or a window.

**Return**

* **`(number)`**

**Example**

```js
// Return the window scrollY if no argument is passed
scrollY();

const el = document.getElementById('el')
scrollY(el);
```

## viewport

```js
viewport([elOrWindow])
```

Get the width and height of the viewport of an element or a window.

**Since**

0.1.0

**Arguments**

* **`[elOrWindow = window] (Element|Window)`**: An element or a window.

**Return**

* **`(Object)`**

**Example**

```js
viewport();
// => { width: 1920, height: 900 }
```
