import BaseHandler from './baseHandler';

class Loginvalidation extends BaseHandler {
  handler(name: string, password: string): string {
    if (name !== 'austine' || password !== '321') {
      return 'validation failed';
    } else {
      return super.handler(name, password);
    }
  }
}

export default Loginvalidation;
