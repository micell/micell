import scrollX from '../../src/dom/scrollX'

describe('scrollX', () => {
  it('should return the expected scrollX', (done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/scrollX.html']
    window.scrollTo(100, 0)
    setTimeout(() => {
      expect(scrollX()).to.equal(100)
      done()
    })
  })
})
