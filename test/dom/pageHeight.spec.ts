import { expect } from 'chai'
import pageHeight from '../../src/dom/pageHeight'

describe('pageHeight', () => {
  before((done) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      window.__FIXTURES__['test/fixtures/dom/pageHeight.html']
    done()
  })

  it('should return the width of document if the argument is missing', () => {
    expect(pageHeight()).to.equal(4000)
  })

  it('should throw a type error if the argument is not the specified type', () => {
    // @ts-ignore
    const fn = () => pageHeight({})
    expect(fn).to.throw(TypeError)
  })

  it('should return the expected pageHeight', () => {
    const el2 = document.getElementById('el2')
    if (el2) {
      expect(pageHeight(el2)).to.equal(5000)
    }
  })
})
