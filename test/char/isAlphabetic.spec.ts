import { expect } from 'chai'
import isAlphabetic from '../../src/char/isAlphabetic'

describe('char/isAlphabetic', () => {
  const chars: Array<string> = []

  before(() => {
    for (let i = 65; i <= 90; i++) {
      chars.push(String.fromCharCode(i))
    }
    for (let i = 97; i <= 122; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every(ch => isAlphabetic(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isAlphabetic({})).to.equal(false)
    // @ts-ignore
    expect(isAlphabetic('')).to.equal(false)
    // @ts-ignore
    expect(isAlphabetic(null)).to.equal(false)
    // @ts-ignore
    expect(isAlphabetic(undefined)).to.equal(false)
  })
})
