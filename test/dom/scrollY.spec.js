import scrollY from '../../src/dom/scrollY'

describe('scrollY', () => {
  before(() => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/scrollY.html']
  })

  it('should return the document\'s scrollY if the first parameter is missing or a window object', (done) => {
    window.scrollTo(0, 100)
    setTimeout(() => {
      expect(scrollY()).to.equal(100)
      expect(scrollY(window)).to.equal(100)
      done()
    })
  })

  it('should return the element\'s scrollY if the first parameter is an element', (done) => {
    const el = document.querySelector('.container')
    el.scrollTop = 100
    setTimeout(() => {
      expect(scrollY(el)).to.equal(100)
      done()
    })
  })

  it('should return 0 if the first parameter is not an element or a window or undefined', () => {
    expect(scrollY(null)).to.equal(0)
    expect(scrollY({})).to.equal(0)
  })
})
