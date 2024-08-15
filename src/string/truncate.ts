import isCJK from '../char/isCJK'

export interface TruncateOptions {
  length?: number
  omission?: string
  countType?: number
}

export default function truncate(str = '', options: TruncateOptions = {}): string {
  const { length, omission = '...', countType = 0 } = options
  const ensureStr = String(str)
  const len = ensureStr.length
  const countLen = length || len
  const fullCount = countType === 1 ? 2 : 1
  const halfCount = countType === 2 ? 0.5 : 1
  let count = 0
  let i = 0

  for (; i < len; i++) {
    if (isCJK(ensureStr.charAt(i))) {
      count += fullCount
    } else {
      count += halfCount
    }
    if (count > countLen) {
      break
    }
  }

  const truncatedStr = ensureStr.slice(0, i)
  return `${truncatedStr}${truncatedStr.length < ensureStr.length ? omission : ''}`
}
