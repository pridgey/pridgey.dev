import { Title } from "solid-start";
import { StormBackground } from "~/components/StormBackground";
import styles from "~/styles/home.module.css";
import { Menu } from "~/components/Menu/Menu";

export default function Home() {
  return (
    <Menu>
      <StormBackground />
      <main class={styles.layout}>
        <Title>pridgey.dev - I do dev</Title>
        <h1>pridgey.dev</h1>
      </main>
    </Menu>
  );
}
