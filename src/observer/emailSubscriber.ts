import SubscriberHandler from './handler';

class EmailSubscriber implements SubscriberHandler {
  private userEmail: string = '';
  user: string;

  constructor(email: string, user: string) {
    this.userEmail = email;
    this.user = user;
  }

  execute() {
    // send email
    console.log('sending email');
  }
}

export default EmailSubscriber;
