import set from './set'
import { CookieOptions } from './types'

export default function setRaw(
  key: string,
  value: any,
  options?: CookieOptions,
): void {
  set(key, value, options, null)
}
