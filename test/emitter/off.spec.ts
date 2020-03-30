import { expect } from 'chai'
import { Events } from '../../src/emitter/types'
import globalEmitter from '../../src/emitter/util/globalEmitter'
import off from '../../src/emitter/off'
import on from '../../src/emitter/on'
import emit from '../../src/emitter/emit'

describe('emitter/off', () => {
  beforeEach(() => {
    globalEmitter['@events'] = {} as Events
  })

  it('should remove specified listener(s) of the given event type', () => {
    const calls: any[] = []
    const fn1 = function () {
      calls.push(1)
    }
    const fn2 = function () {
      calls.push(2)
    }

    on('foo', fn1)
    on('foo', fn2)
    on('foo', fn1)

    emit('foo')

    off('foo', fn1)
    emit('foo')

    expect(calls).to.deep.equal([1, 2, 1, 2])
  })

  it('should remove all listeners of the given event type', () => {
    const calls: any[] = []
    const fn1 = function () {
      calls.push(1)
    }
    const fn2 = function () {
      calls.push(2)
    }

    on('foo', fn1)
    on('foo', fn2)
    on('bar', fn1)

    emit('foo')
    emit('bar')

    off('foo')

    emit('foo')
    emit('bar')

    expect(calls).to.deep.equal([1, 2, 1, 1])
  })

  it('should remove all listeners for all event type', () => {
    const calls: any[] = []
    const fn1 = function () {
      calls.push(1)
    }
    const fn2 = function () {
      calls.push(2)
    }

    on('foo', fn1)
    on('foo', fn2)
    on('bar', fn1)

    emit('foo')
    emit('bar')

    off()

    emit('foo')
    emit('bar')

    expect(calls).to.deep.equal([1, 2, 1])
  })
})
