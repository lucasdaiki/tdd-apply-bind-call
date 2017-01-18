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
    describe('#call(this)', () => {
      it('must be equal to example4', () => {
        const result3 = example3.call(this);
        const result4 = example4();
        expect(result3).to.deep.equal(result4);
      });
    });
  });

  describe('#example4', () => {
    it('must return {}', () => {
      const result = example4();
      expect(result).to.deep.equal({});
    });

    it('should not change #this', () => {
      const scope = { a: 1 };
      const result = example4.call(scope);
      expect(result).to.deep.equal({});
    });

    it('should not change #this', () => {
      const scope = { a: 1 };
      const result = example4.bind(scope).call();
      expect(result).to.deep.equal({});
    });
  });
});