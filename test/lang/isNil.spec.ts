import { expect } from 'chai'
import isNil from '../../src/lang/isNil'

describe('lang/isNil', () => {
  it('should return true', () => {
    expect(isNil(undefined)).to.equal(true)
    expect(isNil(null)).to.equal(true)
  })

  it('should return false', () => {
    expect(isNil({})).to.equal(false)
    expect(isNil(0)).to.equal(false)
    expect(isNil('')).to.equal(false)
    expect(isNil(false)).to.equal(false)
  })
})
