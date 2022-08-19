import { expect } from 'chai'
import isInViewport from '../../src/dom/isInViewport'

describe('isInViewport', () => {
  before((done) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      window.__FIXTURES__['test/fixtures/dom/isInViewport.html']
    done()
  })

  it('should return false if the argument is missing or not an element', () => {
    // @ts-ignore
    expect(isInViewport()).to.equal(false)
    // @ts-ignore
    expect(isInViewport({})).to.equal(false)
  })

  it('should return true if the element is in viewport', () => {
    const el = document.getElementById('el1')
    el && expect(isInViewport(el)).to.equal(true)
  })

  it('should return false if the element is split by the viewport edge', () => {
    const el2 = document.getElementById('el2')
    const el3 = document.getElementById('el3')
    const el4 = document.getElementById('el4')
    const el5 = document.getElementById('el5')
    el2 && expect(isInViewport(el2)).to.equal(false)
    el3 && expect(isInViewport(el3)).to.equal(false)
    el4 && expect(isInViewport(el4)).to.equal(false)
    el5 && expect(isInViewport(el5)).to.equal(false)
  })

  it('should return false if the element is located in the outsite of viewport', () => {
    const el6 = document.getElementById('el6')
    const el7 = document.getElementById('el7')
    const el8 = document.getElementById('el8')
    const el9 = document.getElementById('el9')
    el6 && expect(isInViewport(el6)).to.equal(false)
    el7 && expect(isInViewport(el7)).to.equal(false)
    el8 && expect(isInViewport(el8)).to.equal(false)
    el9 && expect(isInViewport(el9)).to.equal(false)
  })
})
