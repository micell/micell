import { expect } from 'chai'
import cubicBezier from '../../src/easing/cubicBezier'
import easeInOut from '../../src/easing/easeInOut'
import { compare } from './util'

describe('easeInOut', () => {
  it('should be equal', () => {
    const easing = cubicBezier(0.42, 0.0, 0.58, 1.0)
    expect(compare(easeInOut, easing)).to.equal(true)
  })
})
