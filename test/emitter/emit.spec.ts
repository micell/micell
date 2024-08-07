import { describe, beforeEach, expect, it } from 'vitest'
import globalEmitter from '../../src/emitter/util/globalEmitter'
import on from '../../src/emitter/on'
import emit from '../../src/emitter/emit'

describe('emitter/emit', () => {
  beforeEach(() => {
    globalEmitter['@events'] = {}
  })

  it('should emit an event', () => {
    const calls: any[] = []

    on('foo', function () {
      calls.push('one')
    })
    emit('foo', 1)

    expect(calls).to.deep.equal(['one'])
  })

  it('should pass some parameters', () => {
    let calls: any[] = []

    on('foo', function (...args) {
      calls = calls.concat(args)
    })
    emit('foo', 1, false, 'hello')

    expect(calls).to.deep.equal([1, false, 'hello'])
  })
})
