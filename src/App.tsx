import { useEffect } from "react";

//* stores *//
import { useCounterStore } from "./store/counter.store";

//* styles *//
import "./App.css";

function App() {
  const { count, posts } = useCounterStore((state) => state);
  const { getPosts, increment } = useCounterStore((state) => state);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment(10)}>Increment by 10</button>

      <hr />

      {JSON.stringify(posts, null, 4)}
    </div>
  );
}

export default App;
