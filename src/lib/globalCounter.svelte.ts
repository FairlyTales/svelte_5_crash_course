import { getContext, setContext } from 'svelte';

class GlobalCounter {
  private counter = $state(0);

  constructor() {
    this.counter = 0;
  }

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

const globalCounter = new GlobalCounter();

const COUNTER_KEY = Symbol('COUNTER_KEY');

export const setGlobalCounterState = () => {
  return setContext(COUNTER_KEY, globalCounter);
};

export const getGlobalCounterState = () => {
  return getContext<ReturnType<typeof setGlobalCounterState>>(COUNTER_KEY);
};
