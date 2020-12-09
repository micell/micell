/**
 * Generate a uuid from pseudo-random numbers
 *
 * Ref: https://tools.ietf.org/html/rfc4122
 */
import isBrowser from './_internal/isBrowser'

const hexDigits = '0123456789abcdef'
const maxUint32 = Math.pow(2, 32) - 1

let getRandomValues: (array: Uint32Array) => Uint32Array

if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
  getRandomValues = (array: Uint32Array): Uint32Array => window.crypto.getRandomValues(array)
  // @ts-ignore
} else if (window.msCrypto && typeof window.msCrypto.getRandomValues === 'function') {
  // @ts-ignore
  getRandomValues = (array: Uint32Array): Uint32Array => window.msCrypto.getRandomValues(array)
}

let random: () => number = Math.random

// @ts-ignore
if (isBrowser && typeof window.Uint32Array === 'function' && getRandomValues) {
  random = (): number => getRandomValues(new Uint32Array(1))[0] / maxUint32
}

export default function uuid (): string {
  const u: Array<string> = []

  for (let i = 0; i < 36; i++) {
    u[i] = hexDigits.charAt(random() * 16)
  }

  u[8] = u[13] = u[18] = u[23] = '-'
  u[14] = '4'
  u[19] = ((Number(u[19]) & 3) | 8).toString(16)
  return u.join('')
}
