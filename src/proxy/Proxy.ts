import Main from './auth/Main';
import userInterface from './auth/userInterface';
import ProxyCommand from './Command';

class ProxyDesignPattern extends ProxyCommand {
  private isAdmin: boolean = false;

  constructor(user: userInterface) {
    super();
    this.isAdmin = new Main().getUser(user).checkAccess();
  }

  run(): void {
    if (this.isAdmin) {
      super.run();
    } else {
      console.log('ACCESS IS NOT GRANTED');
    }
  }
}

export default ProxyDesignPattern;
