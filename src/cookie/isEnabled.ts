import remove from './remove'

export default function isEnabled (): boolean {
  const key = '@key@'
  const value = '1'
  const re = new RegExp(`(?:^|; )${key}=${value}(?:;|$)`)

  // TODO: set path to root?
  document.cookie = `${key}=${value}`

  const enabled = re.test(document.cookie)

  if (enabled) {
    remove(key)
  }

  return enabled
}
