import { expect } from 'chai'
import isType from '../../../src/ua/util/isType'

describe('ua/util/isType', () => {
  it('should return true', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Mobile Safari/537.36'
    const isAndroid = isType('Android')
    expect(isAndroid(ua)).to.equal(true)
  })

  it('should use the navigator.userAgent if no argument', () => {
    const ua = navigator.userAgent
    const result = /Android/.test(ua)
    const isAndriod = isType('Android')
    expect(isAndriod()).to.equal(result)
  })
})
