import cubicBezier from '../../src/easing/cubicBezier'
import ease from '../../src/easing/ease'
import { compare } from './util'

describe('ease', () => {
  it('should be equal', () => {
    const easing = cubicBezier(0.25, 0.1, 0.25, 1.0)
    expect(compare(ease, easing)).to.equal(true)
  })
})
