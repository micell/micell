import { expect } from 'chai'
import isFunction from '../../src/lang/isFunction'

describe('lang/isFunction', () => {
  it('function declaration', () => {
    function foo(): number {
      return 0
    }
    expect(isFunction(foo)).to.equal(true)
  })

  it('function expresstion', () => {
    const foo = function (): number {
      return 0
    }
    expect(isFunction(foo)).to.equal(true)
  })

  it('arrow function', () => {
    const foo = (): number => {
      return 0
    }
    expect(isFunction(foo)).to.equal(true)
  })

  it('generator function', () => {
    function* foo(): IterableIterator<number> {
      yield 0
    }
    expect(isFunction(foo)).to.equal(true)
  })

  it('async function', () => {
    async function foo(): Promise<number> {
      return 0
    }
    expect(isFunction(foo)).to.equal(true)
  })

  it('other types should return false', () => {
    expect(isFunction({})).to.equal(false)
    expect(isFunction(undefined)).to.equal(false)
    expect(isFunction(null)).to.equal(false)
  })
})
