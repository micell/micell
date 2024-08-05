import { describe, expect, it } from 'vitest'
import isBigInt from '../../src/lang/isBigInt'

describe('lang/isBigInt', () => {
  if (typeof BigInt === 'function') {
    it('should return true', () => {
      expect(isBigInt(BigInt(1))).to.equal(true)
    })
  }

  it('should return false', () => {
    expect(isBigInt(1)).to.equal(false)
    expect(isBigInt(undefined)).to.equal(false)
    expect(isBigInt(null)).to.equal(false)
  })
})
