import { expect } from 'chai'
import isTablet from '../../src/ua/isTablet'

describe('ua/isTablet', () => {
  it('should return true', () => {
    const uaList = [
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    ]
    for (const ua of uaList) {
      expect(isTablet(ua)).to.equal(true)
    }
  })
})
