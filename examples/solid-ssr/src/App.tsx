/// <reference types="vite/client" />
import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1>Hello, Solid!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count()}
      </button>
    </div>
  );
};
