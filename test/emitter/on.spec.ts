import { describe, beforeEach, expect, it } from 'vitest'
import { Events } from '../../src/emitter/types'
import globalEmitter from '../../src/emitter/util/globalEmitter'
import on from '../../src/emitter/on'
import emit from '../../src/emitter/emit'

describe('emitter/on', () => {
  beforeEach(() => {
    globalEmitter['@events'] = {} as Events
  })

  it('should add listeners', () => {
    const calls: any[] = []

    on('foo', function (val: number) {
      calls.push('one', val)
    })

    on('foo', function (val: number) {
      calls.push('two', val)
    })

    emit('foo', 1)
    emit('bar', 1)
    emit('foo', 2)

    expect(calls).to.deep.equal(['one', 1, 'two', 1, 'one', 2, 'two', 2])
  })
})
