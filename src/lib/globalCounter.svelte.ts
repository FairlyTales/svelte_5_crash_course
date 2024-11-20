class GlobalCounter {
  private counter = $state(0);

  get() {
    return this.counter;
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}

export const globalCounter = new GlobalCounter();
