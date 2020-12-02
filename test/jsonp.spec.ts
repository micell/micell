import { expect } from 'chai'
import sinon from 'sinon'
import jsonp from '../src/jsonp'

describe('jsonp', () => {
  let clock: sinon.SinonFakeTimers

  before((done) => {
    // @ts-ignore
    document.documentElement.innerHTML = window.__FIXTURES__['test/fixtures/css.html']
    setTimeout(() => done(), 0)
    clock = sinon.useFakeTimers()
  })

  after(() => {
    clock.restore()
  })

  it('should receive the response data with json parsing', (done) => {
    jsonp('/base/test/jsonp.js')
      .then((data) => {
        expect(data).to.equal(1)
        done()
      })
  })

  it('should receive the response data without parsing', (done) => {
    jsonp('/base/test/jsonp.js', {
      responseType: 'text'
    })
      .then((data) => {
        expect(data).to.equal('1')
        done()
      })
  })

  it('should reject with an error', (done) => {
    jsonp('/base/test/jsonp-non-exist.js')
      .catch((err) => {
        expect(err).to.instanceOf(Error)
        done()
      })
  })
})
