import { expect } from 'chai'
import utf8ToBytes from '../../src/_internal/utf8ToBytes'
import encode from '../../src/base64/encode'

describe('base64/encode', () => {
  const data = [
    {
      // empty string
      input: '',
      output: ''
    },
    {
      // padding = 1
      input: 'any carnal pleasure.',
      output: 'YW55IGNhcm5hbCBwbGVhc3VyZS4='
    },
    {
      // padding = 2
      input: 'any carnal pleasure',
      output: 'YW55IGNhcm5hbCBwbGVhc3VyZQ=='
    },
    {
      // padding = 0
      input: 'any carnal pleasur',
      output: 'YW55IGNhcm5hbCBwbGVhc3Vy'
    },
    {
      // unicode basic multilingual plane
      input: '你好',
      output: '5L2g5aW9'
    },
    {
      // unicode other planes
      input: '😀',
      output: '8J+YgA=='
    }
  ]

  it('the 1st parameter is a string', () => {
    for (const datum of data) {
      expect(encode(datum.input)).to.equal(datum.output)
    }
  })

  it('the 1st parameter is a byte array', () => {
    for (const datum of data) {
      const bytes = utf8ToBytes(datum.input)
      expect(encode(bytes)).to.equal(datum.output)
    }
  })

  it('the 1st parameter is a Uint8Array', () => {
    for (const datum of data) {
      const uint8 = new Uint8Array(utf8ToBytes(datum.input))
      expect(encode(uint8)).to.equal(datum.output)
    }
  })

  // TODO: ts type check error
  // it('should throw a TypeError', () => {
  //   const fn1 = () => encode()
  //   const fn2 = () => encode(1)
  //   expect(fn1).to.throw(TypeError)
  //   expect(fn2).to.throw(TypeError)
  // })
})
