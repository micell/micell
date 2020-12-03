import { expect } from 'chai'
import utf8ToBytes from '../../src/_internal/utf8ToBytes'

describe('_internal/utf8ToBytes', () => {
  it('should return an empty array if an empty string is passed', () => {
    expect(utf8ToBytes('')).to.deep.equal([])
  })

  it('should return the byte array of the utf8 string', () => {
    expect(utf8ToBytes('hello')).to.deep.equal([0x68, 0x65, 0x6c, 0x6c, 0x6f])
    expect(utf8ToBytes('åßç')).to.deep.equal([0xc3, 0xa5, 0xc3, 0x9f, 0xc3, 0xa7])
    expect(utf8ToBytes('你好')).to.deep.equal([0xe4, 0xbd, 0xa0, 0xe5, 0xa5, 0xbd])
    expect(utf8ToBytes('👍')).to.deep.equal([0xf0, 0x9f, 0x91, 0x8d])
  })
})
