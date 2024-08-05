import { describe, expect, it } from 'vitest'
import isAlphabetic from '../../src/char/isAlphabetic'
import isAlphanumeric from '../../src/char/isAlphanumeric'
import isASCII from '../../src/char/isASCII'
import isCJK from '../../src/char/isCJK'
import isControl from '../../src/char/isControl'
import isDigit from '../../src/char/isDigit'
import isGraph from '../../src/char/isGraph'
import isHexadecimal from '../../src/char/isHexadecimal'
import isLower from '../../src/char/isLower'
import isPrint from '../../src/char/isPrint'
import isPunctuation from '../../src/char/isPunctuation'
import isSpace from '../../src/char/isSpace'
import isUpper from '../../src/char/isUpper'
import index from '../../src/char/index'

describe('char/index', () => {
  it('should export the right bindings', () => {
    expect(index.isAlphabetic).to.equal(isAlphabetic)
    expect(index.isAlphanumeric).to.equal(isAlphanumeric)
    expect(index.isASCII).to.equal(isASCII)
    expect(index.isCJK).to.equal(isCJK)
    expect(index.isControl).to.equal(isControl)
    expect(index.isDigit).to.equal(isDigit)
    expect(index.isGraph).to.equal(isGraph)
    expect(index.isHexadecimal).to.equal(isHexadecimal)
    expect(index.isLower).to.equal(isLower)
    expect(index.isPrint).to.equal(isPrint)
    expect(index.isPunctuation).to.equal(isPunctuation)
    expect(index.isSpace).to.equal(isSpace)
    expect(index.isUpper).to.equal(isUpper)
  })
})
