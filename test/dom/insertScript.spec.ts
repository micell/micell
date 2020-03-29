import { expect } from 'chai'
import insertScript from '../../src/dom/insertScript'

describe('insertScript', () => {
  it('should insert a <script> tag into document', () => {
    let url = 'http://example.com/app1.js'
    insertScript(url)
    const scripts = document.querySelectorAll('script')
    let src = ''
    for (const script of Array.from(scripts)) {
      if (script.src === url) {
        src = script.src
      }
    }
    expect(src).to.equal(url)
  })

  it('should return the inserted <script>', () => {
    let url = 'http://example.com/app2.js'
    const ret = insertScript(url)
    expect(ret.src).to.equal(url)
  })

  it('should insert a <script> tag with the specified attributes', () => {
    let url = 'http://example.com/app3.js'
    insertScript(url, {
      id: 'foo',
      async: true
    })
    const script = document.getElementById('foo') as HTMLScriptElement
    expect(script.async).to.equal(true)
  })

  it('should trigger the load event if script load is success', (done) => {
    let url = '/base/test/setup.js'
    const script = insertScript(url, {
      onload () {
        done()
      }
    })
    expect(script.onload).to.be.an('function')
  })

  it.skip('should trigger the error event if script load is failed', (done) => {
    let url = 'http://some-never-be-exist-domain.com/app.js'
    const script = insertScript(url, {
      onerror (e) {
        expect(e.type).to.equal('error')
        done()
      }
    })
    expect(script.onerror).to.be.an('function')
  })
})
