import { Map } from 'immutable';

describe('Base app', () => {
  it('should be able to do destructuring on immutable maps', () => {
    const immutableMap = new Map({
      someKey: 'hej'
    });

    const { someKey } = immutableMap;

    someKey.should.not.be.undefined();
    someKey.should.equal(immutableMap.get('someKey'));
  });
});
