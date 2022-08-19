const countLines = (text: string, newline?: string): number => {
  const textString = String(text)
  const newlineChar = newline || '\n'
  let index = -1
  let count = 0

  while ((index = textString.indexOf(newlineChar, index + 1)) > -1) {
    count++
  }

  // Todo: use regexp to check
  const isEndWithNewline =
    textString.lastIndexOf(newlineChar) ===
    textString.length - newlineChar.length

  // Todo: add a comment
  if (textString && !isEndWithNewline) {
    count++
  }

  return count
}

export default countLines
