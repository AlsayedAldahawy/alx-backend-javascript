class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(newNAme) {
    if (typeof newNAme !== 'string') throw new TypeError('TypeError: Name must be a string');
    this._name = newNAme;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw new TypeError('TypeError: length must be a number');
    this._length = this.length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
