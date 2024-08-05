import { describe, expect, it } from 'vitest'
import decodeFile from '../../src/base64/decodeFile'

describe('base64/decodeFile', () => {
  it('should throw an error if the input is not type of string', async () => {
    // @ts-ignore
    await expect(decodeFile(1)).rejects.to.instanceOf(Error)
  })

  it('should decode a base64 string to  a Blob object', async () => {
    const blob = new Blob(['hello world'], { type: 'plain/text' })
    await expect(
      decodeFile('aGVsbG8gd29ybGQ=', { type: 'plain/text' }),
    ).resolves.to.deep.equal(blob)
  })
})
