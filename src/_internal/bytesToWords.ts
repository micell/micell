export default function bytesToWords (bytes: Array<number>): Array<number> {
  let words: Array<number> = []
  for (let i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32)
  }
  return words
}
