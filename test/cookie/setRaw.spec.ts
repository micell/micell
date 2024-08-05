import { describe, expect, it } from 'vitest'
import getRaw from '../../src/cookie/getRaw'
import setRaw from '../../src/cookie/setRaw'

describe('cookie/setRaw', () => {
  it('should return the value without encoding', () => {
    const key = 'withoutEncoding'
    const value = 'https://github.com'
    setRaw(key, value)
    expect(getRaw(key)).to.equal(value)
  })
})
