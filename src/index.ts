import * as allBase64 from './base64'
import * as allChar from './char'
import * as allCookie from './cookie'
import * as allDate from './date'
import * as allDom from './dom'
import * as allEasing from './easing'
import * as allEmitter from './emitter'
import * as allLang from './lang'
import * as allPath from './path'
import * as allQs from './qs'
import * as allRegex from './regex'
import * as allString from './string'
import * as allUa from './ua'
import * as allUrl from './url'

import * as allAjax from './ajax'
import * as allCss from './css'
import * as allJsonp from './jsonp'

import { default as ajaxAlias } from './ajax'
import { default as cssAlias } from './css'
import { default as delayAlias } from './delay'
import { default as jsonpAlias } from './jsonp'
import { default as md5Alias } from './md5'
import { default as noopAlias } from './noop'
import { default as numberFormatAlias } from './numberFormat'
import { default as rafAlias } from './raf'
import { default as randomNumbersAlias } from './randomNumbers'
import { default as randomStringAlias } from './randomString'
import { default as uuidAlias } from './uuid'

namespace micell {
  export type Base64DecodeOptions = allBase64.Base64DecodeOptions;

  export type CookieDecoder = allCookie.CookieDecoder;
  export type CookieEncoder = allCookie.CookieEncoder;
  export type CookieOptions = allCookie.CookieOptions;
  export type Cookies = allCookie.Cookies;

  export type TimeAgo = allDate.TimeAgoLocale;

  export type AnyFunction = allDom.AnyFunction;
  export type CreateEventOptions = allDom.CreateEventOptions;
  export type InsertScriptOptions = allDom.InsertScriptOptions;
  export type ScrollToOptions = allDom.ScrollToOptions;
  export type Viewport = allDom.Viewport;

  export type Listener = allEmitter.Listener;
  export type EventType = allEmitter.EventType;
  export type Events = allEmitter.Events;

  export type Query = allQs.Query;

  export type TruncateOptions = allString.TruncateOptions;

  export type URLObject = allUrl.URLObject;
  export type URLParts = allUrl.URLParts;

  export type AjaxOptions = allAjax.AjaxOptions;
  export type CSSProps = allCss.CSSProps;
  export type JsonpOptions = allJsonp.JsonpOptions;

  export const ajax = ajaxAlias;
  export const css = cssAlias;
  export const delay = delayAlias;
  export const jsonp = jsonpAlias;
  export const md5 = md5Alias;
  export const noop = noopAlias;
  export const numberFormat = numberFormatAlias;
  export const raf = rafAlias;
  export const randomNumbers = randomNumbersAlias;
  export const randomString = randomStringAlias;
  export const uuid = uuidAlias;

  export namespace base64 {
    export const decode = allBase64.default.decode;
    export const encode = allBase64.default.encode;
  }

  export namespace char {
    export const isAlphabetic = allChar.default.isAlphabetic;
    export const isAlphanumeric = allChar.default.isAlphanumeric;
    export const isASCII = allChar.default.isASCII;
    export const isCJK = allChar.default.isCJK;
    export const isControl = allChar.default.isControl;
    export const isDigit = allChar.default.isDigit;
    export const isGraph = allChar.default.isGraph;
    export const isHexadecimal = allChar.default.isHexadecimal;
    export const isLower = allChar.default.isLower;
    export const isPrint = allChar.default.isPrint;
    export const isPunctuation = allChar.default.isPunctuation;
    export const isSpace = allChar.default.isSpace;
    export const isUpper = allChar.default.isUpper;
  }

  export namespace cookie {
    export const get = allCookie.default.get;
    export const getAll = allCookie.default.getAll;
    export const getJson = allCookie.default.getJson;
    export const getRaw = allCookie.default.getRaw;
    export const isEnabled = allCookie.default.isEnabled;
    export const remove = allCookie.default.remove;
    export const set = allCookie.default.set;
    export const setJson = allCookie.default.setJson;
    export const setRaw = allCookie.default.setRaw;
  }

  export namespace date {
    export const diff = allDate.default.diff;
    export const format = allDate.default.format;
    export const timeAgo = allDate.default.timeAgo;
  }

  export namespace dom {
    export const clientX = allDom.default.clientX;
    export const clientY = allDom.default.clientY;
    export const createEvent = allDom.default.createEvent;
    export const domReady = allDom.default.domReady;
    export const insertScript = allDom.default.insertScript;
    export const isElement = allDom.default.isElement;
    export const isInViewport = allDom.default.isInViewport;
    export const isWindow = allDom.default.isWindow;
    export const pageX = allDom.default.pageX;
    export const pageY = allDom.default.pageY;
    export const scrollTo = allDom.default.scrollTo;
    export const scrollX = allDom.default.scrollX;
    export const scrollY = allDom.default.scrollY;
    export const viewport = allDom.default.viewport;
  }

