const identity = (x: number): number => x
const isApproximate = (a: number, b: number): boolean =>
  Math.abs(a - b) < 0.000001
type EasingFunc = (x: number) => number
const compare = (easing1: EasingFunc, easing2: EasingFunc): boolean => {
  const nums = [
    0,
    // increase coverage
    0.000001,
  ]
  for (let i = 1; i <= 100; i++) {
    nums.push(i / 100)
  }
  for (const num of nums) {
    if (!isApproximate(easing1(num), easing2(num))) {
      return false
    }
  }
  return true
}

export { identity, isApproximate, compare }
