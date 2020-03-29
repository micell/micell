import { expect } from 'chai'
import sinon from 'sinon'
import delay from '../src/delay'

describe('delay', () => {
  let clock

  before(() => {
    clock = sinon.useFakeTimers()
  })

  after(() => {
    clock.restore()
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
    clock.tick(99)
    expect(cb.notCalled).to.equal(true)
    clock.tick(1)
  })
})
