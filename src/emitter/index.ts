import Emitter from './Emitter'
import create from './create'
import emit from './emit'
import getListeners from './getListeners'
import off from './off'
import on from './on'
import once from './once'

export type { EventType, Listener, Events } from './types'

export default {
  Emitter,
  create,
  emit,
  getListeners,
  off,
  on,
  once,
}
