import { expect } from 'chai'
import isAndroid from '../../src/ua/isAndroid'

describe('ua/isAndroid', () => {
  it('should return true', () => {
    const ua =
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Mobile Safari/537.36'
    expect(isAndroid(ua)).to.equal(true)
  })
})
