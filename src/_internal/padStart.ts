const padStart = (str: string = '', len: number = 0, chars: string = ''): string => {
  const strValue = String(str)
  const charsValue = String(chars)

  let prefix = ''
  const strLen = strValue.length
  const prefixLen = len - strLen

  while (prefix.length < prefixLen) {
    prefix += charsValue
  }

  prefix = prefix.slice(0, prefixLen)

  return prefix + strValue
}

export default padStart
