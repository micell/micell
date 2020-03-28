const identity = x => x
const isApproximate = (a, b) => Math.abs(a - b) < 0.000001
const compare = (easing1, easing2) => {
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
