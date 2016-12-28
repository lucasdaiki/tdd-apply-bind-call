const { expect } = require('chai');
const { example1, example2 } = require('../src/Scope');

describe('Scope', () => {
  describe('#example1', () => {
    it('must return 1', () => {
      const result = example1();
      expect(result).to.be.equal(2);
    });
  });

  describe('#example2', () => {
    it('must return 2', () => {
      const result = example2();
      expect(result).to.be.equal(1);
    });
  });
});