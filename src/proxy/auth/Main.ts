import mainInterface from './mainInterface';
import userInterface from './userInterface';

class Main implements mainInterface {
  getUser(user: userInterface): userInterface {
    return user;
  }
}

export default Main;
