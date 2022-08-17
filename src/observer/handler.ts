interface SubscriberHandler {
  user: string;
  execute: () => void;
}

export default SubscriberHandler;
