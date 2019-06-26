import isDigit from '../../src/char/isDigit'

describe('char/isDigit', () => {
  const chars = []

  before(() => {
    for (let i = 48; i <= 57; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every(ch => isDigit(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    expect(isDigit({})).to.equal(false)
    expect(isDigit('')).to.equal(false)
    expect(isDigit(null)).to.equal(false)
    expect(isDigit(undefined)).to.equal(false)
  })
})
