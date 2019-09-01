import isType from './_internal/isType'
import utf8ToBytes from './_internal/utf8ToBytes'
import bytesToWords from './_internal/bytesToWords'
import wordsToBytes from './_internal/wordsToBytes'
import bytesToHex from './_internal/bytesToHex'
import swapEndian from './_internal/swapEndian'
import isString from './lang/isString'
import isArray from './lang/isArray'

const isUint8Array = isType('Uint8Array')

function F (a, b, c, d, x, s, t) {
  const n = a + (b & c | ~b & d) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

function G (a, b, c, d, x, s, t) {
  const n = a + (b & d | c & ~d) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

function H (a, b, c, d, x, s, t) {
  const n = a + (b ^ c ^ d) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

function I (a, b, c, d, x, s, t) {
  const n = a + (c ^ (b | ~d)) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

export default function md5 (input) {
  let bytes = []

  if (isString(input)) {
    bytes = utf8ToBytes(input)
  } else if (isArray(input) || isUint8Array(input)) {
    bytes = input
  } else {
    throw TypeError('the input parameter must be one of String, Byte Array, Uint8Array')
  }

  const m = bytesToWords(bytes)
  const len = bytes.length * 8
  let a = 1732584193
  let b = -271733879
  let c = -1732584194
  let d = 271733878

  // Swap endian
  for (let i = 0; i < m.length; i++) {
    m[i] = ((m[i] << 8) | (m[i] >>> 24)) & 0x00FF00FF |
            ((m[i] << 24) | (m[i] >>> 8)) & 0xFF00FF00
  }

  // Padding
  m[len >>> 5] |= 0x80 << (len % 32)
  m[(((len + 64) >>> 9) << 4) + 14] = len

  for (let i = 0; i < m.length; i += 16) {
    let aa = a
    let bb = b
    let cc = c
    let dd = d

    a = F(a, b, c, d, m[i + 0], 7, -680876936)
    d = F(d, a, b, c, m[i + 1], 12, -389564586)
    c = F(c, d, a, b, m[i + 2], 17, 606105819)
    b = F(b, c, d, a, m[i + 3], 22, -1044525330)
    a = F(a, b, c, d, m[i + 4], 7, -176418897)
    d = F(d, a, b, c, m[i + 5], 12, 1200080426)
    c = F(c, d, a, b, m[i + 6], 17, -1473231341)
    b = F(b, c, d, a, m[i + 7], 22, -45705983)
    a = F(a, b, c, d, m[i + 8], 7, 1770035416)
    d = F(d, a, b, c, m[i + 9], 12, -1958414417)
    c = F(c, d, a, b, m[i + 10], 17, -42063)
    b = F(b, c, d, a, m[i + 11], 22, -1990404162)
    a = F(a, b, c, d, m[i + 12], 7, 1804603682)
    d = F(d, a, b, c, m[i + 13], 12, -40341101)
    c = F(c, d, a, b, m[i + 14], 17, -1502002290)
    b = F(b, c, d, a, m[i + 15], 22, 1236535329)

    a = G(a, b, c, d, m[i + 1], 5, -165796510)
    d = G(d, a, b, c, m[i + 6], 9, -1069501632)
    c = G(c, d, a, b, m[i + 11], 14, 643717713)
    b = G(b, c, d, a, m[i + 0], 20, -373897302)
    a = G(a, b, c, d, m[i + 5], 5, -701558691)
    d = G(d, a, b, c, m[i + 10], 9, 38016083)
    c = G(c, d, a, b, m[i + 15], 14, -660478335)
    b = G(b, c, d, a, m[i + 4], 20, -405537848)
    a = G(a, b, c, d, m[i + 9], 5, 568446438)
    d = G(d, a, b, c, m[i + 14], 9, -1019803690)
    c = G(c, d, a, b, m[i + 3], 14, -187363961)
    b = G(b, c, d, a, m[i + 8], 20, 1163531501)
    a = G(a, b, c, d, m[i + 13], 5, -1444681467)
    d = G(d, a, b, c, m[i + 2], 9, -51403784)
    c = G(c, d, a, b, m[i + 7], 14, 1735328473)
    b = G(b, c, d, a, m[i + 12], 20, -1926607734)

    a = H(a, b, c, d, m[i + 5], 4, -378558)
    d = H(d, a, b, c, m[i + 8], 11, -2022574463)
    c = H(c, d, a, b, m[i + 11], 16, 1839030562)
    b = H(b, c, d, a, m[i + 14], 23, -35309556)
    a = H(a, b, c, d, m[i + 1], 4, -1530992060)
    d = H(d, a, b, c, m[i + 4], 11, 1272893353)
    c = H(c, d, a, b, m[i + 7], 16, -155497632)
    b = H(b, c, d, a, m[i + 10], 23, -1094730640)
    a = H(a, b, c, d, m[i + 13], 4, 681279174)
    d = H(d, a, b, c, m[i + 0], 11, -358537222)
    c = H(c, d, a, b, m[i + 3], 16, -722521979)
    b = H(b, c, d, a, m[i + 6], 23, 76029189)
    a = H(a, b, c, d, m[i + 9], 4, -640364487)
    d = H(d, a, b, c, m[i + 12], 11, -421815835)
    c = H(c, d, a, b, m[i + 15], 16, 530742520)
    b = H(b, c, d, a, m[i + 2], 23, -995338651)

    a = I(a, b, c, d, m[i + 0], 6, -198630844)
    d = I(d, a, b, c, m[i + 7], 10, 1126891415)
    c = I(c, d, a, b, m[i + 14], 15, -1416354905)
    b = I(b, c, d, a, m[i + 5], 21, -57434055)
    a = I(a, b, c, d, m[i + 12], 6, 1700485571)
    d = I(d, a, b, c, m[i + 3], 10, -1894986606)
    c = I(c, d, a, b, m[i + 10], 15, -1051523)
    b = I(b, c, d, a, m[i + 1], 21, -2054922799)
    a = I(a, b, c, d, m[i + 8], 6, 1873313359)
    d = I(d, a, b, c, m[i + 15], 10, -30611744)
    c = I(c, d, a, b, m[i + 6], 15, -1560198380)
    b = I(b, c, d, a, m[i + 13], 21, 1309151649)
    a = I(a, b, c, d, m[i + 4], 6, -145523070)
    d = I(d, a, b, c, m[i + 11], 10, -1120210379)
    c = I(c, d, a, b, m[i + 2], 15, 718787259)
    b = I(b, c, d, a, m[i + 9], 21, -343485551)

    a = (a + aa) >>> 0
    b = (b + bb) >>> 0
    c = (c + cc) >>> 0
    d = (d + dd) >>> 0
  }

  return bytesToHex(wordsToBytes(swapEndian([a, b, c, d])))
}
