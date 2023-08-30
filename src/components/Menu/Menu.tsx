import { CgMenu } from "solid-icons/cg";
import type { JSX } from "solid-js";
import { createSignal } from "solid-js";
import styles from "./Menu.module.css";
import { Button } from "../Button";
import { MenuIcon } from "../MenuIcon";

type MenuProps = {
  children: JSX.Element;
};

export const Menu = (props: MenuProps) => {
  const [isOpen, setOpen] = createSignal(false);

  return (
    <>
      <div class={styles.background}>
        <nav
          classList={{
            [styles.nav]: true,
            [styles.nav_open]: isOpen(),
          }}
        ></nav>
      </div>
      <div
        classList={{
          [styles.container]: true,
          [styles["container-open"]]: isOpen(),
        }}
      >
        {props.children}
        <Button
          BackgroundColor="Background"
          Class={styles.menuButton}
          TextColor="White"
          Type="button"
          OnClick={() => setOpen(!isOpen())}
        >
          <MenuIcon MenuOpen={isOpen()} />
        </Button>
      </div>
    </>
  );
};
