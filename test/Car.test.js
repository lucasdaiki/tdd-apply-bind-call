const { expect } = require('chai');
const Car = require('../src/Car');

describe('Car', () => {
  describe('turnOn', () => {
    it('must return true', () => {
      const car = new Car();
      car.turnOn();
      expect(car.turnedOn).to.be.true;
    });
  });

  describe('setName', () => {
    it('should set name', () => {
      const car = new Car();
      const carName = 'herbie';
      car.setName(carName);
      expect(car.name).to.be.equal(carName);
    });
  });
});