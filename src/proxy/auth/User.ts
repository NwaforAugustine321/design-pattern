import userInterface from './userInterface';

class User implements userInterface {
  private rootAccess: boolean = false;

  checkAccess(): boolean {
    return this.rootAccess;
  }
}

export default User;
