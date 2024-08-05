import { describe, beforeEach, expect, it } from 'vitest'
import isUpper from '../../src/char/isUpper'

describe('char/isUpper', () => {
  const chars: Array<string> = []

  beforeEach(() => {
    for (let i = 65; i <= 90; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every((ch) => isUpper(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isUpper({})).to.equal(false)
    // @ts-ignore
    expect(isUpper('')).to.equal(false)
    // @ts-ignore
    expect(isUpper(null)).to.equal(false)
    // @ts-ignore
    expect(isUpper(undefined)).to.equal(false)
  })
})
