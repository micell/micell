import { describe, beforeEach, afterEach, expect, it } from 'vitest'
import sinon from 'sinon'
import ajax from '../src/ajax'

describe('ajax', () => {
  let fakeTimer: sinon.SinonFakeTimers
  let fakeXhr: sinon.SinonFakeXMLHttpRequestStatic
  const requests: sinon.SinonFakeXMLHttpRequest[] = []

  beforeEach(() => {
    fakeTimer = sinon.useFakeTimers()
    fakeXhr = sinon.useFakeXMLHttpRequest()
    fakeXhr.onCreate = (xhr: sinon.SinonFakeXMLHttpRequest): void => {
      requests.push(xhr)
    }
  })

  afterEach(() => {
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

  it('should resolve with an XMLHttpRequest instance', async () => {
    const run = async () => {
      const ret = ajax('/')
      requests[4].respond(200, null, '')
      return ret
    }
    // @ts-ignore
    expect(run()).resolves.to.be.instanceof(fakeXhr)
  })

  it('should receive the response parsed with json by default', async () => {
    const url = '/api/langs'
    const data = [
      { name: 'HTML', value: 'html' },
      { name: 'CSS', value: 'css' },
      { name: 'JavaScript', value: 'js' },
    ]
    const run = () => {
      return new Promise((resolve) => {
        ajax(url).then((xhr) => {
          resolve(xhr.response)
        })
        requests[5].respond(
          200,
          { 'Content-Type': 'application/json' },
          JSON.stringify(data),
        )
      })
    }
    await expect(run()).resolves.to.deep.equal(data)
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

  it('should not parse the reponse', async () => {
    const run = () => {
      return new Promise((resolve) => {
        ajax('/', { responseType: 'text' }).then((xhr) => {
          resolve(xhr.response)
        })
        requests[10].respond(200, null, '42')
      })
    }
    // @ts-ignore
    await expect(run()).resolves.to.equal('42')
  })

  it('should call the beforeSend callback with an XMLHttpRequest object before sending', async () => {
    const run = () => {
      return new Promise((resolve) => {
        ajax('/', {
          beforeSend(xhr) {
            resolve(xhr)
          },
        })
        requests[11].respond(200, null, '')
      })
    }
    // @ts-ignore
    await expect(run()).resolves.to.be.instanceof(fakeXhr)
  })

  it('should not send if the beforeSend returns false', async () => {
    const run = async () => {
      return new Promise((resolve) => {
        const callback = sinon.spy()
        ajax('/', {
          beforeSend: () => false,
        }).then(callback)
        setTimeout(() => {
          resolve(callback.notCalled)
        }, 0)
        fakeTimer.tick(1)
      })
    }
    // @ts-ignore
    await expect(run()).resolves.to.equal(true)
  })

  it('should reject with an error', async () => {
    const run = () => {
      return new Promise((resolve, reject) => {
        ajax('/').catch(reject)
        requests[13].error()
      })
    }
    // @ts-ignore
    await expect(run()).rejects.to.be.instanceof(Error)
  })

  it('should reject with a timeout error', async () => {
    const run = () => {
      return new Promise((resolve, reject) => {
        ajax('/', { timeout: 3000 }).catch(reject)
        fakeTimer.tick(3001)
      })
    }
    // @ts-ignore
    await expect(run()).rejects.to.be.instanceof(Error)
  })
})
