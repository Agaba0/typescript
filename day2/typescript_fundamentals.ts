interface Car {
  make: string;
  model: string;
  year: number;
}

class MyCar implements Car {
  public make: string;
  public model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

// Create an instance of MyCar
const myCarInstance = new MyCar("Toyota", "Camry", 2022);
