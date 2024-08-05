import { describe, expect, it } from 'vitest'
import isValidJSON from '../../src/string/isValidJSON'

describe('isValidJSON', () => {
  it('should return true if a valid JSON string is passed', () => {
    const validJson = '{ "a": [0, false] }'
    expect(isValidJSON(validJson)).to.equal(true)
  })

  it('should return false if an invalid JSON string is passed', () => {
    const invalidJson = '{ a: [0, false] }'
    expect(isValidJSON(invalidJson)).to.equal(false)
  })
})
