import set from './set'
import { Options } from './types'

export default function setJson (key: string, value: any, options?: Options): void {
  set(key, value, options, JSON.stringify)
}
