import { expect } from 'chai'
import isCJK from '../../src/char/isCJK'

// Todo: Need to test all cjk characters?
const cjkChars = ['你', '，', '阝', 'た', '너']

describe('char/isCJK', () => {
  it('should return true', () => {
    const result = cjkChars.every(ch => isCJK(ch))
    expect(result).to.equal(true)
  })

  it('should return false', () => {
    // @ts-ignore
    expect(isCJK({})).to.equal(false)
    // @ts-ignore
    expect(isCJK('a')).to.equal(false)
    // @ts-ignore
    expect(isCJK('1')).to.equal(false)
    // @ts-ignore
    expect(isCJK('.')).to.equal(false)
    // @ts-ignore
    expect(isCJK('')).to.equal(false)
    // @ts-ignore
    expect(isCJK(null)).to.equal(false)
    // @ts-ignore
    expect(isCJK(undefined)).to.equal(false)
  })
})
