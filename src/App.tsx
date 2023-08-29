import type { Component } from "solid-js";
import { StormBackground } from "./components/StormBackground";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <>
      <StormBackground />
      <main class={styles.layout}>
        <h1>Pridgey.dev</h1>
      </main>
    </>
  );
};

export default App;
