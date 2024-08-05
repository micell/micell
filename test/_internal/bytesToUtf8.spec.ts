import { describe, expect, it } from 'vitest'
import bytesToUtf8 from '../../src/_internal/bytesToUtf8'

describe('_internal/bytesToUtf8', () => {
  it('should return an empty string if an empty array is passed', () => {
    expect(bytesToUtf8([])).to.equal('')
  })

  it('should return utf8 string of the bytes', () => {
    expect(bytesToUtf8([0x68, 0x65, 0x6c, 0x6c, 0x6f])).to.equal('hello')
    expect(bytesToUtf8([0xc3, 0xa5, 0xc3, 0x9f, 0xc3, 0xa7])).to.equal('åßç')
    expect(bytesToUtf8([0xe4, 0xbd, 0xa0, 0xe5, 0xa5, 0xbd])).to.equal('你好')
    expect(bytesToUtf8([0xf0, 0x9f, 0x91, 0x8d])).to.equal('👍')
  })

  it('should return utf8 string of the bytes if the bytes array is very long', () => {
    const bytes: number[] = []
    const len = 0x3fff + 10
    let str = ''
    for (let i = 0; i < len; i++) {
      bytes.push(0x68)
      str += 'h'
    }
    expect(bytesToUtf8(bytes)).to.equal(str)
  })
})
