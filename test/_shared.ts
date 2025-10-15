import { join } from "path";
import { fileURLToPath } from "url";
import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { createServer, createBuilder, type ViteDevServer } from "vite";

const examplesDir = fileURLToPath(new URL("../examples", import.meta.url));

export function setupTest(name: string) {
  const rootDir = join(examplesDir, name);

  describe(name, () => {
    type TestContext = {
      fetch: typeof globalThis.fetch;
    };

    function fixtureTests(ctx: TestContext) {
      test("warmup", async () => {
        const res = await ctx.fetch("/_404");
        // expect(res.status).toBe(404);
      });

      test("/api/hello", async () => {
        const res = await ctx.fetch("/api/hello");
        const text = await res.text();
        expect(text).toBe("API Works!");
      });
    }

    describe("dev", () => {
      let server: ViteDevServer;
      const context: TestContext = {} as any;

      beforeAll(async () => {
        server = await createServer({ root: rootDir });
        await server.listen("0" as unknown as number);
        const addr = server.httpServer?.address() as {
          port: number;
          address: string;
          family: string;
        };
        const baseURL = `http://${addr.family === "IPv6" ? `[${addr.address}]` : addr.address}:${addr.port}`;
        context.fetch = (url, opts) => fetch(baseURL + url, opts);
      });

      afterAll(async () => {
        await server?.close();
      });

      fixtureTests(context);
    });

    describe("prod", () => {
      const context: TestContext = {} as any;

      beforeAll(async () => {
        process.chdir(rootDir);
        process.env.NITRO_PRESET = "standard";

        const builder = await createBuilder({
          base: rootDir,
          logLevel: "warn",
        });
        await builder.buildApp();

        const entry = join(rootDir, ".output/server/index.mjs");
        const entryMod = await import(entry).then((mod) => mod.default);
        expect(entryMod?.fetch).toBeInstanceOf(Function);
        context.fetch = entryMod.fetch;
      });

      fixtureTests(context);
    });
  });
}
