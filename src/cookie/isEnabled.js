import remove from './remove'

export default function isEnabled () {
  const key = '@key@'
  const value = '1'
  const re = new RegExp(`(?:^|; )${key}=${value}(?:;|$)`)

  document.cookie = `${key}=${value}`

  const enabled = re.test(document.cookie)

  if (enabled) {
    remove(key)
  }

  return enabled
}
