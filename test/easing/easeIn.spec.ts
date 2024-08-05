import { describe, expect, it } from 'vitest'
import cubicBezier from '../../src/easing/cubicBezier'
import easeIn from '../../src/easing/easeIn'
import { compare } from './util'

describe('easeIn', () => {
  it('should be equal', () => {
    const easing = cubicBezier(0.42, 0.0, 1.0, 1.0)
    expect(compare(easeIn, easing)).to.equal(true)
  })
})
