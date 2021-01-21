import { expect } from 'chai'
import encodeFile from '../../src/base64/encodeFile'

describe('base64/encodeFile', () => {
  it('should throw an error if the input is not type of Blob', (done) => {
    encodeFile({} as Blob)
      .catch(err => {
        expect(err).to.instanceOf(Error)
        done()
      })
  })

  it('should encode a Blob object to base64 string', (done) => {
    const blob = new Blob(['hello world'], { type: 'plain/text' })
    encodeFile(blob)
      .then((str) => {
        expect(str).to.equal('aGVsbG8gd29ybGQ=')
        done()
      })
      .catch(done)
  })
})
