import { expect } from 'chai'
import sinon from 'sinon'
import ajax from '../src/ajax'

describe('ajax', () => {
  let fakeTimer: sinon.SinonFakeTimers
  let fakeXhr: sinon.SinonFakeXMLHttpRequestStatic
  const requests: sinon.SinonFakeXMLHttpRequest[] = []

  before(() => {
    fakeTimer = sinon.useFakeTimers()
    fakeXhr = sinon.useFakeXMLHttpRequest()
    fakeXhr.onCreate = (xhr: sinon.SinonFakeXMLHttpRequest): void => {
      requests.push(xhr)
    }
  })

  after(() => {
    fakeTimer.restore()
    fakeXhr.restore()
  })

  it('should return a promise object', () => {
    expect(ajax('/')).to.be.instanceof(Promise)
    expect(requests.length).to.equal(1)
  })

  it('should send a request to the specified url', () => {
    const url = '/api/random'
    ajax(url)
    expect(requests[1].url).to.equal(url)
  })

  it('should send a request with get method by default', () => {
    ajax('/')
    expect(requests[2].method).to.equal('get')
  })

  it('should send a request with async mode by default', () => {
    ajax('/')
    expect(requests[3].async).to.equal(true)
  })

  it('should resolve with an XMLHttpRequest instance', (done) => {
    ajax('/').then((xhr) => {
      expect(xhr).to.be.instanceof(fakeXhr)
      done()
    })
    requests[4].respond(200, null, '')
  })

  it('should receive the response parsed with json by default', (done) => {
    const url = '/api/langs'
    const data = [
      { name: 'HTML', value: 'html' },
      { name: 'CSS', value: 'css' },
      { name: 'JavaScript', value: 'js' },
    ]
    ajax(url).then((xhr) => {
      expect(xhr.response).to.deep.equal(data)
      done()
    })
    requests[5].respond(
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(data),
    )
  })

  it('should send with the post method', () => {
    ajax('/', { method: 'post' })
    expect(requests[6].method).to.equal('post')
  })

  it('should send with the json encoding if the data is an object', () => {
    const data = { name: 'foo' }
    ajax('/', {
      method: 'post',
      data,
    })
    expect(requests[7].requestHeaders['content-type']).to.include(
      'application/json',
    )
    expect(requests[7].requestBody).to.equal(JSON.stringify(data))
  })

  it('should send with the application/x-www-form-urlencoded encoding if the data is a string', () => {
    const data = 'name=foo'
    ajax('/', {
      method: 'post',
      data,
    })
    expect(requests[8].requestHeaders['content-type']).to.include(
      'application/x-www-form-urlencoded',
    )
  })

  it('should send with the specified headers', () => {
    const headers = {
      'x-name': 'Foo',
    }
    ajax('/', { headers })
    expect(requests[9].requestHeaders['x-name']).to.equal(headers['x-name'])
  })

  it('should not parse the reponse', (done) => {
    ajax('/', { responseType: 'text' }).then((xhr) => {
      expect(xhr.response).to.equal('42')
      done()
    })
    requests[10].respond(200, null, '42')
  })

  it('should call the beforeSend callback with an XMLHttpRequest object before sending', (done) => {
    ajax('/', {
      beforeSend(xhr) {
        expect(xhr).to.be.instanceof(fakeXhr)
        done()
      },
    })
  })

  it('should not send if the beforeSend returns false', (done) => {
    const callback = sinon.spy()
    ajax('/', {
      beforeSend: () => false,
    }).then(callback)
    setTimeout(() => {
      expect(callback.notCalled).to.equal(true)
      done()
    }, 0)
    fakeTimer.tick(1)
  })

  it('should reject with an error', (done) => {
    ajax('/').catch((err) => {
      expect(err).to.be.instanceof(Error)
      done()
    })
    requests[13].error()
  })

  it('should reject with a timeout error', (done) => {
    ajax('/', { timeout: 3000 }).catch((err) => {
      expect(err.message).to.include('timeout')
      done()
    })
    fakeTimer.tick(5000)
  })
})
