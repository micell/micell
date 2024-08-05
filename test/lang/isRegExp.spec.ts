import { describe, expect, it } from 'vitest'
import isRegExp from '../../src/lang/isRegExp'

describe('lang/isRegExp', () => {
  it('primitive', () => {
    expect(isRegExp(/a/)).to.equal(true)
  })

  it('wrapper object', () => {
    expect(isRegExp(new RegExp('a'))).to.equal(true)
  })

  it('should return false', () => {
    expect(isRegExp({})).to.equal(false)
    expect(isRegExp(0)).to.equal(false)
    expect(isRegExp('')).to.equal(false)
    expect(isRegExp(null)).to.equal(false)
    expect(isRegExp(undefined)).to.equal(false)
  })
})
