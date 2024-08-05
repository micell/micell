import { describe, expect, it } from 'vitest'
import delay from '../src/delay'

describe('delay', () => {
  it('should return a promise', () => {
    expect(delay()).to.be.instanceof(Promise)
  })

  it('should be resolved after the specified time', async () => {
    const run = () => {
      return new Promise((resolve) => {
        delay(100).then(() => {
          resolve(true)
        })
      })
    }
    // @ts-ignore
    await expect(run()).resolves.to.equal(true)
  })
})
