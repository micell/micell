import { expect } from 'chai'
import * as allBase64 from '../src/base64'
import * as allChar from '../src/char'
import * as allCookie from '../src/cookie'
import * as allDate from '../src/date'
import * as allDom from '../src/dom'
import * as allEasing from '../src/easing'
import * as allEmitter from '../src/emitter'
import * as allLang from '../src/lang'
import * as allPath from '../src/path'
import * as allQs from '../src/qs'
import * as allRegex from '../src/regex'
import * as allString from '../src/string'
import * as allUa from '../src/ua'
import * as allUrl from '../src/url'

import { default as ajaxAlias } from '../src/ajax'
import { default as classNamesAlias } from '../src/classNames'
import { default as cssAlias } from '../src/css'
import { default as delayAlias } from '../src/delay'
import { default as jsonpAlias } from '../src/jsonp'
import { default as md5Alias } from '../src/md5'
import { default as noopAlias } from '../src/noop'
import { default as numberFormatAlias } from '../src/numberFormat'
import { default as rafAlias } from '../src/raf'
import { default as randomNumbersAlias } from '../src/randomNumbers'
import { default as randomStringAlias } from '../src/randomString'
import { default as uuidAlias } from '../src/uuid'
import index from '../src'

describe('index', () => {
  it('should export the right bindings', () => {
    expect(index.ajax).to.equal(ajaxAlias)
    expect(index.classNames).to.equal(classNamesAlias)
    expect(index.css).to.equal(cssAlias)
    expect(index.delay).to.equal(delayAlias)
    expect(index.jsonp).to.equal(jsonpAlias)
    expect(index.md5).to.equal(md5Alias)
    expect(index.noop).to.equal(noopAlias)
    expect(index.numberFormat).to.equal(numberFormatAlias)
    expect(index.raf).to.equal(rafAlias)
    expect(index.randomNumbers).to.equal(randomNumbersAlias)
    expect(index.randomString).to.equal(randomStringAlias)
    expect(index.uuid).to.equal(uuidAlias)

    expect(index.base64.decode).to.equal(allBase64.default.decode)
    expect(index.base64.decodeFile).to.equal(allBase64.default.decodeFile)
    expect(index.base64.encode).to.equal(allBase64.default.encode)
    expect(index.base64.encodeFile).to.equal(allBase64.default.encodeFile)

    expect(index.char.isAlphabetic).to.equal(allChar.default.isAlphabetic)
    expect(index.char.isAlphanumeric).to.equal(allChar.default.isAlphanumeric)
    expect(index.char.isASCII).to.equal(allChar.default.isASCII)
    expect(index.char.isCJK).to.equal(allChar.default.isCJK)
    expect(index.char.isControl).to.equal(allChar.default.isControl)
    expect(index.char.isDigit).to.equal(allChar.default.isDigit)
    expect(index.char.isGraph).to.equal(allChar.default.isGraph)
    expect(index.char.isHexadecimal).to.equal(allChar.default.isHexadecimal)
    expect(index.char.isLower).to.equal(allChar.default.isLower)
    expect(index.char.isPrint).to.equal(allChar.default.isPrint)
    expect(index.char.isPunctuation).to.equal(allChar.default.isPunctuation)
    expect(index.char.isSpace).to.equal(allChar.default.isSpace)
    expect(index.char.isUpper).to.equal(allChar.default.isUpper)

    expect(index.cookie.get).to.equal(allCookie.default.get)
    expect(index.cookie.getAll).to.equal(allCookie.default.getAll)
    expect(index.cookie.getJson).to.equal(allCookie.default.getJson)
    expect(index.cookie.getRaw).to.equal(allCookie.default.getRaw)
    expect(index.cookie.isEnabled).to.equal(allCookie.default.isEnabled)
    expect(index.cookie.remove).to.equal(allCookie.default.remove)
    expect(index.cookie.set).to.equal(allCookie.default.set)
    expect(index.cookie.setJson).to.equal(allCookie.default.setJson)
    expect(index.cookie.setRaw).to.equal(allCookie.default.setRaw)

    expect(index.date.diff).to.equal(allDate.default.diff)
    expect(index.date.format).to.equal(allDate.default.format)
    expect(index.date.timeAgo).to.equal(allDate.default.timeAgo)

    expect(index.dom.clientX).to.equal(allDom.default.clientX)
    expect(index.dom.clientY).to.equal(allDom.default.clientY)
    expect(index.dom.createEvent).to.equal(allDom.default.createEvent)
    expect(index.dom.domReady).to.equal(allDom.default.domReady)
    expect(index.dom.insertScript).to.equal(allDom.default.insertScript)
    expect(index.dom.isElement).to.equal(allDom.default.isElement)
    expect(index.dom.isInViewport).to.equal(allDom.default.isInViewport)
    expect(index.dom.isWindow).to.equal(allDom.default.isWindow)
    expect(index.dom.pageX).to.equal(allDom.default.pageX)
    expect(index.dom.pageY).to.equal(allDom.default.pageY)
    expect(index.dom.scrollTo).to.equal(allDom.default.scrollTo)
    expect(index.dom.scrollX).to.equal(allDom.default.scrollX)
    expect(index.dom.scrollY).to.equal(allDom.default.scrollY)
    expect(index.dom.viewport).to.equal(allDom.default.viewport)

    expect(index.easing.cubicBezier).to.equal(allEasing.default.cubicBezier)
    expect(index.easing.ease).to.equal(allEasing.default.ease)
    expect(index.easing.easeIn).to.equal(allEasing.default.easeIn)
    expect(index.easing.easeInOut).to.equal(allEasing.default.easeInOut)
    expect(index.easing.easeOut).to.equal(allEasing.default.easeOut)
    expect(index.easing.linear).to.equal(allEasing.default.linear)

    expect(index.emitter.create).to.equal(allEmitter.default.create)
    expect(index.emitter.emit).to.equal(allEmitter.default.emit)
    expect(index.emitter.Emitter).to.equal(allEmitter.default.Emitter)
    expect(index.emitter.getListeners).to.equal(allEmitter.default.getListeners)
    expect(index.emitter.once).to.equal(allEmitter.default.once)
    expect(index.emitter.on).to.equal(allEmitter.default.on)
    expect(index.emitter.off).to.equal(allEmitter.default.off)

    expect(index.lang.isArray).to.equal(allLang.default.isArray)
    expect(index.lang.isBoolean).to.equal(allLang.default.isBoolean)
    expect(index.lang.isDate).to.equal(allLang.default.isDate)
    expect(index.lang.isError).to.equal(allLang.default.isError)
    expect(index.lang.isFunction).to.equal(allLang.default.isFunction)
    expect(index.lang.isNil).to.equal(allLang.default.isNil)
    expect(index.lang.isNull).to.equal(allLang.default.isNull)
    expect(index.lang.isNumber).to.equal(allLang.default.isNumber)
    expect(index.lang.isObject).to.equal(allLang.default.isObject)
    expect(index.lang.isRegExp).to.equal(allLang.default.isRegExp)
    expect(index.lang.isString).to.equal(allLang.default.isString)
    expect(index.lang.isUndefined).to.equal(allLang.default.isUndefined)

    expect(index.path.basename).to.equal(allPath.default.basename)
    expect(index.path.dirname).to.equal(allPath.default.dirname)
    expect(index.path.extname).to.equal(allPath.default.extname)
    expect(index.path.join).to.equal(allPath.default.join)

    expect(index.qs.get).to.equal(allQs.default.get)
    expect(index.qs.parse).to.equal(allQs.default.parse)
    expect(index.qs.stringify).to.equal(allQs.default.stringify)

    expect(index.regex.ascii).to.equal(allRegex.default.ascii)
    expect(index.regex.decimal).to.equal(allRegex.default.decimal)
    expect(index.regex.digit).to.equal(allRegex.default.digit)
    expect(index.regex.domain).to.equal(allRegex.default.domain)
    expect(index.regex.email).to.equal(allRegex.default.email)
    expect(index.regex.hexColor).to.equal(allRegex.default.hexColor)
    expect(index.regex.hsl).to.equal(allRegex.default.hsl)
    expect(index.regex.hsla).to.equal(allRegex.default.hsla)
    expect(index.regex.integer).to.equal(allRegex.default.integer)
    expect(index.regex.ipv4).to.equal(allRegex.default.ipv4)
    expect(index.regex.ipv6).to.equal(allRegex.default.ipv6)
    expect(index.regex.isAscii).to.equal(allRegex.default.isAscii)
    expect(index.regex.isDecimal).to.equal(allRegex.default.isDecimal)
    expect(index.regex.isDigit).to.equal(allRegex.default.isDigit)
    expect(index.regex.isDomain).to.equal(allRegex.default.isDomain)
    expect(index.regex.isEmail).to.equal(allRegex.default.isEmail)
    expect(index.regex.isHexColor).to.equal(allRegex.default.isHexColor)
    expect(index.regex.isHsl).to.equal(allRegex.default.isHsl)
    expect(index.regex.isHsla).to.equal(allRegex.default.isHsla)
    expect(index.regex.isIP).to.equal(allRegex.default.isIP)
    expect(index.regex.isIPv4).to.equal(allRegex.default.isIPv4)
    expect(index.regex.isIPv6).to.equal(allRegex.default.isIPv6)
    expect(index.regex.isInteger).to.equal(allRegex.default.isInteger)
    expect(index.regex.isQQ).to.equal(allRegex.default.isQQ)
    expect(index.regex.isRealNumber).to.equal(allRegex.default.isRealNumber)
    expect(index.regex.isRgb).to.equal(allRegex.default.isRgb)
    expect(index.regex.isRgba).to.equal(allRegex.default.isRgba)
    expect(index.regex.qq).to.equal(allRegex.default.qq)
    expect(index.regex.realNumber).to.equal(allRegex.default.realNumber)
    expect(index.regex.rgb).to.equal(allRegex.default.rgb)
    expect(index.regex.rgba).to.equal(allRegex.default.rgba)

    expect(index.string.countChars).to.equal(allString.default.countChars)
    expect(index.string.countLines).to.equal(allString.default.countLines)
    expect(index.string.escapeRegexp).to.equal(allString.default.escapeRegexp)
    expect(index.string.firstChar).to.equal(allString.default.firstChar)
    expect(index.string.isValidJSON).to.equal(allString.default.isValidJSON)
    expect(index.string.lastChar).to.equal(allString.default.lastChar)
    expect(index.string.truncate).to.equal(allString.default.truncate)

    expect(index.url.isAbsolute).to.equal(allUrl.default.isAbsolute)
    expect(index.url.join).to.equal(allUrl.default.join)
    expect(index.url.parse).to.equal(allUrl.default.parse)
    expect(index.url.stringify).to.equal(allUrl.default.stringify)

    expect(index.ua.isAndroid).to.equal(allUa.default.isAndroid)
    expect(index.ua.isIOS).to.equal(allUa.default.isIOS)
    expect(index.ua.isIPad).to.equal(allUa.default.isIPad)
    expect(index.ua.isIPhone).to.equal(allUa.default.isIPhone)
    expect(index.ua.isLinux).to.equal(allUa.default.isLinux)
    expect(index.ua.isMacOS).to.equal(allUa.default.isMacOS)
    expect(index.ua.isMobile).to.equal(allUa.default.isMobile)
    expect(index.ua.isTablet).to.equal(allUa.default.isTablet)
    expect(index.ua.isWeChat).to.equal(allUa.default.isWeChat)
    expect(index.ua.isWindows).to.equal(allUa.default.isWindows)
  })
})
