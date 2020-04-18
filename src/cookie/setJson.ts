import set from './set'
import { CookieOptions } from './types'

export default function setJson (key: string, value: any, options?: CookieOptions): void {
  set(key, value, options, JSON.stringify)
}
