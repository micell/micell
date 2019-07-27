import linear from '../../src/easing/linear'
import { identity, compare } from './util'

describe('linear', () => {
  it('should be equal', () => {
    expect(compare(linear, identity)).to.equal(true)
  })
})
