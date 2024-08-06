import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import jsonp from '../src/jsonp'

describe('jsonp', () => {
  beforeEach(() => {
    vi.useFakeTimers({
      now: 0,
    })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should receive the response data with json parsing', async () => {
    // @ts-ignore
    await expect(jsonp('/mocks/jsonp/jsonp.js')).resolves.to.equal(1)
  })

  it('should handle the query string right', async () => {
    // @ts-ignore
    await expect(jsonp('/mocks/jsonp/jsonp.js?v=1')).resolves.to.equal(1)
  })

  it('should reject with the parsign error', async () => {
    // @ts-ignore
    await expect(jsonp('/mocks/jsonp/jsonp-invalid.js')).rejects.to.instanceof(
      Error,
    )
  })

  it('should receive the response data without parsing', async () => {
    await expect(
      jsonp('/mocks/jsonp/jsonp.js', {
        responseType: 'text',
      }),
      // @ts-ignore
    ).resolves.to.equal('1')
  })

  it('should reject with an error', async () => {
    // @ts-ignore
    await expect(jsonp('/mocks/jsonp/jsonp-error.js')).rejects.to.instanceof(
      Error,
    )
  })
})
