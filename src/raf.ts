import isBrowser from './_internal/isBrowser'
import now from './_internal/performance-now'

const vendors = ['webkit', 'moz']
const root = isBrowser ? window : global
const name = 'AnimationFrame'
// @ts-ignore
let raf = root[`request${name}`]
// @ts-ignore
let caf = root[`cancel${name}`]

for (let i = 0; i < vendors.length && !raf; i++) {
  // @ts-ignore
  raf = root[`${vendors[i]}Request${name}`]
  // @ts-ignore
  caf = root[`${vendors[i]}Cancel${name}`]
}

type AnyFunc = (...args: any[]) => void;
interface QueueItem {
  timerId: number;
  cancelled: boolean;
  callback: AnyFunc;
}

if (!raf || !caf) {
  const queue: Array<QueueItem> = []
  const tick = 1000 / 60
  let lastTime = 0
  let id = 0
  raf = function (callback: AnyFunc): number {
    if (queue.length === 0) {
      const nowTime = now()
      const next = Math.max(0, tick - (nowTime - lastTime))
      lastTime = nowTime + next
      setTimeout(() => {
        const copiedQueue = queue.slice()
        queue.length = 0
        for (let i = 0; i < copiedQueue.length; i++) {
          if (!copiedQueue[i].cancelled) {
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
    const timerId = id++
    queue.push({
      timerId,
      callback,
      cancelled: false
    })
    return timerId
  }

  caf = function (timerId: number): void {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].timerId === timerId) {
        queue[i].cancelled = true
      }
    }
  }
}

function exposeRaf (fn: AnyFunc): number {
  return raf.call(root, fn)
}

exposeRaf.cancel = function (timerId: number): void {
  caf.call(root, timerId)
}

export default exposeRaf
