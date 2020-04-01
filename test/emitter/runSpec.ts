import { SuiteFunction, TestFunction } from 'mocha'
import { expect } from 'chai'
import Emitter from '../../src/emitter/Emitter'

interface Creator {
  (): Emitter;
}

export default function runSpec (describe: SuiteFunction, it: TestFunction, creator: Creator): void {
  describe('emitter creator', () => {
    describe('new Emitter or create()', () => {
      it('should return an Emitter instance when no parameter is passed', () => {
        const emitter = creator()
        expect(emitter instanceof Emitter).to.equal(true)
      })
    })
  })

  describe('instance methods', () => {
    describe('on(type, fn)', () => {
      it('should add listeners', () => {
        const emitter = creator()
        const calls: any[] = []

        emitter.on('foo', function (val: number) {
          calls.push('one', val)
        })

        emitter.on('foo', function (val: number) {
          calls.push('two', val)
        })

        emitter.emit('foo', 1)
        emitter.emit('bar', 1)
        emitter.emit('foo', 2)

        expect(calls).to.deep.equal(['one', 1, 'two', 1, 'one', 2, 'two', 2])
      })
    })

    describe('once(type, fn)', () => {
      it('should add a listener which is executed once', () => {
        const emitter = creator()
        const calls: any[] = []

        emitter.once('foo', function (val: number) {
          calls.push('one', val)
        })

        emitter.emit('foo', 1)
        emitter.emit('foo', 2)
        emitter.emit('bar', 1)

        expect(calls).to.deep.equal(['one', 1])
      })

      it('should not be executed when the listener is triggered in the listener', () => {
        const emitter = creator()
        const calls: any[] = []

        emitter.once('foo', function (val: number) {
          calls.push('one', val)
          emitter.emit('foo', 2)
        })

        emitter.emit('foo', 1)
        expect(calls).to.deep.equal(['one', 1])
      })

      it('should be executed one by one, but only once, when two listeners are bound', () => {
        const emitter = creator()
        const calls: any[] = []

        emitter.once('foo', function (val: number) {
          calls.push('one', val)
        })
        emitter.once('foo', function (val: number) {
          calls.push('two', val)
        })

        emitter.emit('foo', 1)
        emitter.emit('foo', 2)

        expect(calls).to.deep.equal(['one', 1, 'two', 1])
      })
    })

    describe('off(type, fn)', () => {
      it('should remove specified listener of the given event type', () => {
        const emitter = creator()
        const calls: any[] = []
        const fn1 = function (): void {
          calls.push(1)
        }
        const fn2 = function (): void {
          calls.push(2)
        }

        emitter.on('foo', fn1)
        emitter.on('foo', fn2)

        emitter.emit('foo')

        emitter.off('foo', fn2)
        emitter.emit('foo')

        expect(calls).to.deep.equal([1, 2, 1])
      })

      it('should remove all listeners of the given event type', () => {
        const emitter = creator()
        const calls: any[] = []
        const fn1 = function (): void {
          calls.push(1)
        }
        const fn2 = function (): void {
          calls.push(2)
        }

        emitter.on('foo', fn1)
        emitter.on('foo', fn2)
        emitter.on('bar', fn1)

        emitter.emit('foo')
        emitter.emit('bar')

        emitter.off('foo')

        emitter.emit('foo')
        emitter.emit('bar')

        expect(calls).to.deep.equal([1, 2, 1, 1])
      })

      it('should remove all listeners for all event type', () => {
        const emitter = creator()
        const calls: any[] = []
        const fn1 = function (): void {
          calls.push(1)
        }
        const fn2 = function (): void {
          calls.push(2)
        }

        emitter.on('foo', fn1)
        emitter.on('foo', fn2)
        emitter.on('bar', fn1)

        emitter.emit('foo')
        emitter.emit('bar')

        emitter.off()

        emitter.emit('foo')
        emitter.emit('bar')

        expect(calls).to.deep.equal([1, 2, 1])
      })
    })

    describe('emit(type, [arg1], [arg2], ...)', () => {
      it('should emit an event', () => {
        const emitter = creator()
        const calls: any[] = []

        emitter.on('foo', function (): void {
          calls.push('one')
        })
        emitter.emit('foo', 1)

        expect(calls).to.deep.equal(['one'])
      })

      it('should pass some parameters', () => {
        const emitter = creator()
        let calls: any[] = []

        emitter.on('foo', function (...args): void {
          calls = calls.concat(args)
        })
        emitter.emit('foo', 1, false, 'hello')

        expect(calls).to.deep.equal([1, false, 'hello'])
      })
    })

    describe('listeners(type)', () => {
      it('should return all listeners of the given event', () => {
        const emitter = creator()
        const fn1 = function (): void {}
        const fn2 = function (): void {}

        emitter.on('foo', fn1)
        emitter.on('bar', fn1)
        emitter.on('foo', fn2)

        const listeners = emitter.getListeners('foo')

        expect(listeners).to.deep.equal([fn1, fn2])
      })

      it('should return all listeners', () => {
        const emitter = creator()
        const fn1 = function (): void {}
        const fn2 = function (): void {}

        emitter.on('foo', fn1)
        emitter.on('bar', fn1)
        emitter.on('foo', fn2)

        const listeners = emitter.getListeners()

        expect(listeners).to.deep.equal([fn1, fn2, fn1])
      })

      it('should return an empty array when no listener for the event', () => {
        const emitter = creator()
        const fn = function (): void {}

        emitter.on('bar', fn)
        const listeners = emitter.getListeners('foo')

        expect(listeners).to.deep.equal([])
      })

      it('should return an empty array when no listener', () => {
        const emitter = creator()

        const listeners = emitter.getListeners()

        expect(listeners).to.deep.equal([])
      })
    })
  })
}
