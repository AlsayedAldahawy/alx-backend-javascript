class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name must be string');
    this._name = val;
  }

  set code(val) {
    if (typeof val !== 'string') throw new TypeError('code must be string');
    this._code = val;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;
