const package = require('../package.json');
const assert = require('assert');

beforeEach(() => {
});

before(() => {
});

after(() => {
});

/*
 * ============
 *  Test Cases
 * ============
 */
describe(`${package.name}`, () => {
  const lib = require('../dist/index.js');

  // Method
  describe('.method()', () => {

    // Method tests
    it('this => that', () => {
      return assert.equal(lib, {});
    });

  });

})
