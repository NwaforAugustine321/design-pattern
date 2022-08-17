import AdapterInterface from './adapterInterface';

class Printer {
  private printer: AdapterInterface;

  constructor(printer: AdapterInterface) {
    this.printer = printer;
  }

  print(): void {
    this.printer.print();
  }
}

export default Printer;
