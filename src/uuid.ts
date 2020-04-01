/**
 * Generate a uuid from pseudo-random numbers
 *
 * Ref: https://tools.ietf.org/html/rfc4122
 */
import isBrowser from './_internal/isBrowser'

const hexDigits = '0123456789abcdef'
const maxUint32 = Math.pow(2, 32) - 1

let random: () => number = Math.random

if (isBrowser && typeof window.Uint32Array === 'function' &&
  ((window.crypto && typeof window.crypto.getRandomValues === 'function') ||
  // @ts-ignore
  (window.msCrypto && typeof window.msCrypto.getRandomValues === 'function'))) {
  random = (): number => window.crypto.getRandomValues(new Uint32Array(1))[0] / maxUint32
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
