import { describe, expect, it } from 'vitest'
import diff from '../../src/date/diff'
import format from '../../src/date/format'
import parse from '../../src/date/parse'
import timeAgo from '../../src/date/timeAgo'
import index from '../../src/date/index'

describe('date/index', () => {
  it('should export the right bindings', () => {
    expect(index.diff).to.equal(diff)
    expect(index.format).to.equal(format)
    expect(index.parse).to.equal(parse)
    expect(index.timeAgo).to.equal(timeAgo)
  })
})
