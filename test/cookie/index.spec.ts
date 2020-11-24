import { expect } from 'chai'
import get from '../../src/cookie/get';
import getAll from '../../src/cookie/getAll';
import getJson from '../../src/cookie/getJson';
import getRaw from '../../src/cookie/getRaw';
import isEnabled from '../../src/cookie/isEnabled';
import remove from '../../src/cookie/remove';
import set from '../../src/cookie/set';
import setJson from '../../src/cookie/setJson';
import setRaw from '../../src/cookie/setRaw';
import index from '../../src/cookie/index'

describe('cookie/index', () => {
  it('should export the right bindings', () => {
    expect(index.get).to.equal(get)
    expect(index.getAll).to.equal(getAll)
    expect(index.getJson).to.equal(getJson)
    expect(index.getRaw).to.equal(getRaw)
    expect(index.isEnabled).to.equal(isEnabled)
    expect(index.remove).to.equal(remove)
    expect(index.set).to.equal(set)
    expect(index.setJson).to.equal(setJson)
    expect(index.setRaw).to.equal(setRaw)
  })
})
