import isType from '../_internal/isType'
import utf8ToBytes from '../_internal/utf8ToBytes'
import isString from '../lang/isString'
import isArray from '../lang/isArray'

const isUint8Array = isType('Uint8Array')

const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
const paddingChar = '='
const bitPadding = '00000000'

function octetToBase64 (octets) {
  const len = octets.length
  let bits = ''
  let paddingLen = 3 - len
  let result = ''

  for (let i = 0; i < len; i++) {
    const bitStr = octets[i].toString(2)
    const pad = bitPadding.slice(0, 8 - bitStr.length)
    bits += pad + bitStr
  }

  if (len === 1) {
    bits += bitPadding.slice(0, 4)
  } else if (len === 2) {
    bits += bitPadding.slice(0, 2)
  }

  for (let i = 0, len = bits.length / 6; i < len; i++) {
    const sextet = parseInt(bits.slice(i * 6, (i + 1) * 6), 2)
    result += base64Chars[sextet]
  }

  while (paddingLen--) {
    result += paddingChar
  }

  return result
}

export default function encode (input) {
  let bytes = []

  if (isString(input)) {
    bytes = utf8ToBytes(input)
  } else if (isArray(input) || isUint8Array(input)) {
    bytes = input
  } else {
    throw TypeError('the input parameter must be one of String, Byte Array, Uint8Array')
  }

  let result = ''

  for (let i = 0, len = Math.ceil(bytes.length / 3); i < len; i++) {
    result += octetToBase64(bytes.slice(i * 3, (i + 1) * 3))
  }

  return result
}
