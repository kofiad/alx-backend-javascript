export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // name getter and setter
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // code getter and setter
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
