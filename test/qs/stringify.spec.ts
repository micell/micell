import { expect } from 'chai'
import stringify from '../../src/qs/stringify'

describe('qs/stringify', () => {
  // TODO: unable to pass the type check
  // it('should return an empty string if the 1st argument is missing or not an object', () => {
  //   expect(stringify()).to.equal('')
  //   expect(stringify(1)).to.equal('')
  //   expect(stringify([])).to.equal('')
  // })

  it('one pair', () => {
    expect(stringify({ foo: 1 })).to.equal('foo=1')
  })

  it('multiple pairs', () => {
    expect(stringify({ foo: 1, bar: 2, baz: 3 })).to.equal('foo=1&bar=2&baz=3')
  })

  it('multiple pairs with the same name', () => {
    expect(stringify({ foo: [1, 2, 3] })).to.equal('foo=1&foo=2&foo=3')
  })

  it('should encode the name and value', () => {
    expect(stringify({ foo: 'hello world' })).to.equal('foo=hello%20world')
    expect(stringify({ 'foo bar': 'hello world' })).to.equal('foo%20bar=hello%20world')
  })
})
