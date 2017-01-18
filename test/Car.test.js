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


    it('should set name #apply', () => {
      const car = {};
      const carName = 'herbie';

      const setName = Car.prototype.setName.apply(car, [carName]);

      expect(car).to.be.an('object');
      expect(car.name).to.be.equal(carName);
    });

    it('should set name #bind', () => {
      const car = {};
      const carName = 'herbie';

      const setName = Car.prototype.setName.bind(car);
      setName(carName);

      expect(car).to.be.an('object');
      expect(car.name).to.be.equal(carName);
    });

    it('should set name #call', () => {
      const car = {};
      const carName = 'herbie';

      const setName = Car.prototype.setName.call(car, carName);

      expect(car).to.be.an('object');
      expect(car.name).to.be.equal(carName);
    });
  });
});