import isString from '../../src/lang/isString'

describe('lang/isString', () => {
  it('primitive', () => {
    expect(isString('')).to.equal(true)
    expect(isString('foo')).to.equal(true)
  })

  it('wrapper object', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isString(new String(''))).to.equal(true)
    expect(isString(new String('foo'))).to.equal(true)
  })

  it('should return false', () => {
    expect(isString({})).to.equal(false)
    expect(isString(null)).to.equal(false)
    expect(isString(undefined)).to.equal(false)
    expect(isString(1)).to.equal(false)
    expect(isString(0)).to.equal(false)
  })
})
