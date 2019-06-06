import truncate from '../../src/string/truncate';

describe('truncate', () => {
  const str = 'hello, 你好，world!世界！';
  it('zero argument', () => {
    expect(truncate()).toBe('...');
  });

  it('only first argument', () => {
    expect(truncate(str)).toBe(`${str}...`);
  });

  it('options.omission', () => {
    expect(truncate(str, { omission: '***' })).toBe(`${str}***`);
  });

  it('options.length', () => {
    expect(truncate(str, { length: 10 })).toBe('hello, 你好，...');
  });

  it('options.countType', () => {
    expect(truncate(str, { length: 10, countType: 1 })).toBe('hello, 你...');
    expect(truncate(str, { length: 10, countType: 2 })).toBe('hello, 你好，world!...');
  });
});
