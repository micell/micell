import { expect } from 'chai'
import basename from '../../src/path/basename'

describe('path/basename', () => {
  it('should return the original string if there isn\'t a slash', () => {
    expect(basename('hello.md')).to.equal('hello.md')
  })

  it('should return the last portion of a path', () => {
    expect(basename('/hello/world.md')).to.equal('world.md')
  })

  it('should exclude the specified second parameter', () => {
    expect(basename('/hello/world.md', '.md')).to.equal('world')
  })

  it('can use the third parameter to be the separator of the path', () => {
    expect(basename('\\hello\\world.md', undefined, '\\')).to.equal('world.md')
  })
})
