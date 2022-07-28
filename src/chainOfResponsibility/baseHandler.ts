import handler from './interface';

abstract class BaseHandler implements handler {
  protected nexthandler: handler | null = null;

  setNextHandler(handler: BaseHandler): BaseHandler {
    this.nexthandler = handler;
    return handler;
  }

  handler(name: string, password: string): string {
    if (this.nexthandler === null) {
      return 'authetication completed successfully';
    }
    return this.nexthandler.handler(name, password);
  }
}

export default BaseHandler;
