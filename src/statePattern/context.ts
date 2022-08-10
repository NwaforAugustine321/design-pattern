import LightOff from './lightOff';
import State from './state';

class Context {
  private state: State;

  constructor() {
    this.state = new LightOff();
  }

  changeState(sta: State): void {
    this.state = sta;
  }

  getState(): State {
    return this.state;
  }
}

export default Context;
