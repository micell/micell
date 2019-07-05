import getJson from '../../src/cookie/getJson'
import setJson from '../../src/cookie/setJson'

describe('cookie/setJson', () => {
  it('should return the value with the JSON encode', () => {
    const key = 'json'
    const value = { foo: 1 }
    setJson(key, value)
    expect(getJson(key)).to.deep.equal(value)
  })
})
