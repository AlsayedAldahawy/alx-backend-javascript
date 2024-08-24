import listOfStudents from './9-hoisting';

console.log('list of students', listOfStudents);

const listPrinted = listOfStudents.map(
  (student) => student.fullStudentDescription,
);

console.log(listPrinted);
