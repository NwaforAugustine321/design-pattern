import { runInContext } from 'vm';
import Context from './context';
import State from './state';

class LightOn implements State {
  handleLightState(ctx: Context): void {
    console.log('LIGHT IS ON');
    ctx.changeState(this);
  }
}

export default LightOn;
