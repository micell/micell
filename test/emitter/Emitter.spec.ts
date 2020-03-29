import { expect } from 'chai'
import Emitter from '../../src/emitter/Emitter'
import runSpec from './runSpec'

runSpec({
  describe,
  it,
  expect
}, () => new Emitter())
