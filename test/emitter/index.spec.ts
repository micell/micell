import { expect } from 'chai'
import create from '../../src/emitter/create'
import emit from '../../src/emitter/emit'
import Emitter from '../../src/emitter/Emitter'
import getListeners from '../../src/emitter/getListeners'
import once from '../../src/emitter/once'
import on from '../../src/emitter/on'
import off from '../../src/emitter/off'
import index from '../../src/emitter/index'

describe('emitter/index', () => {
  it('should export the right bindings', () => {
    expect(index.create).to.equal(create)
    expect(index.emit).to.equal(emit)
    expect(index.Emitter).to.equal(Emitter)
    expect(index.getListeners).to.equal(getListeners)
    expect(index.once).to.equal(once)
    expect(index.on).to.equal(on)
    expect(index.off).to.equal(off)
  })
})
