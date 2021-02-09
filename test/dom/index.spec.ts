import { expect } from 'chai'
import clientX from '../../src/dom/clientX'
import clientY from '../../src/dom/clientY'
import createEvent from '../../src/dom/createEvent'
import domReady from '../../src/dom/domReady'
import insertScript from '../../src/dom/insertScript'
import isElement from '../../src/dom/isElement'
import isInViewport from '../../src/dom/isInViewport'
import isWindow from '../../src/dom/isWindow'
import pageHeight from '../../src/dom/pageHeight'
import pageWidth from '../../src/dom/pageWidth'
import pageX from '../../src/dom/pageX'
import pageY from '../../src/dom/pageY'
import scrollTo from '../../src/dom/scrollTo'
import scrollX from '../../src/dom/scrollX'
import scrollY from '../../src/dom/scrollY'
import viewport from '../../src/dom/viewport'
import index from '../../src/dom/index'

describe('dom/index', () => {
  it('should export the right bindings', () => {
    expect(index.clientX).to.equal(clientX)
    expect(index.clientY).to.equal(clientY)
    expect(index.createEvent).to.equal(createEvent)
    expect(index.domReady).to.equal(domReady)
    expect(index.insertScript).to.equal(insertScript)
    expect(index.isElement).to.equal(isElement)
    expect(index.isInViewport).to.equal(isInViewport)
    expect(index.isWindow).to.equal(isWindow)
    expect(index.pageHeight).to.equal(pageHeight)
    expect(index.pageWidth).to.equal(pageWidth)
    expect(index.pageX).to.equal(pageX)
    expect(index.pageY).to.equal(pageY)
    expect(index.scrollTo).to.equal(scrollTo)
    expect(index.scrollX).to.equal(scrollX)
    expect(index.scrollY).to.equal(scrollY)
    expect(index.viewport).to.equal(viewport)
  })
})
