const extname = (path: string): string => {
  const pathString = String(path)
  const lastDotIndex = pathString.lastIndexOf('.')
  let ext = ''

  if (lastDotIndex > -1) {
    ext = pathString.slice(lastDotIndex)
  }

  return ext
}

export default extname
