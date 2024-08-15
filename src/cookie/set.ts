import type { CookieEncoder, CookieOptions } from './types'
import convert from './util/convert'

export default function set(
  key: string,
  value: any,
  options: CookieOptions = {},
  encoder: CookieEncoder | null = encodeURIComponent,
): void {
  const attrsStr = convert(options)
  const valueStr = typeof encoder === 'function' ? encoder(value) : value
  const newCookie = `${key}=${valueStr}${attrsStr}`
  document.cookie = newCookie
}
