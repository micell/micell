import timeAgo from '../../src/date/timeAgo';

describe('date/timeAgo', () => {
  beforeEach(() => {
    timeAgo.setLocale('en_US');
  });

  it('should the current locale', () => {
    expect(timeAgo.getLocale()).toBe('en_US');
  });

  it('should return the set locale', () => {
    timeAgo.setLocale('zh_CN');
    expect(timeAgo.getLocale()).toBe('zh_CN');
  });

  it('should return the expected formatted string', () => {
    const now = Date.now();
    const testUnits = [
      [
        [now],
        'just now',
      ],
      [
        [now - 5000],
        '5 seconds ago',
      ],
      [
        [now - (60 * 1000)],
        '1 minute ago',
      ],
      [
        [now - (5 * 60 * 1000)],
        '5 minutes ago',
      ],
      [
        [now - (60 * 60 * 1000)],
        '1 hour ago',
      ],
      [
        [now - (5 * 60 * 60 * 1000)],
        '5 hours ago',
      ],
      [
        [now - (24 * 60 * 60 * 1000)],
        '1 day ago',
      ],
      [
        [now - (5 * 24 * 60 * 60 * 1000)],
        '5 days ago',
      ],
      [
        [now - (7 * 24 * 60 * 60 * 1000)],
        '1 week ago',
      ],
      [
        [now - (2 * 7 * 24 * 60 * 60 * 1000)],
        '2 weeks ago',
      ],
      [
        [now - (30 * 24 * 60 * 60 * 1000)],
        '1 month ago',
      ],
      [
        [now - (5 * 30 * 24 * 60 * 60 * 1000)],
        '5 months ago',
      ],
      [
        [now - (365 * 24 * 60 * 60 * 1000)],
        '1 year ago',
      ],
      [
        [now - (5 * 365 * 24 * 60 * 60 * 1000)],
        '5 years ago',
      ],
    ];
    testUnits.forEach((testUnit) => {
      expect(timeAgo.format.apply(null, testUnit[0])).toBe(testUnit[1]);
    });
  });

  it('should work with the second `locale` parameter', () => {
    const now = Date.now();
    expect(timeAgo.format(now - 5000, 'zh_CN')).toBe('5 秒前');
  });

  it('should work with the third `nowDate` paramter', () => {
    const now = Date.now();
    const nowDate = now - 5000;
    expect(timeAgo.format(now, null, nowDate)).toBe('in 5 seconds');
  });

  it('should add the specified locale', () => {
    timeAgo.addLocale('custom', [
      ['-', '+'],
      ['-%s seconds', '+%s seconds'],
      ['-%s minute', '+%s minute'],
      ['-%s minutes', '+%s minutes'],
    ]);
    timeAgo.setLocale('custom');
    expect(timeAgo.getLocale()).toBe('custom');

    const now = Date.now();
    const testUnits = [
      [
        [now],
        '-',
      ],
      [
        [now - 5000],
        '-5 seconds',
      ],
      [
        [now, null, now - 5000],
        '+5 seconds',
      ],
      [
        [now - (60 * 1000)],
        '-1 minute',
      ],
    ];

    testUnits.forEach((testUnit) => {
      expect(timeAgo.format.apply(null, testUnit[0])).toBe(testUnit[1]);
    });
  });
});
