import { expect } from 'chai'
import decode from '../../src/base64/decode'
import encode from '../../src/base64/encode'
import index from '../../src/base64/index'

describe('base64/index', () => {
  it('should export the right bindings', () => {
    expect(index.decode).to.equal(decode);
    expect(index.encode).to.equal(encode);
  })
})
