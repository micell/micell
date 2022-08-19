import get from './get'

export default function getRaw(key: string): string {
  return get(key, null)
}
