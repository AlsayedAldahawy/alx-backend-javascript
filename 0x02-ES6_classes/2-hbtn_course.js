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

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw new TypeError('TypeError: Students must be an array of strings');

    for (const stu in newStudents) {
      if (typeof stu !== 'string') throw new TypeError('TypeError: Students must be an array of strings');
    }

    this._students = newStudents;
  }
}

export default HolbertonCourse;
