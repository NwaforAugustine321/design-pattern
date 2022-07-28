abstract class Car {
  abstract name: string;
  abstract setEngine(type: string): void;
  abstract getDescription(): string;
}

export default Car;
