import { expect } from 'chai'
import diff from '../../src/date/diff'
import format from '../../src/date/format'
import timeAgo from '../../src/date/timeAgo'
import index from '../../src/date/index'

describe('date/index', () => {
  it('should export the right bindings', () => {
    expect(index.diff).to.equal(diff)
    expect(index.format).to.equal(format)
    expect(index.timeAgo).to.equal(timeAgo)
  })
})
