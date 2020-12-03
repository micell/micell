import { expect } from 'chai'
import sinon from 'sinon'

const rafNames = ['requestAnimationFrame', 'webkitRequestAnimationFrame', 'mozRequestAnimationFrame']
const cafNames = ['cancelAnimationFrame', 'webkitCancelAnimationFrame', 'mozCancelAnimationFrame']

const emptyRafs = () => {
  const originRafs: { [key: string]: any } = Object.create(null)
  const originCafs: { [key: string] : any } = Object.create(null)
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
  before(() => {
  })

  it('should invoke the next callback continuely', (done) => {
    // @ts-ignore
    import('../src/raf')
      .then((mod) => {
        const raf = mod.default
        const tick = 1000 / 60
        const start = Date.now()
        let count = 0
        raf(function next (ht) {
          expect(ht > 0).to.equal(true)

          if (count > 10) {
            const elapsed = Date.now() - start
            expect(elapsed > tick * 9).to.equal(true)
            done()
          } else {
            count++
            raf(next)
          }
        })
      })
      .catch(done)
  })

  it('should invoke the next callback continuely without native raf', (done) => {
    const resetRafs = emptyRafs()
    // @ts-ignore
    import('../src/raf?non-native')
      .then((mod) => {
        const raf = mod.default
        const tick = 1000 / 60
        const start = Date.now()
        let count = 0
        // @ts-ignore
        raf(function next (ht) {
          expect(ht > 0).to.equal(true)

          if (count > 10) {
            const elapsed = Date.now() - start
            expect(elapsed > tick * 9).to.equal(true)
            resetRafs()
            done()
          } else {
            count++
            raf(next)
          }
        })
      })
      .catch((err) => {
        resetRafs()
        done(err)
      })
  })

  it('should cancel the callback', (done) => {
    // @ts-ignore
    import('../src/raf')
      .then((mod) => {
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
        raf(() => {
          expect(spy1.called).to.equal(true)
          expect(spy2.called).to.equal(false)
          expect(spy3.called).to.equal(true)
          done()
        })
      })
      .catch(done)
  })

  it('should cancel the callback without native raf', (done) => {
    const resetRafs = emptyRafs()
    // @ts-ignore
    import('../src/raf?non-native')
      .then((mod) => {
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
        raf(() => {
          expect(spy1.called).to.equal(true)
          expect(spy2.called).to.equal(false)
          expect(spy3.called).to.equal(true)
          resetRafs()
          done()
        })
      })
      .catch((err) => {
        resetRafs()
        done(err)
      })
  })

  it('should throw in the callback', (done) => {
    // @ts-ignore
    import('../src/raf')
      .then((mod) => {
        const raf = mod.default
        const onError = (): void => {
          done()
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
      .catch(done)
  })

  it('should throw in the callback without native raf', (done) => {
    const resetRafs = emptyRafs()
    // @ts-ignore
    import('../src/raf?non-native')
      .then((mod) => {
        const raf = mod.default
        const onError = (): void => {
          resetRafs()
          done()
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
      .catch((err) => {
        resetRafs()
        done(err)
      })
  })
})
