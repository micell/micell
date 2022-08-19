import { expect } from 'chai'
import sinon from 'sinon'
import convert from '../../../src/cookie/util/convert'

describe('cookie/util/convert', () => {
  const now = new Date()
  let clock: sinon.SinonFakeTimers

  before(() => {
    clock = sinon.useFakeTimers({ now })
  })

  after(() => {
    clock.restore()
  })

  it('should return a string including path if an empty options is passed', () => {
    expect(convert({})).to.equal(';path=/')
  })

  it('should return an encoded string', () => {
    expect(
      convert({ domain: 'example.com', path: '/', secure: true }),
    ).to.equal(`;domain=example.com;path=/;secure`)
    expect(
      convert({ domain: 'example.com', path: '/', secure: false }),
    ).to.equal(`;domain=example.com;path=/`)

    expect(convert({ expires: now.toUTCString() })).to.equal(
      `;expires=${now.toUTCString()};path=/`,
    )
    expect(convert({ expires: now })).to.equal(
      `;expires=${now.toUTCString()};path=/`,
    )

    const date = new Date(now.getTime())
    date.setDate(date.getDate() + 1)
    expect(convert({ expires: 1 })).to.equal(
      `;expires=${date.toUTCString()};path=/`,
    )
  })
})
