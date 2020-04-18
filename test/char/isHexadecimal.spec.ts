import { expect } from 'chai'
import isHexadecimal from '../../src/char/isHexadecimal'

describe('char/isHexadecimal', () => {
  const chars: Array<string> = []

  before(() => {
    for (let i = 48; i <= 57; i++) {
      chars.push(String.fromCharCode(i))
    }
    for (let i = 65; i <= 70; i++) {
      chars.push(String.fromCharCode(i))
    }
    for (let i = 97; i <= 102; i++) {
      chars.push(String.fromCharCode(i))
    }
  })

  it('should return true', () => {
    const result = chars.every(ch => isHexadecimal(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isHexadecimal({})).to.equal(false)
    // @ts-ignore
    expect(isHexadecimal('')).to.equal(false)
    // @ts-ignore
    expect(isHexadecimal(null)).to.equal(false)
    // @ts-ignore
    expect(isHexadecimal(undefined)).to.equal(false)
  })
})
