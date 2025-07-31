/// <reference types="vite/client" />
import { renderToPipeableStream, renderToString } from "react-dom/server";
import App from "./App.jsx";
import { PassThrough } from 'node:stream'

export default {
  async fetch(req: Request): Promise<Response> {

    const response = new Response();
    const reactAppPassthrough = new PassThrough()

    const { pipe } = renderToPipeableStream(<App />,
      {
        onShellReady() {
          pipe(reactAppPassthrough);
        }
      }
    );
    return new Response(reactAppPassthrough as any, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
};

function indexHTML(appHTML: string) {
  return /* html */ `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Nitro + React</title>
    ${
      import.meta.env?.DEV
        ? '<script type="module" src="/@vite/client"></script>'
        : ""
    }
  </head>
  <body>
    <div id="app">${appHTML}</div>
    <script type="module" src="${resolveEntry("src/client.tsx")}"></script>
  </body>
</html>`;
}

function resolveEntry(entry: string): string {
  if (import.meta.env?.PROD) {
    const manifest = globalThis.__VITE_MANIFEST__;
    const file = manifest?.[entry]?.file;
    if (!file) {
      throw new Error(
        manifest
          ? `Entry "${entry}" not found in Vite manifest.`
          : "Vite manifest is not available.",
      );
    }
    return `/${file}`;
  }
  return `/${entry}`;
}
