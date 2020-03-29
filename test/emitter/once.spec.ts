import { expect } from 'chai'
import globalEmitter from '../../src/emitter/util/globalEmitter'
import once from '../../src/emitter/once'
import emit from '../../src/emitter/emit'

describe('emitter/once', () => {
  beforeEach(() => {
    globalEmitter['@events'] = {}
  })

  it('should add a listener which is executed once', () => {
    const calls = []

    once('foo', function (val) {
      calls.push('one', val)
    })

    emit('foo', 1)
    emit('foo', 2)
    emit('bar', 1)

    expect(calls).to.deep.equal(['one', 1])
  })

  it('should not be executed when the listener is triggered in the listener', () => {
    const calls = []

    once('foo', function (val) {
      calls.push('one', val)
      emit('foo', 2)
    })

    emit('foo', 1)
    expect(calls).to.deep.equal(['one', 1])
  })

  it('should be executed one by one, but only once, when two listeners are bound', () => {
    const calls = []

    once('foo', function (val) {
      calls.push('one', val)
    })
    once('foo', function (val) {
      calls.push('two', val)
    })

    emit('foo', 1)
    emit('foo', 2)

    expect(calls).to.deep.equal(['one', 1, 'two', 1])
  })
})
