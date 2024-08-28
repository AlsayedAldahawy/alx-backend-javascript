export default function cleanSet(set, startString) {
  return [...set].filter((string) => string.startsWith(startString) && startString !== '')
    .map((string) => string.slice(startString.length)).join('-');
}
