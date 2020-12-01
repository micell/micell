import { expect } from 'chai'
import isIPad from '../../src/ua/isIPad'

describe('ua/isIPad', () => {
  it('should return true', () => {
    const ua = 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1'
    expect(isIPad(ua)).to.equal(true)
  })
})
