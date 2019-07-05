import hasOwn from '../../_internal/hasOwn'
import computeExpires from './computeExpires'

// Convert an object to a cookie option string
export default function convert (opts) {
  let res = ''

  for (const key in opts) {
    if (hasOwn(opts, key)) {
      if (/^expires$/i.test(key)) {
        let expires = opts[key]

        if (typeof expires !== 'object') {
          expires += typeof expires === 'number' ? 'D' : ''
          expires = computeExpires(expires)
        }
        res += `;${key}=${expires.toUTCString()}`
      } else if (/^secure$/.test(key)) {
        if (opts[key]) {
          res += `;${key}`
        }
      } else {
        res += `;${key}=${opts[key]}`
      }
    }
  }

  if (!hasOwn(opts, 'path')) {
    res += ';path=/'
  }

  return res
}
