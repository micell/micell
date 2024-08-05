import { describe, expect, it } from 'vitest'
import isObject from '../../src/lang/isObject'

describe('lang/isObject', () => {
  it('should return true', () => {
    expect(isObject({})).to.equal(true)
  })

  it('null should return false', () => {
    expect(isObject(null)).to.equal(false)
  })

  it('array should return false', () => {
    expect(isObject([])).to.equal(false)
  })

  it('wrapper object should return false', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isObject(new String('a'))).to.equal(false)
  })
})
