import { expect } from 'chai'
import pageWidth from '../../src/dom/pageWidth'

describe('pageWidth', () => {
  before((done) => {
    // @ts-ignore
    document.documentElement.innerHTML =
      window.__FIXTURES__['test/fixtures/dom/pageWidth.html']
    done()
  })

  it('should return the width of document if the argument is missing', () => {
    expect(pageWidth()).to.equal(4000)
  })

  it('should throw a type error if the argument is not the specified type', () => {
    // @ts-ignore
    const fn = () => pageWidth({})
    expect(fn).to.throw(TypeError)
  })

  it('should return the expected pageWidth', () => {
    const el2 = document.getElementById('el2')
    if (el2) {
      expect(pageWidth(el2)).to.equal(5000)
    }
  })
})
