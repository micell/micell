import { expect } from 'chai'
import isLower from '../../src/char/isLower'

describe('char/isLower', () => {
  const chars: Array<string> = []

  before(() => {
    for (let i = 97; i <= 122; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every(ch => isLower(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isLower({})).to.equal(false)
    // @ts-ignore
    expect(isLower('')).to.equal(false)
    // @ts-ignore
    expect(isLower(null)).to.equal(false)
    // @ts-ignore
    expect(isLower(undefined)).to.equal(false)
  })
})
