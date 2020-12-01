import { expect } from 'chai'
import isWeChat from '../../src/ua/isWeChat'

describe('ua/isWeChat', () => {
  it('should return true', () => {
    const ua = 'Mozilla/5.0(Linux;U;Android2.3.6;zh-cn;GT-S5660Build/GINGERBREAD)AppleWebKit/533.1(KHTML,likeGecko)Version/4.0MobileSafari/533.1MicroMessenger/4.5.255'
    expect(isWeChat(ua)).to.equal(true)
  })
})
