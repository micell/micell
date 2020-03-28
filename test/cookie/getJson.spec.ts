import { expect } from 'chai'
import getJson from '../../src/cookie/getJson'

describe('cookie/getJson', () => {
  it('should return the value with the JSON decode', () => {
    const key = 'json'
    const value = { foo: 1 }
    document.cookie = key + '=' + JSON.stringify(value)
    expect(getJson(key)).to.deep.equal(value)
  })
})
