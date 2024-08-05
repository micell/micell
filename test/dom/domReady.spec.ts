import { describe, expect, it } from 'vitest'
import sinon from 'sinon'
import domReady from '../../src/dom/domReady'

describe('domReady', () => {
  it('should execute the argument function after DOM ready', async () => {
    const callback = sinon.fake()
    const run = () => {
      return new Promise((resolve) => {
        domReady(() => {
          callback()
          resolve(callback.calledOnce)
        })
      })
    }
    // @ts-ignore
    await expect(run()).resolves.to.equal(true)
  })
})
