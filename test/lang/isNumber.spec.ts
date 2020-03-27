import { expect } from 'chai'
import isNumber from '../../src/lang/isNumber'

describe('lang/isNumber', () => {
  it('primitive', () => {
    expect(isNumber(1)).to.equal(true)
    expect(isNumber(0)).to.equal(true)
    expect(isNumber(-1)).to.equal(true)
    expect(isNumber(1.1)).to.equal(true)
    expect(isNumber(1.1e5)).to.equal(true)
    expect(isNumber(1.1e-5)).to.equal(true)
    expect(isNumber(NaN)).to.equal(true)
    expect(isNumber(Infinity)).to.equal(true)
    expect(isNumber(-Infinity)).to.equal(true)
  })

  it('wrapper object', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isNumber(new Number(1))).to.equal(true)
    expect(isNumber(new Number(-1.1))).to.equal(true)
  })

  it('should return false', () => {
    expect(isNumber({})).to.equal(false)
    expect(isNumber(null)).to.equal(false)
    expect(isNumber(undefined)).to.equal(false)
  })
})
