import set from './set'
import { Options } from './types'

export default function remove (key: string, options?: Options): void {
  let opts = { expires: -1 }

  if (options) {
    opts = { ...options, ...opts }
  }

  set(key, 'a', opts)
}
