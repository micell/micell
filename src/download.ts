/*
* Modified FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/
import isBrowser from './_internal/isBrowser'

// TODO: add tests

const isMacOSWebView = () => /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)

function bom(file: File | Blob): File | Blob {
  if (/^\s*(?:text\/[^;\s/]*|application\/xml|[^;\s/]*\/[^;\s/]*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(file.type)) {
    return new Blob([String.fromCharCode(0xFEFF), file], { type: file.type })
  }
  return file
}

function corsEnabled(url: string): boolean {
  const xhr = new XMLHttpRequest()
  xhr.open('HEAD', url, false)
  try {
    xhr.send()
    // eslint-disable-next-line
  } catch (e) {}
  return xhr.status >= 200 && xhr.status <= 299
}

function downloadUrl(url: string, fileName: string) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    download(xhr.response, fileName)
  }
  xhr.onerror = function () {
    console.error('could not download file')
  }
  xhr.send()
}

function click(node: Node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (e) {
    const evt = document.createEvent('MouseEvents')
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
                          20, false, false, false, false, 0, null)
    node.dispatchEvent(evt)
  }
}

let download: (file: string | Blob | File, name?: string) => void

/* istanbul ignore else */
if (!isBrowser) {
  download = function download(): never {
    throw new Error('download is not support in pure Node.js')
  }
} else if ('download' in HTMLAnchorElement.prototype && !isMacOSWebView()) {
  download = function download(file: string | Blob | File, name?: string): void {
    const a = document.createElement('a')
    const fileName = name || (file as File).name || 'download'

    a.download = fileName
    a.rel = 'noopener'

    if (typeof file === 'string') {
      a.href = file
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          downloadUrl(file, fileName)
        } else {
          a.target = '_blank'
          click(a)
        }
      } else {
        click(a)
      }
    } else {
      const URL = window.URL || window.webkitURL
      a.href = URL.createObjectURL(file)
      setTimeout(() => URL.revokeObjectURL(a.href), 4E4) // 40s
      setTimeout(() => click(a), 0)
    }
  }
} else {
  if ('msSaveOrOpenBlob' in navigator) {
    download = function download(file: string | Blob | File, name?: string): void {
      const fileName = name || (file as File).name || 'download'

      if (typeof file === 'string') {
        if (corsEnabled(file)) {
          downloadUrl(file, fileName)
        } else {
          const a = document.createElement('a')
          a.href = file
          a.target = '_blank'
          setTimeout(() => click(a))
        }
      } else {
        navigator.msSaveOrOpenBlob(bom(file), fileName)
      }
    }
  } else {
    download = function download(file: string | Blob | File, name?: string): void {
      let popup = window.open('', '_blank')
      if (popup) {
        popup.document.title = 'downloading...'
        popup.document.body.innerText = 'downloading...'
      }
      const fileName = name || (file as File).name || 'download'

      if (typeof file === 'string') {
        downloadUrl(file, fileName)
        return
      }

      const force = file.type === 'application/octet-stream'
      // @ts-ignore
      const isSafari = /constructor/i.test(String(window.HTMLElement)) || String(window.safari || '')
      const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

      if ((isChromeIOS || (force && isSafari) || isMacOSWebView()) && typeof FileReader !== 'undefined') {
        // Safari doesn't allow downloading of blob URLs
        const reader = new FileReader()
        reader.onloadend = function () {
          let url = reader.result as string || ''
          url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
          if (popup) {
            popup.location.href = url
          } else {
            window.location.href = url
          }
          popup = null
        }
        reader.readAsDataURL(file)
      } else {
        const URL = window.URL || window.webkitURL
        const url = URL.createObjectURL(file)
        if (popup) popup.location.href = url
        else location.href = url
        popup = null
        setTimeout(function () { URL.revokeObjectURL(url) }, 4E4) // 40s
      }
    }
  }
}

export default download
