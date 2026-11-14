import mod from '../emitter'

export * from '../emitter'
export const Emitter = mod.Emitter
export const create = mod.create
export const emit = mod.emit
export const getListeners = mod.getListeners
export const off = mod.off
export const on = mod.on
export const once = mod.once

export default mod
