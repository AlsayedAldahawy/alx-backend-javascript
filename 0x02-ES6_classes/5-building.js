class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') throw new TypeError('sqft must be number');
    this._sqft = value;
  }
}

export default Building;

/**
 * Notes:
     * /// new.target ///
     * Definition: Refers to the constructor that was directly invoked with the new keyword.
     * Usage: Useful in constructors to determine if the class is being instantiated directly or
     * through inheritance.
     */

/**
     * Context: this.constructor is used within instance methods to refer to the class that created
     * the instance, while new.target is used within constructors to refer to the constructor that
     * was called with new.
     * Purpose: this.constructor helps in accessing class-level properties and methods from an
     * instance,whereas new.target helps in controlling instantiation behavior, especially in
     * inheritance scenarios.
     */
