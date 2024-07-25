export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // brand getter and setter
  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  // motor getter and setter
  get motor() {
    return this._motor;
  }

  set motor(motor) {
    this._motor = motor;
  }

  // color getter and setter
  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
