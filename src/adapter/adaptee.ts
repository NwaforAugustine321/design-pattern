class Adaptee {
  private printerName: string;

  constructor(printerName: string) {
    this.printerName = printerName;
  }

  printPaper(): string {
    return this.printerName;
  }
}

export default Adaptee;
