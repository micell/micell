const reDomain = /^(https?:\/\/)?([^\s:/]+\.){1,}[^\s:/]+(:\d+)?\/?$/
const reQueryOrHash = /[?#]/

const join = (...args: string[]): string => {
  const len = args.length
  let url = ''
  let sep = ''
  for (let i = 0; i < len; i++) {
    if (reQueryOrHash.test(args[i]) && sep === '/') {
      url = url.slice(0, -1)
      sep = ''
    }
    url += args[i]
    if (reDomain.test(url) && sep === '') {
      sep = '/'
    }
    if (i < len - 1) {
      url += sep
    }
  }
  url = url.replace(/(?<!:)[/]{2,}/g, '/')
  return url
}

export default join
