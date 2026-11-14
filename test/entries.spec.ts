import { describe, expect, it } from 'vitest'
import base64 from '../src/base64'
import * as base64Entry from '../src/entries/base64'
import char from '../src/char'
import * as charEntry from '../src/entries/char'
import cookie from '../src/cookie'
import * as cookieEntry from '../src/entries/cookie'
import date from '../src/date'
import * as dateEntry from '../src/entries/date'
import dom from '../src/dom'
import * as domEntry from '../src/entries/dom'
import easing from '../src/easing'
import * as easingEntry from '../src/entries/easing'
import emitter from '../src/emitter'
import * as emitterEntry from '../src/entries/emitter'
import lang from '../src/lang'
import * as langEntry from '../src/entries/lang'
import path from '../src/path'
import * as pathEntry from '../src/entries/path'
import qs from '../src/qs'
import * as qsEntry from '../src/entries/qs'
import regex from '../src/regex'
import * as regexEntry from '../src/entries/regex'
import string from '../src/string'
import * as stringEntry from '../src/entries/string'
import ua from '../src/ua'
import * as uaEntry from '../src/entries/ua'
import url from '../src/url'
import * as urlEntry from '../src/entries/url'

/** The runtime named exports of a module entry, excluding `default`. */
function namedKeys(entry: object): string[] {
  return Object.keys(entry)
    .filter((key) => key !== 'default')
    .sort()
}

// The subpath entry files are generated wrappers around each module's default
// export. A wrapper that misses a function leaves `micell/<module>` exporting
// `undefined` while the default object still looks fine, so compare the named
// export keys with the default object's keys.
describe('module entries', () => {
  it('should re-export every module member by name', () => {
    expect(namedKeys(base64Entry)).toEqual(Object.keys(base64).sort())
    expect(namedKeys(charEntry)).toEqual(Object.keys(char).sort())
    expect(namedKeys(cookieEntry)).toEqual(Object.keys(cookie).sort())
    expect(namedKeys(dateEntry)).toEqual(Object.keys(date).sort())
    expect(namedKeys(domEntry)).toEqual(Object.keys(dom).sort())
    expect(namedKeys(easingEntry)).toEqual(Object.keys(easing).sort())
    expect(namedKeys(emitterEntry)).toEqual(Object.keys(emitter).sort())
    expect(namedKeys(langEntry)).toEqual(Object.keys(lang).sort())
    expect(namedKeys(pathEntry)).toEqual(Object.keys(path).sort())
    expect(namedKeys(qsEntry)).toEqual(Object.keys(qs).sort())
    expect(namedKeys(regexEntry)).toEqual(Object.keys(regex).sort())
    expect(namedKeys(stringEntry)).toEqual(Object.keys(string).sort())
    expect(namedKeys(uaEntry)).toEqual(Object.keys(ua).sort())
    expect(namedKeys(urlEntry)).toEqual(Object.keys(url).sort())
  })

  it('should keep the default export identical to the module default', () => {
    expect(base64Entry.default).to.equal(base64)
    expect(charEntry.default).to.equal(char)
    expect(cookieEntry.default).to.equal(cookie)
    expect(dateEntry.default).to.equal(date)
    expect(domEntry.default).to.equal(dom)
    expect(easingEntry.default).to.equal(easing)
    expect(emitterEntry.default).to.equal(emitter)
    expect(langEntry.default).to.equal(lang)
    expect(pathEntry.default).to.equal(path)
    expect(qsEntry.default).to.equal(qs)
    expect(regexEntry.default).to.equal(regex)
    expect(stringEntry.default).to.equal(string)
    expect(uaEntry.default).to.equal(ua)
    expect(urlEntry.default).to.equal(url)
  })
})
