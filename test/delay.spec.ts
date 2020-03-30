import { expect } from 'chai'
import sinon from 'sinon'
import delay from '../src/delay'

describe('delay', () => {
  let clock: sinon.SinonFakeTimers

  before(() => {
    clock = sinon.useFakeTimers()
  })

  after(() => {
    if (clock) {
      clock.restore()
    }
  })

  it('should return a promise', () => {
    expect(delay()).to.be.instanceof(Promise)
  })

  it('should be resolved after the specified time', (done) => {
    const cb = sinon.fake()
    delay(100).then(() => {
      cb()
      expect(cb.calledOnce).to.equal(true)
      done()
    })
    if (clock) {
      clock.tick(99)
    }
    expect(cb.notCalled).to.equal(true)
    if (clock) {
      clock.tick(1)
    }
  })
})
