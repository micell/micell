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

type EasingFunction = (x: number) => number

interface Easings {
  [key: string]: EasingFunction;
}

const easings: Easings = {
  linear,
  ease,
  'ease-in': easeIn,
  'ease-in-out': easeInOut,
  'ease-out': easeOut
}

const reEasingKeyword = /^(linear|ease|ease-in|ease-in-out|ease-out)$/
const reCubicBezier = /^cubic-bezier\(\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*\)$/

export interface Options {
  x?: number;
  y?: number;
  left?: number;
  top?: number;
  easing?: string;
  behavior?: ScrollBehavior;
}

export default function scrollTo (
  elOrWindow: Element | Window | number | Options,
  x: number | Options = 0,
  y = 0
): void {
  let el: any = window
  let options: Options = {}

  if (isElement(elOrWindow) || isWindow(elOrWindow)) {
    el = elOrWindow
    if (isObject(x)) {
      options = x as Options
    } else {
      options.x = x as number
      options.y = y
    }
  } else {
    if (isObject(elOrWindow)) {
      options = elOrWindow as Options
    } else {
      options.x = (elOrWindow as number) || 0
      options.y = x as number
    }
  }

  if (!hasOwn(options, 'x')) options.x = options.left || 0
  if (!hasOwn(options, 'y')) options.y = options.top || 0

  const innerScrollTo = (opts: Options): void => {
    const {
      x: left,
      y: top,
      behavior
    } = opts;
    if (isFunction(el.scrollTo)) {
      (el as Window).scrollTo({ left, top, behavior })
    } else {
      if (left !== undefined) {
        (el as Element).scrollLeft = left;
      }
      if (top !== undefined) {
        (el as Element).scrollTop = top
      }
    }
  }

  if (options.easing) {
    let easingFn: EasingFunction
    if (reEasingKeyword.test(options.easing)) {
      easingFn = easings[options.easing]
    } else if (reCubicBezier.test(options.easing)) {
      const matched = options.easing.match(reCubicBezier)
      let x1 = 0
      let y1 = 0
      let x2 = 0
      let y2 = 0
      if (matched) {
        x1 = Number(matched[1])
        y1 = Number(matched[2])
        x2 = Number(matched[3])
        y2 = Number(matched[4])
      }
      easingFn = cubicBezier(x1, y1, x2, y2)
    } else {
      innerScrollTo(options)
      return
    }

    const minDuration = 150
    const maxDuration = 500
    const startX = scrollX(el)
    const startY = scrollY(el)
    // @ts-ignore
    const diffX = options.x - startX
    // @ts-ignore
    const diffY = options.y - startY
    const diff = Math.max(Math.abs(diffX), Math.abs(diffY))
    const duration = Math.min(minDuration + 100 * (diff / 1000), maxDuration)
    const tickTime = 1000 / 16
    const tickTotal = Math.ceil(duration / tickTime)
    let nextX = startX
    let nextY = startY
    let start: number
    let tickCount = 0

    const runScroll = (time: number): void => {
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
