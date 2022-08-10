import Context from './context';
import State from './state';

class LightOff implements State {
  handleLightState(ctx: Context): void {
    console.log('LIGHT IS OFF');
    ctx.changeState(this);
  }
}

export default LightOff;
