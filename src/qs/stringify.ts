import hasOwn from '../_internal/hasOwn'
import isObject from '../lang/isObject'
import type { Query } from './types'

export default function stringify(query: Query): string {
  const pairs = []

  /* istanbul ignore else */
  if (isObject(query)) {
    for (const name in query) {
      /* istanbul ignore else */
      if (hasOwn(query, name)) {
        const value = query[name]
        const encodedName = encodeURIComponent(name)
        if (Array.isArray(value)) {
          for (const v of value) {
            pairs.push(`${encodedName}=${encodeURIComponent(v)}`)
          }
        } else if (value === undefined) {
        } else if (value === null) {
          pairs.push(`${encodedName}=`)
        } else {
          pairs.push(`${encodedName}=${encodeURIComponent(value)}`)
        }
      }
    }
  }

  return pairs.join('&')
}
