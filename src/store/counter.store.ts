import create from "zustand";

//* interface *//
interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  posts: Post[];
  increment(value: number): void;
  getPosts(): Promise<void>;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 10,
  posts: [],
  increment: (value: number) =>
    set((state) => ({
      ...state,
      count: state.count + value,
    })),
  getPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    set((state) => ({
      ...state,
      posts,
    }));
  },
}));
