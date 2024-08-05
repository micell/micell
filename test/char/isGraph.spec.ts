import { describe, beforeEach, expect, it } from 'vitest'
import isGraph from '../../src/char/isGraph'

describe('char/isGraph', () => {
  const chars: Array<string> = []

  beforeEach(() => {
    for (let i = 33; i <= 126; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every((ch) => isGraph(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isGraph({})).to.equal(false)
    // @ts-ignore
    expect(isGraph('')).to.equal(false)
    // @ts-ignore
    expect(isGraph(null)).to.equal(false)
    // @ts-ignore
    expect(isGraph(undefined)).to.equal(false)
  })
})
