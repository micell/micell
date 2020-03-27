import { expect } from 'chai'
import isQQ from '../../src/regex/isQQ'

describe('regex/isQQ', () => {
  const qqStrings = [
    '10000',
    '123456789',
    '123456789012345'
  ]
  const notQqStrings = [
    '',
    '1234',
    '01234'
  ]

  it('should be a QQ string', () => {
    qqStrings.forEach((str) => {
      expect(isQQ(str)).to.equal(true)
    })
  })

  it('should not be a QQ string', () => {
    notQqStrings.forEach((str) => {
      expect(isQQ(str)).to.equal(false)
    })
  })
})
