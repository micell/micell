import { describe, expect, it } from 'vitest'
import get from '../../src/qs/get'
import parse from '../../src/qs/parse'
import stringify from '../../src/qs/stringify'
import index from '../../src/qs/index'

describe('qs/index', () => {
  it('should export the right bindings', () => {
    expect(index.get).to.equal(get)
    expect(index.parse).to.equal(parse)
    expect(index.stringify).to.equal(stringify)
  })
})
