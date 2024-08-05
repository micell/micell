import { describe, expect, it } from 'vitest'
import randomString from '../src/randomString'

describe('randomString', () => {
  it('first parameter', () => {
    expect(randomString().length).to.equal(32)
    expect(randomString(0).length).to.equal(32)
    expect(randomString(undefined).length).to.equal(32)
    expect(randomString(undefined, '0').length).to.equal(32)
    expect(randomString(8).length).to.equal(8)
    expect(randomString(128).length).to.equal(128)
  })

  it('second paramater', () => {
    expect(randomString(4, '0')).to.equal('0000')
    expect(randomString(8, '0123456789')).to.match(/^\d+$/)
    expect(randomString(8, 'abc123')).to.match(/^[abc123]+$/)
  })
})
