import { expect } from 'chai'
import truncate from '../../src/string/truncate'

describe('truncate', () => {
  const str = 'hello, 你好，world!世界！'
  it('zero argument', () => {
    expect(truncate()).to.equal('')
  })

  it('only first argument', () => {
    expect(truncate(str)).to.equal(`${str}`)
  })

  it('options.length', () => {
    expect(truncate(str, { length: 10 })).to.equal('hello, 你好，...')
    expect(truncate('hello', { length: 10 })).to.equal('hello')
  })

  it('options.omission', () => {
    expect(truncate(str, { length: 10, omission: '***' })).to.equal(
      `hello, 你好，***`,
    )
  })

  it('options.countType', () => {
    expect(truncate(str, { length: 10, countType: 1 })).to.equal('hello, 你...')
    expect(truncate(str, { length: 10, countType: 2 })).to.equal(
      'hello, 你好，world!...',
    )
  })
})
