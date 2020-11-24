import { expect } from 'chai'
import basename from '../../src/path/basename'
import dirname from '../../src/path/dirname'
import extname from '../../src/path/extname'
import join from '../../src/path/join'
import index from '../../src/path/index'

describe('path/index', () => {
  it('should export the right bindings', () => {
    expect(index.basename).to.equal(basename)
    expect(index.dirname).to.equal(dirname)
    expect(index.extname).to.equal(extname)
    expect(index.join).to.equal(join)
  })
})
