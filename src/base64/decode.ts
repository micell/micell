import bytesToHex from '../_internal/bytesToHex'
import bytesToUtf8 from '../_internal/bytesToUtf8'
import isString from '../lang/isString'

interface Base64Map {
  [key: string]: number
}

const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
const base64Map: Base64Map = {}
const bitPadding = '000000'

for (let i = 0; i < base64Chars.length; i++) {
  const ch = base64Chars.charAt(i)
  base64Map[ch] = i
}

function base64ToBytes(str: string): Array<number> {
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
    bytes.push(Number.parseInt(bits.slice(i * 8, (i + 1) * 8), 2))
  }

  return bytes
}

export interface Base64DecodeOptions {
  encoding?: 'utf8' | 'binary' | 'hex'
}

export default function decode(
  input: string,
  options: Base64DecodeOptions = {},
): Array<number> | string {
  if (!isString(input)) {
    throw TypeError('input parameter should be a string')
  }
  const { encoding = 'utf8' } = options
  const bytes = []

  for (let i = 0, len = Math.ceil(input.length / 4); i < len; i++) {
    bytes.push(...base64ToBytes(input.slice(i * 4, (i + 1) * 4)))
  }

  if (encoding === 'binary') {
    return bytes
  }
  if (encoding === 'hex') {
    return bytesToHex(bytes)
  }

  return bytesToUtf8(bytes)
}
