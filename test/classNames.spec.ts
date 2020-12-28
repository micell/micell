import { expect } from 'chai'
import classNames from '../src/classNames'

describe('classNames', () => {
  it('should return an empty string if no argument', () => {
    expect(classNames()).to.equal('')
  })

  it('should ignore falsy value', () => {
    expect(classNames(undefined, null, false, 0, '')).to.equal('')
  })

  it('should generate className for string value', () => {
    expect(classNames('foo', 'bar')).to.equal('foo bar')
  })

  it('should generate className with the anme of object property when it is truly', () => {
    expect(classNames({ foo: true, bar: false, baz: 1 })).to.equal('foo baz')
  })

  it('should flatten the array value', () => {
    expect(classNames(['a', { b: true, c: false }])).to.equal('a b')
  })

  it('should join the result of all types', () => {
    expect(classNames('a', { b: true, c: false }, ['d', { e: true, f: false }])).to.equal('a b d e')
  })
})
