export default function bytesToUtf8 (bytes: Array<number>): string {
  const codeUnits = []
  let codePoint = 0
  let utf8 = ''
  let byte = -1

  for (let i = 0; i < bytes.length; i++) {
    byte = bytes[i]
    if (byte < 0x80) {
      codeUnits.push(bytes[i])
    } else if (byte < 0xe0) {
      codePoint = ((bytes[i] & 31) << 6) +
        (bytes[++i] & 63)
      codeUnits.push(codePoint)
    } else if (byte < 0xf0) {
      codePoint = ((bytes[i] & 15) << 12) +
        ((bytes[++i] & 63) << 6) +
        (bytes[++i] & 63)
      codeUnits.push(codePoint)
    } else {
      codePoint = ((bytes[i] & 7) << 18) +
        ((bytes[++i] & 63) << 12) +
        ((bytes[++i] & 63) << 6) +
        (bytes[++i] & 63)
      codePoint -= 0x10000
      codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00)
    }
    if (codeUnits.length > 0x3fff) {
      utf8 += String.fromCharCode.apply(null, codeUnits)
      codeUnits.length = 0
    }
  }
  utf8 += String.fromCharCode.apply(null, codeUnits)
  return utf8
}
