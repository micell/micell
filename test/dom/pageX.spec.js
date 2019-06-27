import pageX from '../../src/dom/pageX'

describe('pageX', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    expect(pageX()).to.equal(0)
    expect(pageX({})).to.equal(0)
  })

  it('should return the expected pageX', (done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/pageX.html']
    setTimeout(() => {
      expect(pageX(document.getElementById('el1'))).to.equal(0)
      expect(pageX(document.getElementById('el2'))).to.equal(100)
      expect(pageX(document.getElementById('el3'))).to.equal(200)
      done()
    }, 0)
  })
})
