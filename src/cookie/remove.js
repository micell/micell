import set from './set'

export default function remove (key, options) {
  let opts = { expires: -1 }

  if (options) {
    opts = { ...options, ...opts }
  }

  return set(key, 'a', opts)
}
