import { expect } from 'chai'
import isAlipay from '../../src/ua/isAlipay'

describe('ua/isAlipay', () => {
  it('should return true', () => {
    // Ref: https://myjsapi.alipay.com/jsapi/index.html#3_navigator_userAgent
    const ua =
      'Mozilla/5.0......AlipayDefined(nt:WIFI,ws:320|504|2.0) AliApp(AP/9.6.0.000001) AlipayClient/9.6.0.000001 Language/zh-Hans ProductType/dev'
    expect(isAlipay(ua)).to.equal(true)
  })
})
