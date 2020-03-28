import set from './set'
import { Options } from './types'

export default function setRaw (key: string, value: any, options?: Options): void {
  set(key, value, options, null)
}
