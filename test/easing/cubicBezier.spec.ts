import { expect } from 'chai'
import cubicBezier from '../../src/easing/cubicBezier'
import { identity, compare } from './util'

describe('cubicBezier', () => {
  it('should throw an error if the first or third argument is out of range [0, 1]', () => {
    const fns = [
      () => cubicBezier(-0.1, 0, 1, 1),
      () => cubicBezier(1.1, 0, 1, 1),
      () => cubicBezier(0, 0, -0.1, 1),
      () => cubicBezier(0, 0, 1.1, 1),
    ]
    for (const fn of fns) {
      expect(fn).to.throw()
    }
  })
  it('linear', () => {
    const linear = cubicBezier(0, 0, 1, 1)
    expect(compare(linear, identity)).to.equal(true)
  })

  it('should be symetrical', () => {
    const a = Math.random()
    const b = 2 * Math.random() - 0.5
    const c = 1 - a
    const d = 1 - b
    const easing = cubicBezier(a, b, c, d)
    const sym = (x: number): number => 1 - easing(1 - x)
    expect(compare(easing, sym)).to.equal(true)

    // increase coverage
    const a1 = 0.000001
    const b1 = 2 * a1 - 0.5
    const c1 = 1 - a1
    const d1 = 1 - b1
    const easing1 = cubicBezier(a1, b1, c1, d1)
    const sym1 = (x: number): number => 1 - easing1(1 - x)
    expect(compare(easing1, sym1)).to.equal(true)
  })
})
