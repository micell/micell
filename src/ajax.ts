import isObject from './lang/isObject'
import isString from './lang/isString'

export interface Options {
  async?: boolean;
  beforeSend?: (xhr: XMLHttpRequest) => void | boolean;
  data?: any;
  headers?: { [key: string]: string };
  method?: string;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
}

export default function ajax (url: string, options: Options = {}): Promise<XMLHttpRequest> {
  return new Promise((resolve, reject) => {
    const {
      async = true,
      beforeSend = (): any => {},
      data = null,
      headers = {},
      method = 'get',
      responseType = 'json',
      timeout = 0
    } = options

    const xhr = new XMLHttpRequest()

    xhr.open(method, url, async)

    let timerId: number

    if (timeout) {
      timerId = window.setTimeout(() => {
        reject(new Error(`the xhr request timeout ${timeout}ms`))
      }, timeout)
    }

    xhr.onerror = (): void => {
      reject(new Error('unknown error'))
    }

    xhr.onreadystatechange = (): void => {
      if (xhr.readyState === 4) {
        if (timeout && timerId !== undefined) clearTimeout(timerId)
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
