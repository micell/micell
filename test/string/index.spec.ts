import { describe, expect, it } from 'vitest'
import countChars from '../../src/string/countChars'
import countLines from '../../src/string/countLines'
import escapeRegexp from '../../src/string/escapeRegexp'
import firstChar from '../../src/string/firstChar'
import isValidJSON from '../../src/string/isValidJSON'
import lastChar from '../../src/string/lastChar'
import truncate from '../../src/string/truncate'
import index from '../../src/string/index'

describe('string/index', () => {
  it('should export the right bindings', () => {
    expect(index.countChars).to.equal(countChars)
    expect(index.countLines).to.equal(countLines)
    expect(index.escapeRegexp).to.equal(escapeRegexp)
    expect(index.firstChar).to.equal(firstChar)
    expect(index.isValidJSON).to.equal(isValidJSON)
    expect(index.lastChar).to.equal(lastChar)
    expect(index.truncate).to.equal(truncate)
  })
})
