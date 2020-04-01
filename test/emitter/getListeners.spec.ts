import { expect } from 'chai'
import globalEmitter from '../../src/emitter/util/globalEmitter'
import on from '../../src/emitter/on'
import getListeners from '../../src/emitter/getListeners'

describe('emitter/getListeners', () => {
  beforeEach(() => {
    globalEmitter['@events'] = {}
  })

  it('should return all listeners of the given event', () => {
    const fn1 = function (): void {}
    const fn2 = function (): void {}

    on('foo', fn1)
    on('bar', fn1)
    on('foo', fn2)

    const listeners = getListeners('foo')

    expect(listeners).to.deep.equal([fn1, fn2])
  })

  it('should return all listeners', () => {
    const fn1 = function (): void {}
    const fn2 = function (): void {}

    on('foo', fn1)
    on('bar', fn1)
    on('foo', fn2)

    const listeners = getListeners()

    expect(listeners).to.deep.equal([fn1, fn2, fn1])
  })

  it('should return an empty array when no listener for the event', () => {
    const fn = function (): void {}

    on('bar', fn)
    const listeners = getListeners('foo')

    expect(listeners).to.deep.equal([])
  })

  it('should return an empty array when no listener', () => {
    const listeners = getListeners()

    expect(listeners).to.deep.equal([])
  })
})
