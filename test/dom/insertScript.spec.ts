import { expect } from 'chai'
import insertScript from '../../src/dom/insertScript'

describe('insertScript', () => {
  it('should insert a <script> tag into document', () => {
    const url = 'http://example.com/app1.js'
    insertScript(url)
    const scripts = document.querySelectorAll('script')
    let src = ''
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i]
      if (script.src === url) {
        src = script.src
      }
    }
    expect(src).to.equal(url)
  })

  it('should return the inserted <script>', () => {
    const url = 'http://example.com/app2.js'
    const ret = insertScript(url)
    expect(ret.src).to.equal(url)
  })

  it('should insert a <script> tag with the specified attributes', () => {
    const url = 'http://example.com/app3.js'
    insertScript(url, {
      id: 'foo',
      async: true
    })
    const script = document.getElementById('foo') as HTMLScriptElement
    expect(script.async).to.equal(true)
  })

  it.skip('should trigger the load event if script load is success', (done) => {
    const url = '/base/test/setup.js'
    const script = insertScript(url, {
      onload () {
        done()
      }
    })
    expect(script.onload).to.be.an('function')
  })

  it.skip('should trigger the error event if script load is failed', (done) => {
    const url = 'http://some-never-be-exist-domain.com/app.js'
    const script = insertScript(url, {
      onerror (e: Event) {
        expect(e.type).to.equal('error')
        done()
      }
    })
    expect(script.onerror).to.be.an('function')
  })
})
