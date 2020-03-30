const identity = (x: number): number => x
const isApproximate = (a: number, b: number): boolean => Math.abs(a - b) < 0.000001
type EasingFunc = (x: number) => number
const compare = (easing1: EasingFunc, easing2: EasingFunc): boolean => {
  for (let i = 0; i < 100; i++) {
    if (!isApproximate(easing1(i / 100), easing2(i / 100))) {
      return false
    }
  }
  return true
}

export {
  identity,
  isApproximate,
  compare
}
