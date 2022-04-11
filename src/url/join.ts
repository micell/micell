const reDomain = /^(https?:\/\/)?([^\s:/.]{1,63}\.){1,126}[^\s:/.]{1,63}(:\d{1,5})?\/?$/
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
  url = url.replace(/([/]{2,})/g, (m, p1, offset) => {
    if (url[offset - 1] === ':') {
      return m
    }
    return '/'
  })
  return url
}

export default join
