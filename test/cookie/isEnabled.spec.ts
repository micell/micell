import { expect } from 'chai'
import isEnabled from '../../src/cookie/isEnabled'

describe('cookie/isEnabled', () => {
  it('should return true if the cookie is enabled', () => {
    expect(isEnabled()).to.equal(true)
  })
})
