# emitter

You can use `micell.emitter.create()` to create an Emitter instance. And, every Emitter instance has the below methods:

* `emit`
* `getListeners`
* `off`
* `on`
* `once`

The `micell.emitter` can be used as a global Emitter instance. That is, the below functions
are the methods of the global emitter.

* `micell.emitter.emit`
* `micell.emitter.getListeners`
* `micell.emitter.off`
* `micell.emitter.on`
* `micell.emitter.once`

## Emitter

```js
new Emitter()
```

The Emitter constructor. Recommend to use the below `create()` method to create an Emitter instance.

**Since**

0.5.0

**Return**

* **`(Emitter)`**

## create

```js
create()
```

Create an Emitter instance.

**Since**

0.5.0

**Return**

* **`(Emitter)`**

**Example**

```js
const emitter = create()
emitter.on('foo', () => console.log('foo'))
emitter.emit('foo')
// => 'foo'
```

## emit

```js
emit(type, [arg1], [arg2], ...)
```

**Since**

0.5.0

**Arguments**

* **`type (string)`**
* **`[argN] (any)`**

```js
micell.emitter.on('foo', (...args) => console.log(args))
micell.emitter.emit('foo', 1, 2, 3)
// => [1, 2, 3]
```

## getListeners

```js
getListeners(type)
```

Return the given type listeners or all listeners.

**Since**

0.5.0

**Arguments**

* **`[type (string)]`**

**Return**

* **`(Array<Listener>)`**

**Example**

```js
micell.emitter.on('foo', () => console.log('foo 1'))
micell.emitter.on('bar', () => console.log('bar 1'))
micell.emitter.on('foo', () => console.log('foo 2'))

// All listeners for 'foo'
micell.emitter.getListeners('foo')

// All listeners
micell.emitter.getListeners()
```

## off

```js
off(type, listener)
```

* If nothing is passed, all listeners will be removed.
* If only the `type` parameter is passed, the given type listeners will be removed.
* If the `type` and `listener` are passed, then all the `listener`s of the `type` will be removed.

**Since**

0.5.0

**Arguments**

* **`[type (string)]`**
* **`[listener (function)]`**

**Example**

```js
const fn1 = () => console.log(1)
const fn2 = () => console.log(2)

micell.emitter.on('foo', fn1)
micell.emitter.on('bar', fn1)
micell.emitter.on('foo', fn2)

micell.emitter.off('foo', fn1)
micell.emitter.off('foo')
micell.emitter.off()
```

## on

```js
on(type, listener)
```

Attach a listener to the emitter.

**Since**

0.5.0

**Arguments**

* **`[type (string)]`**
* **`[listener (function)]`**

## once

```js
once(type, listener)
```

Same as `on`, attach a listener to the emitter but the listener will be triggered once.

**Since**

0.5.0

**Arguments**

* **`[type (string)]`**
* **`[listener (function)]`**
