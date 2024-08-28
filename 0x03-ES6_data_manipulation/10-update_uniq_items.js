export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  return map.forEach((element, i) => {
    if (element === 1) map.set(i, 100);
  });
}
