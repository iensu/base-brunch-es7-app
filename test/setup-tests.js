import '../app/helpers/polyfill.js';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import dirtyChai from 'dirty-chai';

// enable equality checks on immutable data structures
chai.use(chaiImmutable);

// make property checks into function calls
// "hej".should.be.true -> "hej".should.be.true()
chai.use(dirtyChai);

// should-assertions
chai.should();
