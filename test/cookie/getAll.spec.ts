import { describe, expect, it } from 'vitest'
import getAll from '../../src/cookie/getAll'

describe('cookie/getAll', () => {
  it('should return all the cookies', () => {
    document.cookie = 'foo=hello'
    document.cookie = 'bar=world'
    document.cookie = 'baz=42'
    const cookies = getAll()
    expect(cookies.foo).to.equal('hello')
    expect(cookies.bar).to.equal('world')
    expect(cookies.baz).to.equal('42')
  })
})
