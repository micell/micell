import viewport from '../../src/dom/viewport'

describe('viewport', () => {
  before((done) => {
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/dom/viewport.html']
    done()
  })

  it('should return `{ width: 0, height: 0 }` if no argument', () => {
    expect(viewport()).to.deep.equal({ width: 0, height: 0 })
  })

  it('should return the window\'s viewport if a window object is passed', () => {
    const width = window.innerWidth || document.documentElement.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight
    expect(viewport(window)).to.deep.equal({ width, height })
  })

  it('should return the element\'s viewport if an element object is passed', () => {
    const element = document.getElementById('el1')
    const width = element.clientWidth
    const height = element.clientHeight
    expect(viewport(element)).to.deep.equal({ width, height })
  })
})
