export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const idx of reportWithIterator) {
    employees.push(idx);
  }
  return employees.join(' | ');
}
