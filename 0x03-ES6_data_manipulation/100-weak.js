const weakMap = new WeakMap();

let callCounter = 0;

function queryAPI(endpoint) {
  callCounter += 1;
  if (callCounter >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, callCounter);
}

export { queryAPI, weakMap };
