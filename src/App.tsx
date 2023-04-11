//* stores *//
import { useCounterStore } from "./store/counter.store";

//* styles *//
import "./App.css";

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment(10)}>Increment by 10</button>
    </div>
  );
}

export default App;
