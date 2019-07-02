/**
 * Generate a uuid from pseudo-random numbers
 *
 * Ref: https://tools.ietf.org/html/rfc4122
 */
const hexDigits = '0123456789abcdef'
const maxUint32 = Math.pow(2, 32) - 1

let random = Math.random

if (typeof window.Uint32Array === 'function' &&
  ((window.crypto && typeof window.crypto.getRandomValues === 'function') ||
  (window.msCrypto && typeof window.msCrypto.getRandomValues === 'function'))) {
  random = () => window.crypto.getRandomValues(new Uint32Array(1))[0] / maxUint32
}

export default function uuid () {
  let u = []

  for (let i = 0; i < 36; i++) {
    u[i] = hexDigits.charAt(random() * 16)
  }

  u[8] = u[13] = u[18] = u[23] = '-'
  u[14] = '4'
  u[19] = ((u[19] & 3) | 8).toString(16)
  return u.join('')
}
