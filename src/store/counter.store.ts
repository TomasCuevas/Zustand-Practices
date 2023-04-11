import create from "zustand";

//* interface *//
interface CounterState {
  count: number;
  increment(value: number): void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 10,
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
}));
