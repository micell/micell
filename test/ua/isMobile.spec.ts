import { describe, expect, it } from 'vitest'
import isMobile from '../../src/ua/isMobile'

describe('ua/isMobile', () => {
  it('should return true', () => {
    const uaList = [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Mobile Safari/537.36',
    ]
    for (const ua of uaList) {
      expect(isMobile(ua)).to.equal(true)
    }
  })
})
