import set from './set'
import { CookieOptions } from './types'

export default function remove (key: string, options?: CookieOptions): void {
  let opts = { expires: -1 }

  if (options) {
    opts = { ...options, ...opts }
  }

  set(key, 'a', opts)
}
