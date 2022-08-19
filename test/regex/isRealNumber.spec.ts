import { expect } from 'chai'
import isRealNumber from '../../src/regex/isRealNumber'

describe('regex/isRealNumber', () => {
  const realNumberStrings = [
    '0',
    '1',
    '0.1',
    '.1',
    '+1.1',
    '-1.12',
    '-1.1e5',
    '-.1E-5',
    '+.1E+5',
  ]
  const notRealNumberStrings = ['', '1..1', '..1', '1.1.', '1e1.1']

  it('should be a real number string', () => {
    realNumberStrings.forEach((str) => {
      expect(isRealNumber(str)).to.equal(true)
    })
  })

  it('should not be a real number string', () => {
    notRealNumberStrings.forEach((str) => {
      expect(isRealNumber(str)).to.equal(false)
    })
  })
})
