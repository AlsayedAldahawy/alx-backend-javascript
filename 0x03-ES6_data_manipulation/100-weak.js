/* eslint-disable no-unused-expressions */
const weakMap = new WeakMap();

// first method: using Global counter
// Global Counter: callCounter is a global variable, which means it counts calls across
// all endpoints, not individually.
// This could lead to incorrect behavior if multiple endpoints are being queried.

// let callCounter = 0;

// function queryAPI(endpoint) {
//   callCounter += 1;
//   if (callCounter >= 5) throw new Error('Endpoint load is high');
//   weakMap.set(endpoint, callCounter);
// }

// second method: using endpoint value
// Endpoint-Specific: Uses a WeakMap to track the number of calls per endpoint,
// ensuring each endpoint is monitored individually.
function queryAPI(endpoint) {
  weakMap.has(endpoint)
    ? weakMap.set(endpoint, weakMap.get(endpoint) + 1)
    : weakMap.set(endpoint, 1);

  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}

export { queryAPI, weakMap };
