import { describe, expect, it } from 'vitest'
import getType from '../../src/lang/getType'

describe('lang/getType', () => {
  it('should return the type of value', () => {
    expect(getType(undefined)).to.equal('Undefined')
    expect(getType(null)).to.equal('Null')
    expect(getType(1)).to.equal('Number')
    expect(getType(true)).to.equal('Boolean')
    expect(getType('')).to.equal('String')
    expect(getType(Symbol('foo'))).to.equal('Symbol')
    expect(getType({})).to.equal('Object')
    expect(getType([])).to.equal('Array')
    expect(getType(/\s/)).to.equal('RegExp')
    expect(getType(new Date())).to.equal('Date')
    expect(getType(function () {})).to.equal('Function')
  })
})
