import cubicBezier from '../../src/easing/cubicBezier'
import easeOut from '../../src/easing/easeOut'
import { compare } from './util'

describe('easeOut', () => {
  it('should be equal', () => {
    const easing = cubicBezier(0.0, 0.0, 0.58, 1.0)
    expect(compare(easeOut, easing)).to.equal(true)
  })
})
