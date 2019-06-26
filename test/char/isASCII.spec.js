import isASCII from '../../src/char/isASCII'

describe('char/isASCII', () => {
  const asciiChars = []

  before(() => {
    for (let i = 0; i <= 127; i++) {
      asciiChars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = asciiChars.every(ch => isASCII(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    expect(isASCII({})).to.equal(false)
    expect(isASCII('')).to.equal(false)
    expect(isASCII(null)).to.equal(false)
    expect(isASCII(undefined)).to.equal(false)
  })
})
