export default function createIteratorObject(report) {
  const employees = [];
  for (const value of Object.values(report.allEmployees)) {
    employees.push(...value);
  }

  return employees;

  // Another method
  // return Object.values(report.allEmployees).flat();

  /**
   * Object.values(report.allEmployees) : gets all the employees names.
   * flat() method convert nested arrays into single flat array.
   */
}
