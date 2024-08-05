import { describe, expect, it } from 'vitest'
import parse from '../../src/url/parse'

const testData = [
  {
    input: 'http://example.com',
    expected: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      href: 'http://example.com',
      origin: 'http://example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: '',
    },
  },
  {
    input: 'http://admin@example.com',
    expected: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      href: 'http://admin@example.com',
      origin: 'http://example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: 'admin',
    },
  },
  {
    input: 'http://admin:123456@example.com',
    expected: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      href: 'http://admin:123456@example.com',
      origin: 'http://example.com',
      password: '123456',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: 'admin',
    },
  },
  {
    input: 'http://www.example.com',
    expected: {
      hash: '',
      host: 'www.example.com',
      hostname: 'www.example.com',
      href: 'http://www.example.com',
      origin: 'http://www.example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: '',
    },
  },
  {
    input: 'http://example.com:80',
    expected: {
      hash: '',
      host: 'example.com:80',
      hostname: 'example.com',
      href: 'http://example.com:80',
      origin: 'http://example.com:80',
      password: '',
      pathname: '',
      port: '80',
      protocol: 'http',
      query: {},
      search: '',
      username: '',
    },
  },
  {
    input: 'http://example.com/path/one.html',
    expected: {
      hash: '',
      host: 'example.com',
      hostname: 'example.com',
      href: 'http://example.com/path/one.html',
      origin: 'http://example.com',
      password: '',
      pathname: '/path/one.html',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: '',
    },
  },
  {
    input: 'http://www.example.com/path?foo=1&bar=2&bar=3',
    expected: {
      hash: '',
      host: 'www.example.com',
      hostname: 'www.example.com',
      href: 'http://www.example.com/path?foo=1&bar=2&bar=3',
      origin: 'http://www.example.com',
      password: '',
      pathname: '/path',
      port: '',
      protocol: 'http',
      query: {
        foo: '1',
        bar: ['2', '3'],
      },
      search: '?foo=1&bar=2&bar=3',
      username: '',
    },
  },
  {
    input: 'http://www.example.com#title',
    expected: {
      hash: '#title',
      host: 'www.example.com',
      hostname: 'www.example.com',
      href: 'http://www.example.com#title',
      origin: 'http://www.example.com',
      password: '',
      pathname: '',
      port: '',
      protocol: 'http',
      query: {},
      search: '',
      username: '',
    },
  },
  {
    input: 'http://localhost:8000/path?foo=1#title',
    expected: {
      hash: '#title',
      host: 'localhost:8000',
      hostname: 'localhost',
      href: 'http://localhost:8000/path?foo=1#title',
      origin: 'http://localhost:8000',
      password: '',
      pathname: '/path',
      port: '8000',
      protocol: 'http',
      query: {
        foo: '1',
      },
      search: '?foo=1',
      username: '',
    },
  },
  {
    input: 'http://192.168.0.1:8000/path?foo=1#title',
    expected: {
      hash: '#title',
      host: '192.168.0.1:8000',
      hostname: '192.168.0.1',
      href: 'http://192.168.0.1:8000/path?foo=1#title',
      origin: 'http://192.168.0.1:8000',
      password: '',
      pathname: '/path',
      port: '8000',
      protocol: 'http',
      query: {
        foo: '1',
      },
      search: '?foo=1',
      username: '',
    },
  },
]

describe('url/parse', () => {
  it('should throw a TypeError if the 1st parameter is not a string', () => {
    const createFn = (url: any) => () => parse(url)
    // @ts-ignore
    expect(createFn()).to.throw(TypeError)
    expect(createFn(1)).to.throw(TypeError)
    expect(createFn({})).to.throw(TypeError)
  })

  it('should throw a TypeError if the 1st parameter is not a valid url', () => {
    type CallFunc = () => void
    const createFn = function (url: string): CallFunc {
      return (): void => {
        parse(url)
      }
    }
    expect(createFn('')).to.throw(TypeError)
    expect(createFn('http://')).to.throw(TypeError)
    expect(createFn('example.com')).to.throw(TypeError)
  })

  it('should return the parsed url object', () => {
    testData.forEach(({ input, expected }) => {
      expect(parse(input)).to.deep.equal(expected)
    })
  })
})
