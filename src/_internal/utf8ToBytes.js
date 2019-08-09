export default function utf8ToBytes (str) {
  const bytes = []

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i)

    if (code < 0x007f) {
      bytes.push(code)
    } else if (code < 0x07ff) {
      const b1 = (code >> 6) | 192
      const b2 = (code & 63) | 128
      bytes.push(b1, b2)
    } else if (code >= 0xd800 && code <= 0xdbff) {
      const high = code
      i++
      const low = str.charCodeAt(i)
      code = 0x10000 + (high - 0xd800) * 0x400 + low - 0xdc00

      const b1 = (code >> 18) | 240
      const b2 = ((code >> 12) & 63) | 128
      const b3 = ((code >> 6) & 63) | 128
      const b4 = (code & 63) | 128
      bytes.push(b1, b2, b3, b4)
    } else {
      const b1 = (code >> 12) | 224
      const b2 = ((code >> 6) & 63) | 128
      const b3 = (code & 63) | 128
      bytes.push(b1, b2, b3)
    }
  }

  return bytes
}
