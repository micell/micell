const getQuery = (
  name,
  {
    query = location.search
  } = {}
) => {
  let queryString = ''
  let value

  if (query) {
    const firstChar = query.charAt(0)

    if (firstChar === '?' || firstChar === '#') {
      queryString = query.slice(1)
    } else {
      queryString = query
    }

    const list = []

    queryString.split('&').forEach((part) => {
      if (part) {
        const equalSignIndex = part.indexOf('=')
        const nameString = equalSignIndex > -1
          ? part.slice(0, equalSignIndex) : part
        const valueString = equalSignIndex > -1
          ? part.slice(equalSignIndex + 1) : ''

        list.push({
          name: decodeURIComponent(nameString),
          value: decodeURIComponent(valueString)
        })
      }
    })

    const filteredList = list.filter(item => item.name === name)
    if (filteredList.length > 1) {
      value = filteredList.map(item => item.value)
    } else if (filteredList.length === 1) {
      value = filteredList[0].value
    }
  }

  return value
}

export default getQuery
