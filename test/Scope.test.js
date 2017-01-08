const { expect } = require('chai');
const { example1, example2, example3, example4 } = require('../src/Scope');

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

  describe('#example3', () => {
    it('WTF', () => {
      const result = example3.call(this);
      // console.log('example3 =>', result);
    });
  });

  describe('#example4', () => {
    it('WTF', () => {
      const result = example4();
      // console.log('example4 =>',result);
    });
  });
});