import isInViewport from '../../src/dom/isInViewport'

describe('isInViewport', () => {
  before((done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/isInViewport.html']
    done()
  })

  it('should return false if the argument is missing or not an element', () => {
    expect(isInViewport()).to.equal(false)
    expect(isInViewport({})).to.equal(false)
  })

  it('should return true if the element is in viewport', () => {
    const el = document.getElementById('el1')
    expect(isInViewport(el)).to.equal(true)
  })

  it('should return false if the element is split by the viewport edge', () => {
    const el2 = document.getElementById('el2')
    const el3 = document.getElementById('el3')
    const el4 = document.getElementById('el4')
    const el5 = document.getElementById('el5')
    expect(isInViewport(el2)).to.equal(false)
    expect(isInViewport(el3)).to.equal(false)
    expect(isInViewport(el4)).to.equal(false)
    expect(isInViewport(el5)).to.equal(false)
  })

  it('should return false if the element is located in the outsite of viewport', () => {
    const el6 = document.getElementById('el6')
    const el7 = document.getElementById('el7')
    const el8 = document.getElementById('el8')
    const el9 = document.getElementById('el9')
    expect(isInViewport(el6)).to.equal(false)
    expect(isInViewport(el7)).to.equal(false)
    expect(isInViewport(el8)).to.equal(false)
    expect(isInViewport(el9)).to.equal(false)
  })
})
