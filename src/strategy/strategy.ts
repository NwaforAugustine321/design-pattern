class Strategy {
  private strategy: SortEvent;

  constructor(strategy: SortEvent) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SortEvent): void {
    this.strategy = strategy;
  }

  sort(): number[] {
    return this.strategy!.sort();
  }
}

export default Strategy;
