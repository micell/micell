import { describe, beforeEach, expect, it } from 'vitest'
import isASCII from '../../src/char/isASCII'

describe('char/isASCII', () => {
  const asciiChars: Array<string> = []

  beforeEach(() => {
    for (let i = 0; i <= 127; i++) {
      asciiChars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = asciiChars.every((ch) => isASCII(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isASCII({})).to.equal(false)
    // @ts-ignore
    expect(isASCII('')).to.equal(false)
    // @ts-ignore
    expect(isASCII(null)).to.equal(false)
    // @ts-ignore
    expect(isASCII(undefined)).to.equal(false)
  })
})
