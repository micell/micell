import hasOwn from '../_internal/hasOwn'
import isObject from '../lang/isObject'
import isFunction from '../lang/isFunction'
import linear from '../easing/linear'
import ease from '../easing/ease'
import easeIn from '../easing/easeIn'
import easeInOut from '../easing/easeInOut'
import easeOut from '../easing/easeOut'
import cubicBezier from '../easing/cubicBezier'
import raf from '../raf'
import isWindow from './isWindow'
import isElement from './isElement'
import scrollX from './scrollX'
import scrollY from './scrollY'

const easings = {
  linear,
  ease,
  'ease-in': easeIn,
  'ease-in-out': easeInOut,
  'ease-out': easeOut
}

const reEasingKeyword = /^(linear|ease|ease-in|ease-in-out|ease-out)$/
const reCubicBezier = /^cubic-bezier\(\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*\)$/

export default function scrollTo (elOrWindow, x = 0, y = 0) {
  let el = window
  let options = {}

  if (isElement(elOrWindow) || isWindow(elOrWindow)) {
    el = elOrWindow
    if (isObject(x)) {
      options = x
    } else {
      options.x = x
      options.y = y
    }
  } else {
    if (isObject(elOrWindow)) {
      options = elOrWindow
    } else {
      options.x = elOrWindow || 0
      options.y = x
    }
  }

  if (!hasOwn(options, 'x')) options.x = options.left || 0
  if (!hasOwn(options, 'y')) options.y = options.top || 0

  const innerScrollTo = (opts) => {
    if (isFunction(el.scrollTo)) {
      const {
        x: left,
        y: top,
        behavior
      } = opts
      el.scrollTo({ left, top, behavior })
    } else {
      el.scrollLeft = opts.x
      el.scrollTop = opts.y
    }
  }

  if (options.easing) {
    let easingFn
    if (reEasingKeyword.test(options.easing)) {
      easingFn = easings[options.easing]
    } else if (reCubicBezier.test(options.easing)) {
      const matched = options.easing.match(reCubicBezier)
      const x1 = matched[1]
      const y1 = matched[2]
      const x2 = matched[3]
      const y2 = matched[4]
      easingFn = cubicBezier(x1, y1, x2, y2)
    } else {
      innerScrollTo(options)
      return
    }

    const minDuration = 150
    const maxDuration = 500
    const startX = scrollX(el)
    const startY = scrollY(el)
    const diffX = options.x - startX
    const diffY = options.y - startY
    const diff = Math.max(Math.abs(diffX), Math.abs(diffY))
    const duration = Math.min(minDuration + 100 * (diff / 1000), maxDuration)
    const tickTime = 1000 / 16
    const tickTotal = Math.ceil(duration / tickTime)
    let nextX = startX
    let nextY = startY
    let start = null
    let tickCount = 0

    const runScroll = (time) => {
      if (!start) start = time
      if (tickCount <= tickTotal) {
        nextX = startX + diffX * Math.max(easingFn(tickCount / tickTotal), 1)
        nextY = startY + diffY * Math.max(easingFn(tickCount / tickTotal), 1)
        innerScrollTo({ x: nextX, y: nextY })
        tickCount++
        raf(runScroll)
      }
    }
    raf(runScroll)
  } else {
    innerScrollTo(options)
  }
}
