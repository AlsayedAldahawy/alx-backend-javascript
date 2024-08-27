/* eslint-disable no-param-reassign */
function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((studentL) => studentL.location === city)
    .map((student) => {
      for (let i = 0; i < newGrades.length; i += 1) {
        if (newGrades[i].studentId === student.id) {
          student.grade = newGrades[i].grade;
          break;
        }
        student.grade = 'N/A';
      }
      return student;
    });
}

export default updateStudentGradeByCity;
