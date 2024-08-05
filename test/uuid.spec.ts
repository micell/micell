import { describe, expect, it } from 'vitest'
import uuid from '../src/uuid'

describe('uuid', () => {
  it('should return a string of 36 length', () => {
    expect(uuid().length).to.equal(36)
  })

  it('should return two different strings', () => {
    expect(uuid()).to.not.equal(uuid())
  })

  it('should be hex digits in the fields', () => {
    const u = uuid()
    for (let i = 0; i < 36; i++) {
      if (i !== 8 && i !== 13 && i !== 18 && i !== 23) {
        expect(parseInt(u[i], 16)).to.within(0, 15)
      }
    }
  })

  it('hyphens', () => {
    const u = uuid()
    expect(u[8]).to.equal('-')
    expect(u[13]).to.equal('-')
    expect(u[18]).to.equal('-')
    expect(u[23]).to.equal('-')
  })

  it('time_hi_and_version', () => {
    const u = uuid()
    expect(parseInt(u[14], 16)).to.equal(4)
  })

  it('clock_seq_hi_and_reserved', () => {
    const u = uuid()
    expect(parseInt(u[19], 16) & 12).to.equal(8)
  })
})
