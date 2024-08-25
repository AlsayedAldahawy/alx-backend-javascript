class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to return a new object of the class
  cloneCar() {
    // return new Car(this._brand, this._motor, this._color);
    // this way will make the new car an instance of class Car
    // console.log(tc2 instanceof TestCar); >> false

    return new this.constructor(this._brand, this._motor, this._color);
    // this way will make the new car an instance of the instance itself (clone)
    // console.log(tc2 instanceof TestCar); >> true
  }
}

export default Car;
