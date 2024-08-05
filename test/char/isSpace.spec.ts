import { describe, beforeEach, expect, it } from 'vitest'
import isSpace from '../../src/char/isSpace'

describe('char/isSpace', () => {
  const chars: Array<string> = []

  beforeEach(() => {
    for (let i = 9; i <= 13; i++) {
      chars.push(String.fromCharCode(i))
    }
    chars.push(String.fromCharCode(32))
  })

  it('should return true', () => {
    const result = chars.every((ch) => isSpace(ch))
    expect(result).to.equal(true)
  })

  it('Non-ASCII white spaces should return false', () => {
    // &nbsp;
    expect(isSpace(String.fromCharCode(160))).to.equal(false)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isSpace({})).to.equal(false)
    // @ts-ignore
    expect(isSpace('')).to.equal(false)
    // @ts-ignore
    expect(isSpace(null)).to.equal(false)
    // @ts-ignore
    expect(isSpace(undefined)).to.equal(false)
  })
})
