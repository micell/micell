export default function wordsToBytes(words: Array<number>): Array<number> {
  const bytes = []
  for (let i = 0; i < words.length * 32; i += 8) {
    bytes.push((words[i >>> 5] >>> (24 - (i % 32))) & 0xff)
  }
  return bytes
}
