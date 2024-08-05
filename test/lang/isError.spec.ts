import { describe, expect, it } from 'vitest'
import isError from '../../src/lang/isError'

describe('lang/isError', () => {
  it('should return true', () => {
    expect(isError(new Error())).to.equal(true)
    expect(isError(new EvalError())).to.equal(true)
    expect(isError(new RangeError())).to.equal(true)
    expect(isError(new ReferenceError())).to.equal(true)
    expect(isError(new SyntaxError())).to.equal(true)
    expect(isError(new TypeError())).to.equal(true)
    expect(isError(new URIError())).to.equal(true)
  })

  it('should return false', () => {
    expect(isError({})).to.equal(false)
    expect(isError(null)).to.equal(false)
    expect(isError(undefined)).to.equal(false)
  })
})
