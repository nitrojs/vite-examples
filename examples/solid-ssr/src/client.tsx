/// <reference types="vite/client" />
import { hydrate } from "solid-js/web";
import "./styles.css";

const App = await import("./App.jsx").then((mod) => mod.default);

hydrate(() => <App />, document.querySelector("#app")!);
