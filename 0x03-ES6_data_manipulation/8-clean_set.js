export default function cleanSet(set, startString) {
  if (startString === undefined) {
    return '';
  }
  return [...set].filter((string) => string.startsWith(startString) && startString !== '')
    .map((string) => string.slice(startString.length)).join('-');
}
