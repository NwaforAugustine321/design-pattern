import CheckUser from './checkuser';
import handler from './interface';
import Loginvalidation from './loginvalidation';

class Main {
  authServicehandler(): handler {
    const login = new Loginvalidation();
    const checkuser = new CheckUser();
    login.setNextHandler(checkuser);

    return login;
  }
}

export default Main;
