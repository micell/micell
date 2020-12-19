import remove from './remove'

export default function isEnabled (): boolean {
  const key = '@key@'
  const value = '1'
  const re = new RegExp(`(?:^|; )${key}=${value}(?:;|$)`)

  document.cookie = `${key}=${value};path=/;`

  const enabled = re.test(document.cookie)

  /* istanbul ignore else */
  if (enabled) {
    remove(key)
  }

  return enabled
}
