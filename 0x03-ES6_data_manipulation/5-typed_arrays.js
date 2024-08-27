function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  try {
    const int8 = new Int8Array(buffer, position, 1);
    int8[0] = value;
  } catch (error) {
    throw new RangeError('Position outside rang');
  }

  return new DataView(buffer);
}

export default createInt8TypedArray;
