import { expect } from 'chai'
import noop from '../src/noop'

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).to.equal(undefined)
  })
})
