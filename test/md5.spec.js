import utf8ToBytes from '../src/_internal/utf8ToBytes'
import md5 from '../src/md5'

describe('md5', () => {
  const data = [
    {
      input: '',
      output: 'd41d8cd98f00b204e9800998ecf8427e'
    },
    {
      input: 'hello world',
      output: '5eb63bbbe01eeed093cb22bb8f5acdc3'
    },
    {
      input: 'hello 你好',
      output: '429f2c0b03ebc9911455cbec2a09bc6f'
    }
  ]

  it('the 1st parameter is a string', () => {
    for (const datum of data) {
      expect(md5(datum.input)).to.equal(datum.output)
    }
  })

  it('the 1st parameter is a byte array', () => {
    for (const datum of data) {
      const bytes = utf8ToBytes(datum.input)
      expect(md5(bytes)).to.equal(datum.output)
    }
  })

  it('the 1st parameter is a Uint8Array', () => {
    for (const datum of data) {
      const uint8 = new Uint8Array(utf8ToBytes(datum.input))
      expect(md5(uint8)).to.equal(datum.output)
    }
  })

  it('should throw a TypeError', () => {
    const fn1 = () => md5()
    const fn2 = () => md5(1)
    expect(fn1).to.throw(TypeError)
    expect(fn2).to.throw(TypeError)
  })
})
