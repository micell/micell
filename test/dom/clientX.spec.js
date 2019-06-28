import clientX from '../../src/dom/clientX'

describe('clientX', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    expect(clientX()).to.equal(0)
    expect(clientX({})).to.equal(0)
  })

  it('should return the expected clientX', (done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/clientX.html']
    setTimeout(() => {
      expect(clientX(document.getElementById('el1'))).to.equal(200)
      window.scrollTo(100, 0)
      expect(clientX(document.getElementById('el1'))).to.equal(100)
      done()
    }, 0)
  })
})
