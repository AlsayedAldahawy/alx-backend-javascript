function getStudentsByLocation(listOfObjects, location) {
  return listOfObjects.filter((object) => object.location === location);
}

export default getStudentsByLocation;
