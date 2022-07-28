import userInterface from './userInterface';

class Admin implements userInterface {
  private rootAccess: boolean = true;

  checkAccess(): boolean {
    return this.rootAccess;
  }
}

export default Admin;
