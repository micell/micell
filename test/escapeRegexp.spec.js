import { escapeRegexp } from '../src';

describe('dirname', () => {
  const specialChars = '.*+?^$|[](){}\\-';
  const escapedSpecialChars = '\\.\\*\\+\\?\\^\\$\\|\\[\\]\\(\\)\\{\\}\\\\\\-';

  it('should escape the special characters', () => {
    expect(escapeRegexp(specialChars)).toBe(escapedSpecialChars);
  });
});
