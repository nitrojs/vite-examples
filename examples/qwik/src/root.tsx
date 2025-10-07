import { component$, useSignal } from "@qwik.dev/core";

import "./global.css";

export default component$(() => {
  const counterSig = useSignal(0);

  return (
    <div>
      <h1>Hello from Qwik!</h1>
      <button
        onClick$={() => {
          counterSig.value += 1;
        }}
      >
        {counterSig.value}
      </button>
    </div>
  );
});
