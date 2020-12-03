import { expect } from 'chai'

describe('_internal/performance-now', () => {
  it('should return a decimal', (done) => {
    import('../../src/_internal/performance-now')
      .then((mod) => {
        const now = mod.default
        const time = now()
        expect(Math.round(time) - time).not.to.equal(0)
        done()
      })
      .catch(done)
  })

  it('should return an integer if window.performance is not suppored', (done) => {
    const originalPerformance = window.performance
    // @ts-ignore
    window.performance = null
    // @ts-ignore
    import('../../src/_internal/performance-now?no-performance')
      .then((mod) => {
        const now = mod.default
        const time = now()
        expect(Math.round(time) - time).to.equal(0)
        // @ts-ignore
        window.performance = originalPerformance
        done()
      })
      .catch((err) => {
        // @ts-ignore
        window.performance = originalPerformance
        done(err)
      })
  })
})
