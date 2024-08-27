function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) return [];

  return studentsList.map((item) => item.id);
}

export default getListStudentIds;
