import noop from '../src/noop'

describe('noop', () => {
  it('should be an empty function', () => {
    const str = noop.toString().replace(/\s+/g, '')
    expect(str).to.equal('functionnoop(){}')
  })

  it('should return undefined', () => {
    expect(noop()).to.equal(undefined)
  })
})
