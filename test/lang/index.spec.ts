import { describe, expect, it } from 'vitest'
import getType from '../../src/lang/getType'
import isArray from '../../src/lang/isArray'
import isBoolean from '../../src/lang/isBoolean'
import isDate from '../../src/lang/isDate'
import isError from '../../src/lang/isError'
import isFunction from '../../src/lang/isFunction'
import isNil from '../../src/lang/isNil'
import isNull from '../../src/lang/isNull'
import isNumber from '../../src/lang/isNumber'
import isObject from '../../src/lang/isObject'
import isRegExp from '../../src/lang/isRegExp'
import isString from '../../src/lang/isString'
import isUndefined from '../../src/lang/isUndefined'
import index from '../../src/lang/index'

describe('lang/index', () => {
  it('should export the right bindings', () => {
    expect(index.getType).to.equal(getType)
    expect(index.isArray).to.equal(isArray)
    expect(index.isBoolean).to.equal(isBoolean)
    expect(index.isDate).to.equal(isDate)
    expect(index.isError).to.equal(isError)
    expect(index.isFunction).to.equal(isFunction)
    expect(index.isNil).to.equal(isNil)
    expect(index.isNull).to.equal(isNull)
    expect(index.isNumber).to.equal(isNumber)
    expect(index.isObject).to.equal(isObject)
    expect(index.isRegExp).to.equal(isRegExp)
    expect(index.isString).to.equal(isString)
    expect(index.isUndefined).to.equal(isUndefined)
  })
})
