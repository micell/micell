import { describe, expect, it } from 'vitest'
import getRaw from '../../src/cookie/getRaw'

describe('cookie/getRaw', () => {
  it('should return the value without decoding', () => {
    const key = 'withoutDecoding'
    const value = encodeURIComponent('https://github.com/Alex1990/micellar')
    document.cookie = key + '=' + value
    expect(getRaw(key)).to.equal(value)
  })
})
