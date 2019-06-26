import dirname from '../src/dirname';

describe('dirname', () => {
  it('should return the directory name of a path', () => {
    expect(dirname('hello')).to.equal('');
    expect(dirname('hello/world')).to.equal('hello');
    expect(dirname('/hello/world')).to.equal('/hello');
  });

  it('can use the second parameter to be the separator of the path', () => {
    expect(dirname('\\hello\\world', '\\')).to.equal('\\hello');
  });
});
