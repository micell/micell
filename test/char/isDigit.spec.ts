import { describe, beforeEach, expect, it } from 'vitest'
import isDigit from '../../src/char/isDigit'

describe('char/isDigit', () => {
  const chars: Array<string> = []

  beforeEach(() => {
    for (let i = 48; i <= 57; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every((ch) => isDigit(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isDigit({})).to.equal(false)
    // @ts-ignore
    expect(isDigit('')).to.equal(false)
    // @ts-ignore
    expect(isDigit(null)).to.equal(false)
    // @ts-ignore
    expect(isDigit(undefined)).to.equal(false)
  })
})
