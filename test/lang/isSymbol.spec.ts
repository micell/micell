import { describe, expect, it } from 'vitest'
import isSymbol from '../../src/lang/isSymbol'

describe('lang/isSymbol', () => {
  if (typeof Symbol === 'function') {
    it('should return true', () => {
      expect(isSymbol(Symbol('foo'))).to.equal(true)
    })
  }

  it('should return false', () => {
    expect(isSymbol('foo')).to.equal(false)
    expect(isSymbol(undefined)).to.equal(false)
    expect(isSymbol(null)).to.equal(false)
  })
})
