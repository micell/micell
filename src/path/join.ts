const join = (...args: string[]): string => {
  if (args.length === 0) return ''
  return args.join('/').replace(/[/]+/g, '/')
}

export default join
