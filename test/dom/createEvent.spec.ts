import { describe, beforeEach, expect, it } from 'vitest'
import createEvent from '../../src/dom/createEvent'

describe('createEvent', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
</head>
<body>
  <div id="container">
    <div id="el1"></div>
  </div>
</body>
</html>

`
  })

  it('should return an event object', () => {
    const event = createEvent('click')
    expect(event).to.be.instanceof(Event)
    expect(event.type).to.equal('click')
    expect(event.bubbles).to.equal(false)
    expect(event.cancelable).to.equal(false)
    expect(event.detail).to.equal(null)
  })

  it('should be dispatched normallly', () => {
    const el = document.getElementById('el1')
    if (el === null) {
      expect.fail('element is not exist')
      return
    }
    let called = true
    const listener = (): void => {
      called = true
    }
    el.addEventListener('click', listener)

    const event = createEvent('click')
    el.dispatchEvent(event)
    expect(called).to.equal(true)

    el.removeEventListener('click', listener)
  })

  it('should not be bubbles', () => {
    const container = document.getElementById('container')
    const el = document.getElementById('el1')

    if (container === null) {
      expect.fail('element is not exist')
      return
    }
    if (el === null) {
      expect.fail('element is not exist')
      return
    }

    let called = false
    const listener = (): void => {
      called = true
    }
    container.addEventListener('click', listener)
    const event = createEvent('click')
    el.dispatchEvent(event)
    expect(called).to.equal(false)

    container.removeEventListener('click', listener)
  })

  it('should be bubbled up to container', () => {
    const container = document.getElementById('container')
    const el = document.getElementById('el1')

    if (container === null) {
      expect.fail('element is not exist')
      return
    }
    if (el === null) {
      expect.fail('element is not exist')
      return
    }

    let called = false
    const listener = (): void => {
      called = true
    }
    container.addEventListener('click', listener)
    const event = createEvent('click', { bubbles: true })
    el.dispatchEvent(event)
    expect(called).to.equal(true)

    container.removeEventListener('click', listener)
  })

  it('should be prevented', () => {
    const el = document.getElementById('el1')

    if (el === null) {
      expect.fail('element is not exist')
      return
    }

    let called = false
    const listener = (e: Event): void => {
      called = true
      expect(e.cancelable).to.equal(true)
    }
    el.addEventListener('click', listener)
    const event = createEvent('click', { cancelable: true })
    el.dispatchEvent(event)
    expect(called).to.equal(true)

    el.removeEventListener('click', listener)
  })

  it('should be the specified value if the `options.detail` option is passed', () => {
    const el = document.getElementById('el1')

    if (el === null) {
      expect.fail('element is not exist')
      return
    }

    const detail = { foo: 1 }
    let called = true
    const listener = (e: Event): void => {
      called = true
      expect((e as CustomEvent).detail).to.deep.equal(detail)
    }
    el.addEventListener('click', listener)

    const event = createEvent('click', { detail })
    el.dispatchEvent(event)
    expect(called).to.equal(true)

    el.removeEventListener('click', listener)
  })
})
