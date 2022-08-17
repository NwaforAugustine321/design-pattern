import SubscriberHandler from './handler';
import subscriberEvents from './event';

class Observer {
  private list: {
    [key: string]: SubscriberHandler[];
  };

  constructor() {
    this.list = {
      message: [],
      email: [],
    };
  }

  register(
    type: subscriberEvents.EMAIL | subscriberEvents.MESSAGE,
    event: SubscriberHandler
  ): void {
    this.list[type].push(event);
  }

  deregister(
    type: subscriberEvents.EMAIL | subscriberEvents.MESSAGE,
    user: string
  ): void {
    this.list[type] = this.list[type].filter(
      (sub: SubscriberHandler): boolean => {
        return sub.user === user ? false : true;
      }
    );
  }

  notify(): void {
    Object.values(this.list).forEach((listSub: SubscriberHandler[]): void => {
      listSub.forEach((sub: SubscriberHandler): void => {
        sub.execute();
      });
    });
  }
}

export default Observer;
