import { describe, expect, it } from 'vitest'
import isAbsolute from '../../src/url/isAbsolute'
import join from '../../src/url/join'
import parse from '../../src/url/parse'
import stringify from '../../src/url/stringify'
import index from '../../src/url/index'

describe('url/index', () => {
  it('should export the right bindings', () => {
    expect(index.isAbsolute).to.equal(isAbsolute)
    expect(index.join).to.equal(join)
    expect(index.parse).to.equal(parse)
    expect(index.stringify).to.equal(stringify)
  })
})
