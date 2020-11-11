import { expect } from 'chai'
import join from '../../src/path/join'

describe('path/join', () => {
  it('should return an empty string if no arguments', () => {
    expect(join()).to.equal('')
  })

  it('should return the argument string if only the first argument is passed', () => {
    expect(join('foo')).to.equal('foo')
  })

  it('should join the arguments separated by a slash character', () => {
    expect(join('foo', 'bar')).to.equal('foo/bar')
    expect(join('foo', 'bar', 'baz')).to.equal('foo/bar/baz')
    expect(join('foo/', 'bar')).to.equal('foo/bar')
    expect(join('foo/', '/bar')).to.equal('foo/bar')
    expect(join('foo//', '/bar')).to.equal('foo/bar')
    expect(join('foo/', '//bar')).to.equal('foo/bar')
    expect(join('foo///', '/bar')).to.equal('foo/bar')
    expect(join('foo/', '///bar')).to.equal('foo/bar')
  })

  it('should remain the start and end slash', () => {
    expect(join('foo', 'bar/')).to.equal('foo/bar/')
    expect(join('/foo', 'bar')).to.equal('/foo/bar')
    expect(join('foo', 'bar//')).to.equal('foo/bar/')
    expect(join('//foo', 'bar')).to.equal('/foo/bar')
    expect(join('foo', 'bar///')).to.equal('foo/bar/')
    expect(join('///foo', 'bar')).to.equal('/foo/bar')
  })
})
