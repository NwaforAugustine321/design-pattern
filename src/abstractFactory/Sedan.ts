import Car from './CarInterface';

class Sedan implements Car {
  name: string;
  private engine: string = '';

  constructor(name: string) {
    this.name = name;
  }

  setEngine(type: string): void {
    this.engine = type;
  }

  getDescription(): string {
    return `${this.name} with ${this.engine} engine`;
  }
}

export default Sedan;
