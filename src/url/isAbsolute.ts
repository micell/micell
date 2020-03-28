import isString from '../lang/isString'

export default function isAbsolute (url: string): boolean {
  return isString(url) && /^https?:\/\//.test(url)
}
