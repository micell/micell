import { expect } from 'chai'
import isIPhone from '../../src/ua/isIPhone'

describe('ua/isIPhone', () => {
  it('should return true', () => {
    const ua =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    expect(isIPhone(ua)).to.equal(true)
  })
})
