import { describe, beforeEach, expect, it } from 'vitest'
import sinon from 'sinon'

const rafNames = [
  'requestAnimationFrame',
  'webkitRequestAnimationFrame',
  'mozRequestAnimationFrame',
]
const cafNames = [
  'cancelAnimationFrame',
  'webkitCancelAnimationFrame',
  'mozCancelAnimationFrame',
]

const emptyRafs = () => {
  const originRafs: { [key: string]: any } = Object.create(null)
  const originCafs: { [key: string]: any } = Object.create(null)
  for (const name of rafNames) {
    // @ts-ignore
    const fn = window[name]
    if (fn) {
      originRafs[name] = fn
      // @ts-ignore
      window[name] = null
    }
  }
  for (const name of cafNames) {
    // @ts-ignore
    const fn = window[name]
    if (fn) {
      originCafs[name] = fn
      // @ts-ignore
      window[name] = null
    }
  }
  const resetRafs = () => {
    for (const name in originRafs) {
      // @ts-ignore
      window[name] = originRafs[name]
    }
    for (const name in originCafs) {
      // @ts-ignore
      window[name] = originCafs[name]
    }
  }

  return resetRafs
}

describe('raf', () => {
  beforeEach(() => {})

  it('should invoke the next callback continuely', async () => {
    const run = () => {
      return new Promise((resolve) => {
        import('../src/raf').then((mod) => {
          const raf = mod.default
          const tick = 1000 / 60
          const start = Date.now()
          let count = 0
          raf(function next() {
            if (count > 10) {
              const elapsed = Date.now() - start
              resolve(elapsed > tick * 9)
            } else {
              count++
              raf(next)
            }
          })
        })
      })
    }

    // @ts-ignore
    await expect(run()).resolves.to.equal(true)
  })

  it('should invoke the next callback continuely without native raf', async () => {
    const resetRafs = emptyRafs()
    const run = () => {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        import('../src/raf?non-native')
          .then((mod) => {
            const raf = mod.default
            const tick = 1000 / 60
            const start = Date.now()
            let count = 0
            raf(function next() {
              if (count > 10) {
                const elapsed = Date.now() - start
                resetRafs()
                resolve(elapsed > tick * 9)
              } else {
                count++
                raf(next)
              }
            })
          })
          .catch((err) => {
            resetRafs()
            reject(err)
          })
      })
    }

    // @ts-ignore
    await expect(run()).resolves.to.equal(true)
  })

  it('should cancel the callback', async () => {
    // @ts-ignore
    const mod = await import('../src/raf')
    const raf = mod.default
    const spy1 = sinon.spy()
    const spy2 = sinon.spy()
    const spy3 = sinon.spy()
    const timerId1 = raf(spy1)
    expect(timerId1).to.be.above(0)
    const timerId2 = raf(spy2)
    expect(timerId2).to.be.above(0)
    const timerId3 = raf(spy3)
    expect(timerId3).to.be.above(0)

    raf.cancel(timerId2)
    const run = () => {
      return new Promise((resolve) => {
        raf(() => {
          resolve([spy1.called, spy2.called, spy3.called])
        })
      })
    }
    await expect(run()).resolves.toEqual([true, false, true])
  })

  it('should cancel the callback without native raf', async () => {
    const resetRafs = emptyRafs()
    // @ts-ignore
    const mod = await import('../src/raf?non-native')
    const raf = mod.default
    const spy1 = sinon.spy()
    const spy2 = sinon.spy()
    const spy3 = sinon.spy()
    const timerId1 = raf(spy1)
    expect(timerId1).to.be.above(0)
    const timerId2 = raf(spy2)
    expect(timerId2).to.be.above(0)
    const timerId3 = raf(spy3)
    expect(timerId3).to.be.above(0)

    raf.cancel(timerId2)

    const run = () => {
      return new Promise((resolve) => {
        raf(() => {
          resolve([spy1.called, spy2.called, spy3.called])
          resetRafs()
        })
      })
    }

    await expect(run()).resolves.toEqual([true, false, true])
  })

  it('should throw in the callback', async () => {
    const run = () => {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        import('../src/raf').then((mod) => {
          const raf = mod.default
          const onError = (): void => {
            reject()
          }

          if (typeof window !== 'undefined') {
            window.onerror = onError
          } else if (typeof process !== 'undefined') {
            process.on('uncaughtException', onError)
          }
          raf(() => {
            throw new Error('error')
          })
        })
      })
    }
    await expect(run()).rejects.toThrow()
  })

  it('should throw in the callback without native raf', async () => {
    const resetRafs = emptyRafs()
    const run = () => {
      return new Promise((resolve, reject) => {
        // @ts-ignore
        import('../src/raf?non-native')
          .then((mod) => {
            const raf = mod.default
            const onError = (): void => {
              resetRafs()
              reject()
            }

            if (typeof window !== 'undefined') {
              window.onerror = onError
            } else if (typeof process !== 'undefined') {
              process.on('uncaughtException', onError)
            }
            raf(() => {
              throw new Error('error')
            })
          })
          .catch(() => {
            resetRafs()
          })
      })
    }
    await expect(run()).rejects.toThrow()
  })
})
