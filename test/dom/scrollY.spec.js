import scrollY from '../../src/dom/scrollY'

describe('scrollY', () => {
  it('should return the expected scrollY', (done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/scrollY.html']
    window.scrollTo(0, 100)
    setTimeout(() => {
      expect(scrollY()).to.equal(100)
      done()
    })
  })
})
