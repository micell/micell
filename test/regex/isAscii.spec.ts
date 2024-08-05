import { describe, expect, it } from 'vitest'
import isAscii from '../../src/regex/isAscii'

describe('regex/isAscii', () => {
  const asciiStrings = [' ', 'hello', 'å']
  const notAsciiStrings = ['你好', 'hello 你好']

  it('should be an ASCII string', () => {
    asciiStrings.forEach((str) => {
      expect(isAscii(str)).to.equal(true)
    })
  })

  it('should not be an ASCII string', () => {
    notAsciiStrings.forEach((str) => {
      expect(isAscii(str)).to.equal(false)
    })
  })
})
