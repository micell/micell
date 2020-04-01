import { expect } from 'chai'
import sinon from 'sinon'
import raf from '../src/raf'

describe('raf', () => {
  it('should invoke the next callback continuely', (done) => {
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

  it('should cancel the callback', (done) => {
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

  it('should throw in the callback', (done) => {
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
})
