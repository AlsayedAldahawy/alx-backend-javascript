function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  try {
    // method 1:
    // const int8 = new Int8Array(buffer, position, 1);
    // // the array has only one element and the array starts at the position
    // int8[0] = value;

    // method 2:
    const int8 = new Int8Array(buffer, 0, length);
    int8.set([value], position); // typedArray.set(array, offset)
    /**
     * set method of a typed array like Int8Array expects an array or another typed array
     * as its first argument.
     * This is why you need to use [value] instead of value without brackets.
    */
  } catch (error) {
    throw new RangeError('Position outside range');
  }

  return new DataView(buffer);
}

export default createInt8TypedArray;
