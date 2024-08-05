import { describe, it } from 'vitest'
import create from '../../src/emitter/create'
import runSpec from './runSpec'

runSpec(describe, it, create)
