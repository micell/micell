const dirname = (path: string, sep?: string): string => {
  const pathString = String(path)
  const lastSepIndex = pathString.lastIndexOf(sep || '/')
  const end = lastSepIndex > -1 ? lastSepIndex : 0
  return pathString.slice(0, end)
}

export default dirname
