# Nitro + Vite Examples

<p align="center">🎉 Nitro v3 is becoming "just" a Vite plugin!</p>

> [!NOTE]
> See [💬 Nitro Vite Feedback](https://github.com/nitrojs/nitro/discussions/3460) for discussions.

## Examples

<!-- Use `pnpm automd` to update section below -->

<!-- automd:examples -->

| Example         | Source                                              | Playground                                                                                                                                                   | Clone                                                                         |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `basic-service` | [examples/basic-service](./examples/basic-service/) | [stackblitz](https://stackblitz.com/fork/github/nitrojs/nitro-vite-examples/tree/main/examples/basic-service?startScript=dev&file=vite.config.mjs,server.ts) | `npx giget gh:nitrojs/vite-examples/examples/basic-service basic-service-app` |
| `h3`            | [examples/h3](./examples/h3/)                       | [stackblitz](https://stackblitz.com/fork/github/nitrojs/nitro-vite-examples/tree/main/examples/h3?startScript=dev&file=vite.config.mjs,server.ts)            | `npx giget gh:nitrojs/vite-examples/examples/h3 h3-app`                       |
| `hono`          | [examples/hono](./examples/hono/)                   | [stackblitz](https://stackblitz.com/fork/github/nitrojs/nitro-vite-examples/tree/main/examples/hono?startScript=dev&file=vite.config.mjs,server.ts)          | `npx giget gh:nitrojs/vite-examples/examples/hono hono-app`                   |
| `node-compat`   | [examples/node-compat](./examples/node-compat/)     | [stackblitz](https://stackblitz.com/fork/github/nitrojs/nitro-vite-examples/tree/main/examples/node-compat?startScript=dev&file=vite.config.mjs,server.ts)   | `npx giget gh:nitrojs/vite-examples/examples/node-compat node-compat-app`     |
| `react-ssr`     | [examples/react-ssr](./examples/react-ssr/)         | [stackblitz](https://stackblitz.com/fork/github/nitrojs/nitro-vite-examples/tree/main/examples/react-ssr?startScript=dev&file=vite.config.mjs,server.ts)     | `npx giget gh:nitrojs/vite-examples/examples/react-ssr react-ssr-app`         |
| `vue-ssr`       | [examples/vue-ssr](./examples/vue-ssr/)             | [stackblitz](https://stackblitz.com/fork/github/nitrojs/nitro-vite-examples/tree/main/examples/vue-ssr?startScript=dev&file=vite.config.mjs,server.ts)       | `npx giget gh:nitrojs/vite-examples/examples/vue-ssr vue-ssr-app`             |

<!-- /automd -->

> [!WARNING]
> Examples are highly experimental at the moment!

> [!TIP]
> Contributions are always welcome! Feel free to submit pull requests to add more examples.

## Try Locally

- Clone this repository.
- Install the latest LTS version of [Node.js](https://nodejs.org/en/) (v22+).
- Enable [corepack](https://github.com/nodejs/corepack) using `corepack enable` (run `npm i -g corepack` if it's not available).
- Install dependencies using `pnpm install`.
- Use `pnpm -C examples/<name> dev` or `pnpm -C examples/<name> build` to try examples.
