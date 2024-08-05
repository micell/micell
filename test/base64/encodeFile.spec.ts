import { describe, expect, it } from 'vitest'
import encodeFile from '../../src/base64/encodeFile'

describe('base64/encodeFile', () => {
  it('should throw an error if the input is not type of Blob', async () => {
    // @ts-ignore
    await expect(encodeFile({} as Blob)).rejects.to.instanceOf(Error)
  })

  it('should encode a Blob object to base64 string', async () => {
    const blob = new Blob(['hello world'], { type: 'plain/text' })
    // @ts-ignore
    await expect(encodeFile(blob)).resolves.to.equal('aGVsbG8gd29ybGQ=')
  })
})
