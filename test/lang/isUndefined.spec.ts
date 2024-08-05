import { describe, expect, it } from 'vitest'
import isUndefined from '../../src/lang/isUndefined'

describe('lang/isUndefined', () => {
  it('should return true', () => {
    expect(isUndefined(undefined)).to.equal(true)
  })

  it('should return false', () => {
    expect(isUndefined({})).to.equal(false)
    expect(isUndefined(0)).to.equal(false)
    expect(isUndefined('')).to.equal(false)
    expect(isUndefined(null)).to.equal(false)
  })
})
