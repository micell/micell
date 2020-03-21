import isDecimal from '../../src/regex/isDecimal'

describe('regex/isDecimal', () => {
  const decimalStrings = [
    '0',
    '1',
    '123',
    '0123',
    '+1',
    '-1',
    '1.',
    '1.1',
    '.1',
    '0.123'
  ]
  const notDecimalStrings = [
    'a',
    '+',
    '-',
    '1.1.',
    '.',
    '1..1'
  ]

  it('should be a decimal string', () => {
    decimalStrings.forEach((str) => {
      expect(isDecimal(str)).to.equal(true)
    })
  })

  it('should not be a decimal string', () => {
    notDecimalStrings.forEach((str) => {
      expect(isDecimal(str)).to.equal(false)
    })
  })
})
