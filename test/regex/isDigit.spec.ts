import { expect } from 'chai'
import isDigit from '../../src/regex/isDigit'

describe('regex/isDigit', () => {
  const digitStrings = [
    '0',
    '1',
    '123',
    '0123'
  ]
  const notDigitStrings = [
    'a',
    ' ',
    '0a'
  ]

  it('should be a digit string', () => {
    digitStrings.forEach((str) => {
      expect(isDigit(str)).to.equal(true)
    })
  })

  it('should not be a digit string', () => {
    notDigitStrings.forEach((str) => {
      expect(isDigit(str)).to.equal(false)
    })
  })
})
