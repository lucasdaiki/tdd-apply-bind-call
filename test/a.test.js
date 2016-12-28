var assert = require('assert');
var a = require('../src/a');

describe('a', function() {
  it('returns a', function() {
    assert.equal(a(), 'a');
  });
});