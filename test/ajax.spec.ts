import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ajax from '../src/ajax'

/**
 * Minimal XMLHttpRequest double: records the request, then lets the test
 * complete it with `respond()` or fail it with `error()`.
 */
class FakeXMLHttpRequest {
  static instances: FakeXMLHttpRequest[] = []

  method = ''
  url = ''
  async = true
  requestHeaders: Record<string, string> = {}
  requestBody: unknown = null
  responseType = ''
  timeout = 0
  readyState = 0
  status = 0
  response: unknown = null
  onreadystatechange: (() => void) | null = null
  onerror: (() => void) | null = null

  constructor() {
    FakeXMLHttpRequest.instances.push(this)
  }

  open(method: string, url: string, async = true) {
    this.method = method
    this.url = url
    this.async = async
    this.readyState = 1
  }

  setRequestHeader(key: string, value: string) {
    this.requestHeaders[key] = value
  }

  send(body: unknown) {
    this.requestBody = body
  }

  abort() {}

  respond(status: number, _headers: Record<string, string> | null, body: string) {
    this.status = status
    if (this.responseType === 'json') {
      this.response = body === '' ? null : JSON.parse(body)
    } else {
      this.response = body
    }
    this.readyState = 4
    this.onreadystatechange?.()
  }

  error() {
    this.onerror?.()
  }
}

describe('ajax', () => {
  const requests = FakeXMLHttpRequest.instances

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('XMLHttpRequest', FakeXMLHttpRequest)
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
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
    await expect(run()).resolves.to.be.instanceof(FakeXMLHttpRequest)
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
          resolve((xhr as XMLHttpRequest).response)
        })
        requests[5].respond(200, { 'Content-Type': 'application/json' }, JSON.stringify(data))
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
    expect(requests[7].requestHeaders['content-type']).to.include('application/json')
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
          resolve((xhr as XMLHttpRequest).response)
        })
        requests[10].respond(200, null, '42')
      })
    }
    await expect(run()).resolves.to.equal('42')
  })

  it('should call the beforeSend callback with an XMLHttpRequest object before sending', async () => {
    const run = () => {
      return new Promise((resolve) => {
        ajax('/', {
          beforeSend(xhr) {
            resolve(xhr)
            return undefined
          },
        })
        requests[11].respond(200, null, '')
      })
    }
    await expect(run()).resolves.to.be.instanceof(FakeXMLHttpRequest)
  })

  it('should not send if the beforeSend returns false', async () => {
    const run = async () => {
      return new Promise((resolve) => {
        const callback = vi.fn()
        ajax('/', {
          beforeSend: () => false,
        }).then(callback)
        setTimeout(() => {
          resolve(callback.mock.calls.length === 0)
        }, 0)
        vi.advanceTimersByTime(1)
      })
    }
    await expect(run()).resolves.to.equal(true)
  })

  it('should reject with an error', async () => {
    const run = () => {
      return new Promise((_resolve, reject) => {
        ajax('/').catch(reject)
        requests[13].error()
      })
    }
    await expect(run()).rejects.to.be.instanceof(Error)
  })

  it('should reject with a timeout error', async () => {
    const run = () => {
      return new Promise((_resolve, reject) => {
        ajax('/', { timeout: 3000 }).catch(reject)
        vi.advanceTimersByTime(3001)
      })
    }
    await expect(run()).rejects.to.be.instanceof(Error)
  })
})
