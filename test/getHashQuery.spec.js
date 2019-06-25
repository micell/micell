import { getHashQuery } from '../src';

describe('getHashQuery', () => {
  it('should return undefined when the query name is not exist', () => {
    window.location.hash = '';
    expect(getHashQuery('foo')).to.equal(undefined);
  });

  it('should return the query value', () => {
    window.location.hash = '#?foo=Foo';
    expect(getHashQuery('foo')).to.equal('Foo');
  });

  it('should return the query value', () => {
    window.location.hash = '#foo=Foo';
    expect(getHashQuery('foo')).to.equal('Foo');
  });

  it('multiple query names', () => {
    window.location.hash = '#?foo=Foo&bar=Bar';
    expect(getHashQuery('foo')).to.equal('Foo');
    expect(getHashQuery('bar')).to.equal('Bar');
  });

  it('should return the empty string', () => {
    window.location.hash = '#?foo';
    expect(getHashQuery('foo')).to.equal('');
  });
});
