import isObject from './lang/isObject'
import isString from './lang/isString'

export default function ajax (url, options = {}) {
  return new Promise((resolve, reject) => {
    const {
      async = true,
      beforeSend = () => true,
      data = null,
      headers = {},
      method = 'get',
      responseType = 'json',
      timeout = 0
    } = options

    const xhr = new XMLHttpRequest()

    xhr.open(method, url, async)

    let timerId

    if (timeout) {
      timerId = setTimeout(() => {
        reject(new Error(`the xhr request timeout ${timeout}ms`))
      }, timeout)
    }

    xhr.onerror = () => {
      reject(new Error('unknown error'))
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (timeout) clearTimeout(timerId)
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr)
        } else {
          const err = new Error('the request is error')
          reject(err)
        }
      }
    }

    let sendData = null

    if (isObject(data)) {
      try {
        sendData = JSON.stringify(data)
        headers['content-type'] = 'application/json'
      } catch (err) {
        reject(err)
      }
    } else if (isString(data)) {
      headers['content-type'] = 'application/x-www-form-urlencoded'
    }

    for (const key in headers) {
      xhr.setRequestHeader(key, headers[key])
    }

    if (timeout) {
      xhr.timeout = timeout
    }

    xhr.responseType = responseType

    if (beforeSend(xhr) !== false) {
      xhr.send(sendData)
    }
  })
}
