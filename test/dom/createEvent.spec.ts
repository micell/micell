import { expect } from 'chai'
import createEvent from '../../src/dom/createEvent'

describe('createEvent', () => {
  before((done) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      window.__FIXTURES__['test/fixtures/dom/createEvent.html']
    done()
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
