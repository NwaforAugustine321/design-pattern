import Memento from './memento';

class Originator {
  state: string = '';

  setState(state: string): void {
    this.state = state;
  }

  saveToMemento(): Memento {
    return new Memento(this.state);
  }

  getSaveMemento(memento: Memento): string {
    return memento.getState();
  }
}

export default Originator;
