export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // size getter and setter
  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  // location getter and setter
  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return this.location;
    if (hint === 'number') return this.size;
    return this;
  }
}
