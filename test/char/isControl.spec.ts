import { describe, beforeEach, expect, it } from 'vitest'
import isControl from '../../src/char/isControl'

describe('char/isControl', () => {
  const chars: Array<string> = []

  beforeEach(() => {
    for (let i = 0; i <= 31; i++) {
      chars.push(String.fromCharCode(i))
    }
    chars.push(String.fromCharCode(127))
  })

  it('should return true', () => {
    const result = chars.every((ch) => isControl(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isControl({})).to.equal(false)
    // @ts-ignore
    expect(isControl('')).to.equal(false)
    // @ts-ignore
    expect(isControl(null)).to.equal(false)
    // @ts-ignore
    expect(isControl(undefined)).to.equal(false)
  })
})
