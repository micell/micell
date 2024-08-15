import hasOwn from '../../_internal/hasOwn'
import type { CookieOptions } from '../types'
import computeExpires from './computeExpires'

// Convert an object to a cookie option string
export default function convert(opts: CookieOptions): string {
  let res = ''
  let key: keyof CookieOptions

  for (key in opts) {
    /* istanbul ignore else */
    if (hasOwn(opts, key)) {
      if (/^expires$/i.test(key)) {
        let expires = opts[key]

        if (typeof expires !== 'object') {
          expires += typeof expires === 'number' ? 'D' : ''
          expires = computeExpires(String(expires))
        }
        res += `;${key}=${expires.toUTCString()}`
      } else if (/^secure$/.test(key)) {
        if (opts[key]) {
          res += `;${key}`
        }
      } else {
        res += `;${key}=${String(opts[key])}`
      }
    }
  }

  if (!hasOwn(opts, 'path')) {
    res += ';path=/'
  }

  return res
}
