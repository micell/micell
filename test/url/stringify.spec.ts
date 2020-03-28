import { expect } from 'chai'
import stringify, { URLParts } from '../../src/url/stringify'

interface TestDatum {
  expected: string;
  input: URLParts;
}

const testData: Array<TestDatum> = [
  {
    expected: 'http://example.com',
    input: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: ''
    }
  },
  {
    expected: 'http://admin@example.com',
    input: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: 'admin'
    }
  },
  {
    expected: 'http://admin:123456@example.com',
    input: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      password: '123456',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: 'admin'
    }
  },
  {
    expected: 'http://www.example.com',
    input: {
      hash: '',
      host: 'www.example.com',
      hostname: 'www.example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: ''
    }
  },
  {
    expected: 'http://example.com:80',
    input: {
      hash: '',
      host: 'example.com:80',
      hostname: 'example.com',
      password: '',
      pathname: '',
      port: '80',
      protocol: 'http',
      query: {},
      search: '',
      username: ''
    }
  },
  {
    expected: 'http://example.com/path/one.html',
    input: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      password: '',
      pathname: '/path/one.html',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: ''
    }
  },
  {
    expected: 'http://www.example.com/path?foo=1&bar=2&bar=3',
    input: {
      hash: '',
      host: 'www.example.com',
      hostname: 'www.example.com',
      password: '',
      pathname: '/path',
      port: '',
      protocol: 'http',
      query: {
        foo: '1',
        bar: ['2', '3']
      },
      search: '?foo=1&bar=2&bar=3',
      username: ''
    }
  },
  {
    expected: 'http://www.example.com#title',
    input: {
      hash: '#title',
      host: 'www.example.com',
      hostname: 'www.example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: ''
    }
  }
]

describe('url/stringify', () => {
  // TODO: unable to pass the type check
  // it('should throw a TypeError if the 1st parameter is not an object', () => {
  //   const createFn = value => () => stringify(value)
  //   expect(createFn()).to.throw(TypeError)
  //   expect(createFn('')).to.throw(TypeError)
  //   expect(createFn([])).to.throw(TypeError)
  // })

  // TODO: unable to pass the type check
  // it('should throw a Type error if the protocol missing', () => {
  //   const fn = () => stringify({ hostname: 'example.com' })
  //   expect(fn).to.throw(TypeError)
  // })

  it('should throw a TypeError if host and hostname property missing', () => {
    const fn = () => stringify({ protocol: 'http' })
    expect(fn).to.throw(TypeError)
  })

  it('shoud return the url stringify', () => {
    testData.forEach(({ input, expected }) => {
      expect(stringify(input)).to.equal(expected)
    })
  })
})
