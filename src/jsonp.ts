import insertScript from './dom/insertScript'

export interface JsonpOptions {
  callback?: string;
  responseType?: string;
  timeout?: number;
}

export default function jsonp (url: string, options: JsonpOptions = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const {
      callback = '_callback',
      responseType = 'json',
      timeout = 0
    } = options
    const callbackName = `_callback${Date.now()}`
    const hasQuestion = url.indexOf('?') > -1
    let src = url
    if (hasQuestion) {
      src += '&'
    } else {
      src += '?'
    }
    src += `${encodeURIComponent(callback)}=${encodeURIComponent(callbackName)}`

    let timerId: number
    if (timeout) {
      // use `window.setTimeout` instead of `setTimeout` directly because type check
      timerId = window.setTimeout(() => {
        reject(new Error(`the request is timeout ${timeout}ms`))
      }, timeout)
    }

    // @ts-ignore
    window[callbackName] = (text: string): void => {
      if (timerId) clearTimeout(timerId)
      if (responseType === 'json') {
        try {
          resolve(JSON.parse(text))
        } catch (err) {
          reject(err)
        }
      } else {
        resolve(text)
      }
    }

    insertScript(src, {
      onerror (err: Error) {
        reject(err)
      }
    })
  })
}
