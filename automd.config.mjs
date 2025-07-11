import { glob } from "node:fs/promises";
import * as md from "mdbox";

export default {
  generators: {
    examples: {
      async generate(_ctx) {
        let examples = [];
        for await (const dir of glob("examples/*")) {
          const name = dir.split("/").pop();

          const stackblitz = `https://stackblitz.com/fork/github/nitrojs/nitro-vite-examples/tree/main/examples/${name}?startScript=dev&file=vite.config.mjs,server.ts`;

          const cloneCommand = `npx giget gh:nitrojs/vite-examples/examples/${name} ${name}-app`;

          examples.push([
            `\`${name}\``,
            md.link(`./examples/${name}/`, `examples/${name}`),
            md.link(stackblitz, "stackblitz"),
            `\`${cloneCommand}\``,
          ]);
        }
        return {
          contents: md.table({
            columns: ["Example", "Source", "Playground", "Clone"],
            rows: examples,
          }),
        };
      },
    },
  },
};
