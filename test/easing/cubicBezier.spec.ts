import { expect } from 'chai'
import cubicBezier from '../../src/easing/cubicBezier'
import { identity, compare } from './util'

describe('cubicBezier', () => {
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
    const sym = x => 1 - easing(1 - x)
    expect(compare(easing, sym)).to.equal(true)
  })
})
