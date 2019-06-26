import isDate from '../../src/lang/isDate'

describe('lang/isDate', () => {
  it('should return true', () => {
    expect(isDate(new Date())).to.equal(true)
  })

  it('should return false', () => {
    expect(isDate({})).to.equal(false)
    expect(isDate(0)).to.equal(false)
    expect(isDate('')).to.equal(false)
  })
})
