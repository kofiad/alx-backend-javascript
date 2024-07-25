import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // range getter and setter
  get range() {
    return this._range;
  }

  set range(range) {
    if (typeof range !== 'number') {
      throw new TypeError('Range must be a number');
    }
    this._range = range;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
