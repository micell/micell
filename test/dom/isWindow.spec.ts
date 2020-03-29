import { expect } from 'chai'
import isWindow from '../../src/dom/isWindow'

describe('isWindow', () => {
  it('should return true', () => {
    const iframe = document.createElement('iframe')
    iframe.src = 'about:blank'
    document.body.appendChild(iframe)

    expect(isWindow(window)).to.equal(true)
    expect(isWindow(iframe.contentWindow)).to.equal(true)
  })

  it('should return false', () => {
    expect(isWindow(undefined)).to.equal(false)
    expect(isWindow({})).to.equal(false)
    expect(isWindow(document)).to.equal(false)
  })
})
