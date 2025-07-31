import React, { useState } from "react";

function Foo({ promise }) {
  React.use(promise);
  return <h2>Foo component loaded!</h2>;
}
export default () => {
  const [count, setCount] = useState(0);

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
  return (
    <div>
      <h1>Hello, React!</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Foo promise={promise} />
      </React.Suspense>
    </div>
  );
};
