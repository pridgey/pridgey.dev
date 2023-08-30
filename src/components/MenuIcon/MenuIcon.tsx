import styles from "./MenuIcon.module.css";

type MenuIconProps = {
  MenuOpen: boolean;
};

export const MenuIcon = (props: MenuIconProps) => {
  return (
    <div class={styles.container}>
      <div
        classList={{
          [styles.bar]: true,
          [styles.top_open]: props.MenuOpen,
        }}
      ></div>
      <div
        classList={{
          [styles.bar]: true,
          [styles.middle_open]: props.MenuOpen,
        }}
      ></div>
      <div
        classList={{
          [styles.bar]: true,
          [styles.bottom_open]: props.MenuOpen,
        }}
      ></div>
    </div>
  );
};
