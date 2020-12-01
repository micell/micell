import { expect } from 'chai'
import isAndroid from '../../src/ua/isAndroid'
import isIOS from '../../src/ua/isIOS'
import isIPad from '../../src/ua/isIPad'
import isIPhone from '../../src/ua/isIPhone'
import isLinux from '../../src/ua/isLinux'
import isMacOS from '../../src/ua/isMacOS'
import isMobile from '../../src/ua/isMobile'
import isTablet from '../../src/ua/isTablet'
import isWeChat from '../../src/ua/isWeChat'
import isWindows from '../../src/ua/isWindows'
import index from '../../src/ua/index'

describe('ua/index', () => {
  it('should export the right bindings', () => {
    expect(index.isAndroid).to.equal(isAndroid)
    expect(index.isIOS).to.equal(isIOS)
    expect(index.isIPad).to.equal(isIPad)
    expect(index.isIPhone).to.equal(isIPhone)
    expect(index.isLinux).to.equal(isLinux)
    expect(index.isMacOS).to.equal(isMacOS)
    expect(index.isMobile).to.equal(isMobile)
    expect(index.isTablet).to.equal(isTablet)
    expect(index.isWeChat).to.equal(isWeChat)
    expect(index.isWindows).to.equal(isWindows)
  })
})
