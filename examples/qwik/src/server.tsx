/// <reference types="vite/client" />
import { render, jsx } from "@qwik.dev/core";
import root from "./root";

export default {
  async fetch(req: Request): Promise<Response> {
    return new Response(indexHTML(), {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
};

function indexHTML() {
  return /* html */ `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Nitro + Qwik</title>

    <script async type="module" src="@qwik.dev/core/qwikloader.js">
      // ^ This is the QwikLoader, it's required for Qwik to work
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { render, jsx } from "./src/client";
      import Root from "./src/root";

      /** This renders your application */
      render(document.querySelector("#root"), jsx(Root));
    </script>
  </body>
</html>
`;
}
