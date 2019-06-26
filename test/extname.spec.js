import extname from '../src/extname'

describe('extname', () => {
  it('should return the extension of the path', () => {
    expect(extname('hello.md')).to.equal('.md')
    expect(extname('app.min.js')).to.equal('.js')
  })

  it('should return the empty string if there isn\'t a `.` (period) character in the path', () => {
    expect(extname('hello')).to.equal('')
  })
})
