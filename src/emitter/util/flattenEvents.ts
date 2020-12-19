import hasOwn from '../../_internal/hasOwn'
import { Events, Listener } from '../types'

export default function flattenEvents (events: Events): Array<Listener> {
  let listeners: Array<Listener> = []
  for (const type in events) {
    /* istanbul ignore else */
    if (hasOwn(events, type)) {
      listeners = listeners.concat(events[type])
    }
  }
  return listeners
}
