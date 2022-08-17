import SubscriberHandler from './handler';

class PhoneSubscriber implements SubscriberHandler {
  private userPhoneNumber: string = '';
  user: string;

  constructor(phoneNumber: string, user: string) {
    this.userPhoneNumber = phoneNumber;
    this.user = user;
  }

  execute() {
    console.log('sending message to user phone number');
  }
}

export default PhoneSubscriber;
