import { expect } from 'chai'
import globalEmitter from '../../src/emitter/util/globalEmitter'
import on from '../../src/emitter/on'
import emit from '../../src/emitter/emit'

describe('emitter/emit', () => {
  beforeEach(() => {
    globalEmitter['@events'] = {}
  })

  it('should emit an event', () => {
    const calls = []

    on('foo', function () {
      calls.push('one')
    })
    emit('foo', 1)

    expect(calls).to.deep.equal(['one'])
  })

  it('should pass some parameters', () => {
    let calls = []

    on('foo', function () {
      calls = calls.concat(Array.prototype.slice.call(arguments))
    })
    emit('foo', 1, false, 'hello')

    expect(calls).to.deep.equal([1, false, 'hello'])
  })
})
