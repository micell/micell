import { expect } from 'chai'
import padStart from '../../src/_internal/padStart'

describe('_internal/padStart', () => {
  it('should return an empty string if no arguments', () => {
    expect(padStart()).to.equal('')
  })

  it('should return the original string if len is 0', () => {
    expect(padStart('foo')).to.equal('foo')
    expect(padStart('foo', undefined, ' ')).to.equal('foo')
  })

  it('should use the space characters to be the fill string if the third argument is not passed', () => {
    expect(padStart('foo', 5)).to.equal('  foo')
  })

  it('should fill to the specified length with specified string', () => {
    expect(padStart('foo', 5, 'x')).to.equal('xxfoo')
    expect(padStart('foo', 5, 'abc')).to.equal('abfoo')
  })
})
