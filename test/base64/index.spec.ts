import { describe, expect, it } from 'vitest'
import decode from '../../src/base64/decode'
import decodeFile from '../../src/base64/decodeFile'
import encode from '../../src/base64/encode'
import encodeFile from '../../src/base64/encodeFile'
import index from '../../src/base64/index'

describe('base64/index', () => {
  it('should export the right bindings', () => {
    expect(index.decode).to.equal(decode)
    expect(index.decodeFile).to.equal(decodeFile)
    expect(index.encode).to.equal(encode)
    expect(index.encodeFile).to.equal(encodeFile)
  })
})
