import { glob } from "node:fs/promises";
import * as md from "mdbox";

export default {
  generators: {
    examples: {
      async generate(ctx) {
        let examples = [];
        for await (const dir of glob("examples/*")) {
          console.log(dir);
          const name = dir.split("/").pop();
          examples.push([
            `\`${name}\``,
            md.link(`./examples/${dir}/`, `examples/${name}`),
          ]);
        }
        return {
          contents: md.table({
            columns: ["Name", "Source"],
            rows: examples,
          }),
        };
      },
    },
  },
};
