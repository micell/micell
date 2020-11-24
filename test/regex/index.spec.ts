import { expect } from 'chai'
import ascii from '../../src/regex/ascii'
import decimal from '../../src/regex/decimal'
import digit from '../../src/regex/digit'
import domain from '../../src/regex/domain'
import email from '../../src/regex/email'
import hexColor from '../../src/regex/hexColor'
import hsl from '../../src/regex/hsl'
import hsla from '../../src/regex/hsla'
import integer from '../../src/regex/integer'
import ipv4 from '../../src/regex/ipv4'
import ipv6 from '../../src/regex/ipv6'
import isAscii from '../../src/regex/isAscii'
import isDecimal from '../../src/regex/isDecimal'
import isDigit from '../../src/regex/isDigit'
import isDomain from '../../src/regex/isDomain'
import isEmail from '../../src/regex/isEmail'
import isHexColor from '../../src/regex/isHexColor'
import isHsl from '../../src/regex/isHsl'
import isHsla from '../../src/regex/isHsla'
import isIP from '../../src/regex/isIP'
import isIPv4 from '../../src/regex/isIPv4'
import isIPv6 from '../../src/regex/isIPv6'
import isInteger from '../../src/regex/isInteger'
import isQQ from '../../src/regex/isQQ'
import isRealNumber from '../../src/regex/isRealNumber'
import isRgb from '../../src/regex/isRgb'
import isRgba from '../../src/regex/isRgba'
import qq from '../../src/regex/qq'
import realNumber from '../../src/regex/realNumber'
import rgb from '../../src/regex/rgb'
import rgba from '../../src/regex/rgba'
import index from '../../src/regex/index'

describe('regex/index', () => {
  it('should export the right bindings', () => {
    expect(index.ascii).to.equal(ascii)
    expect(index.decimal).to.equal(decimal)
    expect(index.digit).to.equal(digit)
    expect(index.domain).to.equal(domain)
    expect(index.email).to.equal(email)
    expect(index.hexColor).to.equal(hexColor)
    expect(index.hsl).to.equal(hsl)
    expect(index.hsla).to.equal(hsla)
    expect(index.integer).to.equal(integer)
    expect(index.ipv4).to.equal(ipv4)
    expect(index.ipv6).to.equal(ipv6)
    expect(index.isAscii).to.equal(isAscii)
    expect(index.isDecimal).to.equal(isDecimal)
    expect(index.isDigit).to.equal(isDigit)
    expect(index.isDomain).to.equal(isDomain)
    expect(index.isEmail).to.equal(isEmail)
    expect(index.isHexColor).to.equal(isHexColor)
    expect(index.isHsl).to.equal(isHsl)
    expect(index.isHsla).to.equal(isHsla)
    expect(index.isIP).to.equal(isIP)
    expect(index.isIPv4).to.equal(isIPv4)
    expect(index.isIPv6).to.equal(isIPv6)
    expect(index.isInteger).to.equal(isInteger)
    expect(index.isQQ).to.equal(isQQ)
    expect(index.isRealNumber).to.equal(isRealNumber)
    expect(index.isRgb).to.equal(isRgb)
    expect(index.isRgba).to.equal(isRgba)
    expect(index.qq).to.equal(qq)
    expect(index.realNumber).to.equal(realNumber)
    expect(index.rgb).to.equal(rgb)
    expect(index.rgba).to.equal(rgba)
  })
})
