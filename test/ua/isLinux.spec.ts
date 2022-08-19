import { expect } from 'chai'
import isLinux from '../../src/ua/isLinux'

describe('ua/isLinux', () => {
  it('should return true', () => {
    const ua =
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.11 (KHTML, like Gecko) Ubuntu/11.10 Chromium/27.0.1453.93 Chrome/27.0.1453.93 Safari/537.36'
    expect(isLinux(ua)).to.equal(true)
  })
})
