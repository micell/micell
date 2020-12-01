import { expect } from 'chai'
import isIOS from '../../src/ua/isIOS'

describe('ua/isIOS', () => {
  it('should return true', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    expect(isIOS(ua)).to.equal(true)
  })
})
