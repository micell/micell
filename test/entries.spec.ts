import { describe, expect, it } from 'vitest'
import base64 from '../src/base64'
import base64Entry from '../src/entries/base64'
import char from '../src/char'
import charEntry from '../src/entries/char'
import cookie from '../src/cookie'
import cookieEntry from '../src/entries/cookie'
import date from '../src/date'
import dateEntry from '../src/entries/date'
import dom from '../src/dom'
import domEntry from '../src/entries/dom'
import easing from '../src/easing'
import easingEntry from '../src/entries/easing'
import emitter from '../src/emitter'
import emitterEntry from '../src/entries/emitter'
import lang from '../src/lang'
import langEntry from '../src/entries/lang'
import path from '../src/path'
import pathEntry from '../src/entries/path'
import qs from '../src/qs'
import qsEntry from '../src/entries/qs'
import regex from '../src/regex'
import regexEntry from '../src/entries/regex'
import string from '../src/string'
import stringEntry from '../src/entries/string'
import ua from '../src/ua'
import uaEntry from '../src/entries/ua'
import url from '../src/url'
import urlEntry from '../src/entries/url'

// The subpath entry files are generated wrappers around each module's default
// export. If a module gains or loses a function without regenerating the
// wrapper, `micell/<module>` silently drifts from `micell` — these identity
// checks catch that.
describe('module entries', () => {
  it('should re-export the module default object by identity', () => {
    expect(base64Entry).to.equal(base64)
    expect(charEntry).to.equal(char)
    expect(cookieEntry).to.equal(cookie)
    expect(dateEntry).to.equal(date)
    expect(domEntry).to.equal(dom)
    expect(easingEntry).to.equal(easing)
    expect(emitterEntry).to.equal(emitter)
    expect(langEntry).to.equal(lang)
    expect(pathEntry).to.equal(path)
    expect(qsEntry).to.equal(qs)
    expect(regexEntry).to.equal(regex)
    expect(stringEntry).to.equal(string)
    expect(uaEntry).to.equal(ua)
    expect(urlEntry).to.equal(url)
  })
})
