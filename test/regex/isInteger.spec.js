import isInteger from '../../src/regex/isInteger'

describe('regex/isInteger', () => {
  const integerStrings = [
    '0',
    '1',
    '123',
    '0123'
  ]
  const notIntegerStrings = [
    'a',
    ' ',
    '0a'
  ]

  it('should be an integer string', () => {
    integerStrings.forEach((str) => {
      expect(isInteger(str)).to.equal(true)
    })
  })

  it('should not be an integer string', () => {
    notIntegerStrings.forEach((str) => {
      expect(isInteger(str)).to.equal(false)
    })
  })
})
