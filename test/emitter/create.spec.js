import create from '../../src/emitter/create'
import runSpec from './runSpec'

runSpec({
  describe,
  it,
  expect
}, create)
