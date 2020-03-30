import Emitter from '../../src/emitter/Emitter'
import runSpec from './runSpec'

runSpec(describe, it, () => new Emitter())
