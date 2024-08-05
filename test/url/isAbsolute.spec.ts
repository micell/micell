import { describe, expect, it } from 'vitest'
import isAbsolute from '../../src/url/isAbsolute'

describe('url/isAbsolute', () => {
  // TODO: unable to pass the type check
  // it('should return false if the 1st parameter is not a string', () => {
  //   expect(isAbsolute()).to.equal(false)
  //   expect(isAbsolute(1)).to.equal(false)
  //   expect(isAbsolute({})).to.equal(false)
  // })

  it('should return false if the 1st parameter is not an absolute url', () => {
    expect(isAbsolute('www.example.com')).to.equal(false)
    expect(isAbsolute('//www.example.com')).to.equal(false)
    expect(isAbsolute('/path/to/somewhere')).to.equal(false)
  })

  it('should return true if the 1st parameter is an absolute url', () => {
    expect(isAbsolute('http://example.com')).to.equal(true)
    expect(isAbsolute('https://example.com')).to.equal(true)
  })
})
