import isBoolean from '../../src/lang/isBoolean'

describe('lang/isBoolean', () => {
  it('primitive', () => {
    expect(isBoolean(true)).to.equal(true)
    expect(isBoolean(false)).to.equal(true)
  })

  it('wrapper object', () => {
    /* eslint-disable  no-new-wrappers */
    expect(isBoolean(new Boolean(true))).to.equal(true)
    expect(isBoolean(new Boolean(false))).to.equal(true)
  })

  it('should return false', () => {
    expect(isBoolean({})).to.equal(false)
    expect(isBoolean(null)).to.equal(false)
    expect(isBoolean(undefined)).to.equal(false)
    expect(isBoolean(1)).to.equal(false)
    expect(isBoolean(0)).to.equal(false)
  })
})
