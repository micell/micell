import { describe, expect, it, vi } from 'vitest'
import randomNumbers from '../src/randomNumbers'

describe('randomNumbers', () => {
  it('basic', () => {
    const start = 1
    const end = 10
    const len = 5
    const set = new Set()
    const nums = randomNumbers(start, end, len)
    nums.forEach((num) => {
      if (num >= start && num <= end) {
        set.add(num)
      }
    })
    expect(set.size).to.equal(len)
  })

  it('down to start', () => {
    vi.spyOn(Math, 'random').mockImplementation(() => 0)
    expect(randomNumbers(1, 10, 1)).to.deep.equal([1])
    vi.restoreAllMocks()
  })

  it('up to end', () => {
    vi.spyOn(Math, 'random').mockImplementation(() => 0.9)
    expect(randomNumbers(1, 10, 1)).to.deep.equal([10])
    vi.restoreAllMocks()
  })

  it('should return an array of the specified length', () => {
    expect(randomNumbers(1, 10, 0).length).to.equal(0)
    expect(randomNumbers(1, 10, 1).length).to.equal(1)
    expect(randomNumbers(1, 10, 7).length).to.equal(7)
  })

  it('should throw a RangeError if end - start + 1 < length', () => {
    const gen = (): void => {
      randomNumbers(1, 10, 20)
    }
    expect(gen).to.throw(RangeError)
  })
})
