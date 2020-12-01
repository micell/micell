import { expect } from 'chai'
import isWindows from '../../src/ua/isWindows'

describe('ua/isWindows', () => {
  it('should return true', () => {
    const ua = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.94 Safari/537.36'
    expect(isWindows(ua)).to.equal(true)
  })
})
