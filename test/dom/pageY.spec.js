import pageY from '../../src/dom/pageY'

describe('pageY', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    expect(pageY()).to.equal(0)
    expect(pageY({})).to.equal(0)
  })

  it('should return the expected pageY', (done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/pageY.html']
    setTimeout(() => {
      expect(pageY(document.getElementById('el1'))).to.equal(0)
      expect(pageY(document.getElementById('el2'))).to.equal(100)
      expect(pageY(document.getElementById('el3'))).to.equal(200)
      done()
    }, 0)
  })
})
