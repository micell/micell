import { expect } from 'chai'
import isArray from '../../src/lang/isArray'

describe('lang/isArray', () => {
  it('should return true', () => {
    expect(isArray([])).to.equal(true)
  })

  it('should return false', () => {
    expect(isArray(new ArrayBuffer(1))).to.equal(false)
    expect(isArray({})).to.equal(false)
    expect(isArray(undefined)).to.equal(false)
    expect(isArray(null)).to.equal(false)
  })
})
