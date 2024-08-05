import { describe, expect, it } from 'vitest'
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
      async: true,
    })
    const script = document.getElementById('foo') as HTMLScriptElement
    expect(script.async).to.equal(true)
  })

  it('should trigger the load event if script load is success', async ({
    skip,
  }) => {
    skip()
    const url = '/base/test/setup.js'
    let script: HTMLScriptElement | null = null
    const run = () => {
      return new Promise((resolve) => {
        script = insertScript(url, {
          onload() {
            resolve(void 0)
          },
        })
      })
    }
    await run()
    expect((script as unknown as HTMLScriptElement).onload).to.be.an('function')
  })

  it('should trigger the error event if script load is failed', async ({
    skip,
  }) => {
    skip()

    const url = 'http://some-never-be-exist-domain.com/app.js'
    let script: HTMLScriptElement | null = null
    const run = () => {
      return new Promise((resolve, reject) => {
        script = insertScript(url, {
          onerror(e: Event) {
            reject(e.type)
          },
        })
      })
    }
    // @ts-ignore
    await expect(run()).rejects.to.equal('error')
    expect((script as unknown as HTMLScriptElement).onerror).to.be.an(
      'function',
    )
  })
})
