function getStudentIdsSum(studentsList) {
  return studentsList.reduce((accumulator, student) => accumulator + student.id, 0);
}

export default getStudentIdsSum;
