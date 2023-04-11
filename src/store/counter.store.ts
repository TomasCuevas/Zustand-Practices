import create from "zustand";

//* interface *//
interface CounterState {
  count: number;
}

export const useCounterStore = create<CounterState>(() => ({
  count: 10,
}));
