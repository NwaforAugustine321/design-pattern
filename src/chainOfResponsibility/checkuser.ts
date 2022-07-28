import baseHandler from './baseHandler';

class CheckUser extends baseHandler {
  handler(name: string, password: string): string {
    if (name !== 'austine' || password !== '321') {
      return 'database checking failed';
    } else {
      return super.handler(name, password);
    }
  }
}

export default CheckUser;
