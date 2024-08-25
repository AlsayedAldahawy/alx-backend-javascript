import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  //   cloneCar() {
  //     return new Car();
  //   }
  // }

  // using Symbol.species of the super class
  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}

export default EVCar;
