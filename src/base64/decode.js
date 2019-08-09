import bytesToHex from '../_internal/bytesToHex'
import bytesToUtf8 from '../_internal/bytesToUtf8'
import isString from '../lang/isString'

const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
const base64Map = {}
const bitPadding = '000000'

for (let i = 0; i < base64Chars.length; i++) {
  const ch = base64Chars.charAt(i)
  base64Map[ch] = i
}

function base64ToBytes (str) {
  let bits = ''

  for (let i = 0; i < 4; i++) {
    const ch = str.charAt(i)
    const index = base64Map[ch]
    if (index > -1) {
      const bitStr = index.toString(2)
      const pad = bitPadding.slice(0, 6 - bitStr.length)
      bits += pad + bitStr
    }
  }

  const bytes = []

  for (let i = 0, len = Math.floor(bits.length / 8); i < len; i++) {
    bytes.push(parseInt(bits.slice(i * 8, (i + 1) * 8), 2))
  }

  return bytes
}

export default function decode (input, options = {}) {
  if (!isString(input)) {
    throw TypeError('input parameter should be a string')
  }
  const {
    encoding = 'utf8'
  } = options
  const bytes = []

  for (let i = 0, len = Math.ceil(input.length / 4); i < len; i++) {
    bytes.push(...base64ToBytes(input.slice(i * 4, (i + 1) * 4)))
  }

  if (encoding === 'binary') {
    return bytes
  } else if (encoding === 'hex') {
    return bytesToHex(bytes)
  }

  return bytesToUtf8(bytes)
}
