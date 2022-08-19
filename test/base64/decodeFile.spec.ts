import { expect } from 'chai'
import decodeFile from '../../src/base64/decodeFile'

describe('base64/decodeFile', () => {
  it('should throw an error if the input is not type of string', (done) => {
    // @ts-ignore
    decodeFile(1).catch((err) => {
      expect(err).to.instanceOf(Error)
      done()
    })
  })

  it('should decode a base64 string to  a Blob object', (done) => {
    const blob = new Blob(['hello world'], { type: 'plain/text' })
    decodeFile('aGVsbG8gd29ybGQ=', { type: 'plain/text' })
      .then((result) => {
        expect(result).to.deep.equal(blob)
        done()
      })
      .catch(done)
  })
})
