import hasOwn from '../../_internal/hasOwn'

export default function flattenEvents (events) {
  let listeners = []
  for (const type in events) {
    if (hasOwn(events, type)) {
      listeners = listeners.concat(events[type])
    }
  }
  return listeners
}
