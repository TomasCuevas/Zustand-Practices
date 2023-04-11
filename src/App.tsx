//* stores *//
import { useCounterStore } from "./store/counter.store";

//* styles *//
import "./App.css";

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;
