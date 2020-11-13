import { expect } from 'chai'
import join from '../../src/url/join'

describe('url/join', () => {
  it('join the url parts and return a normalized url', () => {
    expect(join('https://example.com', 'foo', 'bar')).to.equal('https://example.com/foo/bar')
    expect(join('example.com', 'foo', 'bar')).to.equal('example.com/foo/bar')
    expect(join('https://www.example.com', 'foo', 'bar')).to.equal('https://www.example.com/foo/bar')
    expect(join('https://example.com:8080', 'foo', 'bar')).to.equal('https://example.com:8080/foo/bar')
    expect(join('https://你好.世界', 'foo', 'bar')).to.equal('https://你好.世界/foo/bar')
    expect(join('https://example.com', '//foo', 'bar')).to.equal('https://example.com/foo/bar')
    expect(join('https://example.com', '///foo', 'bar')).to.equal('https://example.com/foo/bar')
    expect(join('https://example.com/', '/foo', 'bar')).to.equal('https://example.com/foo/bar')
    expect(join('https://example.com', 'foo', 'bar/')).to.equal('https://example.com/foo/bar/')
    expect(join('https://example.com', 'foo', 'bar//')).to.equal('https://example.com/foo/bar/')
    expect(join('https://example.com', 'foo', 'bar', '?hello=world')).to.equal('https://example.com/foo/bar?hello=world')
    expect(join('https://example.com', 'foo', 'bar', '#top')).to.equal('https://example.com/foo/bar#top')
    expect(join('https://example.com', 'foo', 'bar', '?hello=world', '#top')).to.equal('https://example.com/foo/bar?hello=world#top')
  })
})
