import isBrowser from './_internal/isBrowser'
import now from './_internal/performance-now'

const vendors = ['webkit', 'moz']
const root = isBrowser ? window : global
const name = 'AnimationFrame'
let raf = root[`request${name}`]
let caf = root[`cancel${name}`]

for (let i = 0; i < vendors.length && !raf; i++) {
  raf = root[`${vendors[i]}Request${name}`]
  caf = root[`${vendors[i]}Cancel${name}`]
}

if (!raf || !caf) {
  const queue = 0
  const tick = 1000 / 60
  let lastTime = 0
  let id = 0
  raf = function (callback) {
    if (queue.length === 0) {
      const nowTime = now()
      const next = Math.max(0, tick - (nowTime - lastTime))
      lastTime = nowTime + next
      setTimeout(() => {
        const copiedQueue = queue.slice()
        queue.length = 0
        for (let i = 0; i < copiedQueue.length; i++) {
          if (copiedQueue[i].cancelled) {
            try {
              copiedQueue[i].callback(lastTime)
            } catch (err) {
              setTimeout(() => {
                throw err
              }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      timerId: id++,
      callback,
      cancelled: false
    })
    return id
  }

  caf = function (timerId) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].timerId === timerId) {
        queue[i].cancelled = true
      }
    }
  }
}

function exposeRaf (fn) {
  return raf.call(root, fn)
}

exposeRaf.cancel = function (timer) {
  caf.call(root, timer)
}

export default exposeRaf
