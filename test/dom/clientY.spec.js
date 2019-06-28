import clientY from '../../src/dom/clientY'

describe('clientY', () => {
  it('should return 0 if the argument is missing or not an element', () => {
    expect(clientY()).to.equal(0)
    expect(clientY({})).to.equal(0)
  })

  it('should return the expected clientY', (done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/clientY.html']
    setTimeout(() => {
      expect(clientY(document.getElementById('el1'))).to.equal(200)
      window.scrollTo(0, 100)
      expect(clientY(document.getElementById('el1'))).to.equal(100)
      done()
    }, 0)
  })
})
