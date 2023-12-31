// @refresh reload
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { createSignal } from "solid-js";
import "./app.css";

function App(props) {
  const [count, setCount] = createSignal(0);
  return (
    <main>
      <nav>
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/blog">Blog</A>
        <A href="/blog/test">Test</A>
      </nav>
      <h1>Hello world!</h1>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>

      {props.children}
    </main>
  );
}

export default function AppWithProviders() {
  return (
    <Router root={App}>
      <FileRoutes />
    </Router>
  );
}
