import isNull from '../../src/lang/isNull'

describe('lang/isNull', () => {
  it('should return true', () => {
    expect(isNull(null)).to.equal(true)
  })

  it('should return false', () => {
    expect(isNull({})).to.equal(false)
    expect(isNull(0)).to.equal(false)
    expect(isNull('')).to.equal(false)
    expect(isNull(undefined)).to.equal(false)
  })
})