  export namespace easing {
    export const cubicBezier = allEasing.default.cubicBezier;
    export const ease = allEasing.default.ease;
    export const easeIn = allEasing.default.easeIn;
    export const easeInOut = allEasing.default.easeInOut;
    export const easeOut = allEasing.default.easeOut;
    export const linear = allEasing.default.linear;
  }

  export namespace emitter {
    export const create = allEmitter.default.create;
    export const emit = allEmitter.default.emit;
    export const Emitter = allEmitter.default.Emitter;
    export const getListeners = allEmitter.default.getListeners;
    export const once = allEmitter.default.once;
    export const on = allEmitter.default.on;
    export const off = allEmitter.default.off;
  }

  export namespace lang {
    export const isArray = allLang.default.isArray;
    export const isBoolean = allLang.default.isBoolean;
    export const isDate = allLang.default.isDate;
    export const isError = allLang.default.isError;
    export const isFunction = allLang.default.isFunction;
    export const isNil = allLang.default.isNil;
    export const isNull = allLang.default.isNull;
    export const isNumber = allLang.default.isNumber;
    export const isObject = allLang.default.isObject;
    export const isRegExp = allLang.default.isRegExp;
    export const isString = allLang.default.isString;
    export const isUndefined = allLang.default.isUndefined;
  }

  export namespace path {
    export const basename = allPath.default.basename;
    export const dirname = allPath.default.dirname;
    export const extname = allPath.default.extname;
    export const join = allPath.default.join;
  }

  export namespace qs {
    export const get = allQs.default.get;
    export const parse = allQs.default.parse;
    export const stringify = allQs.default.stringify;
  }

  export namespace regex {
    export const ascii = allRegex.default.ascii;
    export const decimal = allRegex.default.decimal;
    export const digit = allRegex.default.digit;
    export const domain = allRegex.default.domain;
    export const email = allRegex.default.email;
    export const hexColor = allRegex.default.hexColor;
    export const hsl = allRegex.default.hsl;
    export const hsla = allRegex.default.hsla;
    export const integer = allRegex.default.integer;
    export const ipv4 = allRegex.default.ipv4;
    export const ipv6 = allRegex.default.ipv6;
    export const isAscii = allRegex.default.isAscii;
    export const isDecimal = allRegex.default.isDecimal;
    export const isDigit = allRegex.default.isDigit;
    export const isDomain = allRegex.default.isDomain;
    export const isEmail = allRegex.default.isEmail;
    export const isHexColor = allRegex.default.isHexColor;
    export const isHsl = allRegex.default.isHsl;
    export const isHsla = allRegex.default.isHsla;
    export const isIP = allRegex.default.isIP;
    export const isIPv4 = allRegex.default.isIPv4;
    export const isIPv6 = allRegex.default.isIPv6;
    export const isInteger = allRegex.default.isInteger;
    export const isQQ = allRegex.default.isQQ;
    export const isRealNumber = allRegex.default.isRealNumber;
    export const isRgb = allRegex.default.isRgb;
    export const isRgba = allRegex.default.isRgba;
    export const qq = allRegex.default.qq;
    export const realNumber = allRegex.default.realNumber;
    export const rgb = allRegex.default.rgb;
    export const rgba = allRegex.default.rgba;
  }

  export namespace string {
    export const countChars = allString.default.countChars;
    export const countLines = allString.default.countLines;
    export const escapeRegexp = allString.default.escapeRegexp;
    export const firstChar = allString.default.firstChar;
    export const isValidJSON = allString.default.isValidJSON;
    export const lastChar = allString.default.lastChar;
    export const truncate = allString.default.truncate;
  }

  export namespace url {
    export const isAbsolute = allUrl.default.isAbsolute;
    export const parse = allUrl.default.parse;
    export const stringify = allUrl.default.stringify;
  }

  export namespace ua {
    export const isAndroid = allUa.default.isAndroid;
    export const isIOS = allUa.default.isIOS;
    export const isIPad = allUa.default.isIPad;
    export const isIPhone = allUa.default.isIPhone;
    export const isLinux = allUa.default.isLinux;
    export const isMacOS = allUa.default.isMacOS;
    export const isMobile = allUa.default.isMobile;
    export const isTablet = allUa.default.isTablet;
    export const isWeChat = allUa.default.isWeChat;
    export const isWindows = allUa.default.isWindows;
  }
}

export default micell
