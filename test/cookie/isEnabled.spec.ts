import { describe, expect, it } from 'vitest'
import isEnabled from '../../src/cookie/isEnabled'

describe('cookie/isEnabled', () => {
  it('should return true if the cookie is enabled', () => {
    expect(isEnabled()).to.equal(true)
  })
})
