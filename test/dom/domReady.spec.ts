import { describe, expect, it, vi } from 'vitest'
import domReady from '../../src/dom/domReady'

describe('domReady', () => {
  it('should execute the argument function after DOM ready', async () => {
    const callback = vi.fn()
    const run = () => {
      return new Promise((resolve) => {
        domReady(() => {
          callback()
          resolve(callback)
        })
      })
    }
    // @ts-ignore
    await expect(run()).resolves.to.toHaveBeenCalledOnce()
  })
})
