class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') throw new TypeError('size must be number');
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') throw new TypeError('location must be string');
    this._location = value;
  }

  // overriding the valueOf function, so When the class is cast into a Number,
  // it should return the size.
  valueOf() {
    return this._size;
  }

  // overriding the toString function, so When the class is cast into a String,
  // it should return the location.
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
