import { describe, expect, it } from 'vitest'

describe('_internal/performance-now', () => {
  it('should return a non-zero value', async () => {
    // @ts-ignore
    const mod = await import('../../src/_internal/performance-now')
    const now = mod.default
    const time = now()
    expect(time).to.gt(0)
  })

  it('should return an integer if window.performance is not suppored', async () => {
    const originalPerformance = window.performance
    // @ts-ignore
    window.performance = null
    try {
      const mod = await import(
        // @ts-ignore
        '../../src/_internal/performance-now?no-performance'
      )
      const now = mod.default
      const time = now()
      expect(Math.round(time) - time).to.equal(0)
    } finally {
      // @ts-ignore
      window.performance = originalPerformance
    }
  })
})
