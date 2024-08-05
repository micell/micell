import { describe, expect, it } from 'vitest'
import cubicBezier from '../../src/easing/cubicBezier'
import ease from '../../src/easing/ease'
import easeIn from '../../src/easing/easeIn'
import easeInOut from '../../src/easing/easeInOut'
import easeOut from '../../src/easing/easeOut'
import linear from '../../src/easing/linear'
import index from '../../src/easing/index'

describe('easing/index', () => {
  it('should export the right bindings', () => {
    expect(index.cubicBezier).to.equal(cubicBezier)
    expect(index.ease).to.equal(ease)
    expect(index.easeIn).to.equal(easeIn)
    expect(index.easeInOut).to.equal(easeInOut)
    expect(index.easeOut).to.equal(easeOut)
    expect(index.linear).to.equal(linear)
  })
})
