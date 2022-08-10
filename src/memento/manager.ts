import Memento from './memento';
import Originator from './originator';

class MementoManager {
  list: Memento[] = [];
  originator: Originator;

  constructor() {
    this.originator = new Originator();
  }

  saveState(state: string): void {
    this.originator.setState(state);
    this.list.push(this.originator.saveToMemento());
  }

  getState(): string {
    return this.originator.getSaveMemento(
      this.list.at(this.list.length - 2) as Memento
    );
  }
}

export default MementoManager;
