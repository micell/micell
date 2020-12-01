import { expect } from 'chai'
import isMacOS from '../../src/ua/isMacOS'

describe('ua/isMacOS', () => {
  it('should return true', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36'
    expect(isMacOS(ua)).to.equal(true)
  })
})
