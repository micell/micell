# emitter

你可以使用`micell.emitter.create()`创建一个`Emitter`实例对象，每一个 Emitter 实例对象都有下面的方法：

* `emit`
* `getListeners`
* `off`
* `on`
* `once`

`micell.emitter`如同一个全局的 Emitter 实例对象，也具有上面的方法，即下面的函数实际上是调用的一个全局 Emitter 实例对象对应的方法。

* `micell.emitter.emit`
* `micell.emitter.getListeners`
* `micell.emitter.off`
* `micell.emitter.on`
* `micell.emitter.once`

## Emitter

```js
new Emitter()
```

Emitter 构造函数，不过推荐使用`create()`方法创建 Emitter 实例。

**起始版本**

0.5.0

**返回值**

* **`(Emitter)`**

## create

```js
create()
```

创建一个 Emitter 实例。

**起始版本**

0.5.0

**返回值**

* **`(Emitter)`**

**示例**

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

**起始版本**

0.5.0

**参数**

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

获取事件`type`的所有监听器函数或者所有事件的所有监听器函数。

**起始版本**

0.5.0

**参数**

* **`[type (string)]`**

**返回值**

* **`(Array<Listener>)`**

**示例**

```js
micell.emitter.on('foo', () => console.log('foo 1'))
micell.emitter.on('bar', () => console.log('bar 1'))
micell.emitter.on('foo', () => console.log('foo 2'))

// 事件 'foo' 对应的所有监听器函数
micell.emitter.getListeners('foo')

// 所有事件的所有监听器函数
micell.emitter.getListeners()
```

## off

```js
off(type, listener)
```

* 如果参数为空，则所有事件的所有监听器函数都被移除。
* 如果只传入了`type`参数，则`type`事件对应的所有监听器函数都被移除。
* 如果`type`和`listener`参数都传入了，则`type`事件对应的所有`listener`监听器函数会被移除。

**起始版本**

0.5.0

**参数**

* **`[type (string)]`**
* **`[listener (function)]`**

**示例**

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

绑定一个监听器函数`listener`。

**起始版本**

0.5.0

**参数**

* **`[type (string)]`**
* **`[listener (function)]`**

## once

```js
once(type, listener)
```

和`on`方法一样，绑定一个监听器函数`listener`，但是监听器函数只会被执行一次。

**参数**

* **`[type (string)]`**
* **`[listener (function)]`**
