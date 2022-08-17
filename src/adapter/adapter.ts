import Adaptee from './adaptee';
import AdapterInterface from './adapterInterface';

class Adapter implements AdapterInterface {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  print(): void {
    const translate = this.adaptee.printPaper();
    console.log(`${translate} --- printed in english`);
  }
}

export default Adapter;
