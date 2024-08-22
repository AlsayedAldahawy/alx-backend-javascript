export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new Error('TypeError: Name must be a string'); else this._name = name;
    if (typeof length !== 'number') throw new Error('TypeError: length must be a number'); else this._length = length;

    if (!Array.isArray(students)) throw new Error('TypeError: Students must be an array of strings');

    for (const stu in students) {
      if (typeof stu !== 'string') throw new Error('TypeError: Students must be an array of strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newNAme) {
    if (typeof newNAme !== 'string') throw new Error('TypeError: Name must be a string');
    this._name = newNAme;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw new Error('TypeError: length must be a number');
    this._length = this.length;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw new Error('TypeError: Students must be an array of strings');

    for (const stu in newStudents) {
      if (typeof stu !== 'string') throw new Error('TypeError: Students must be an array of strings');
    }

    this.students = newStudents;
  }
}
