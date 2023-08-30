import { A } from "solid-start";
import styles from "./Button.module.css";
import type { JSX } from "solid-js";
import { ColorDict, FontSizeDict } from "~/styles/theme";
import { getFontSize } from "~/styles/theme";
import { createMemo } from "solid-js";
import { TbLoader2 } from "solid-icons/tb";

type ButtonCommonProps = {
  BackgroundColor?: keyof typeof ColorDict;
  Disabled?: boolean;
  children: JSX.Element;
  Class?: string;
  GridArea?: string;
  ID?: string;
  Icon?: JSX.Element;
  Padding?: JSX.CSSProperties["padding"];
  Pending?: boolean;
  Style?: JSX.CSSProperties;
  Size?: keyof typeof FontSizeDict;
  TextColor?: keyof typeof ColorDict;
};

export type ButtonEleProps = ButtonCommonProps & {
  Type: "button" | "submit";
  OnClick?: (e?: MouseEvent) => void;
  Ref?: HTMLButtonElement;
};

export type ButtonAnchorProps = ButtonCommonProps & {
  Href: string;
  Ref?: HTMLAnchorElement;
  Target?: HTMLAnchorElement["target"];
};

export type ButtonProps = ButtonEleProps | ButtonAnchorProps;

export const Button = (props: ButtonProps) => {
  const buttonColor = ColorDict[props.BackgroundColor ?? "Primary"];
  const textColor = createMemo(() => ColorDict[props.TextColor ?? "White"]);
  const fontSize = getFontSize(props.Size ?? "4-medium-large");

  const childIsString = typeof props.children === "string";

  if ((props as ButtonAnchorProps).Href) {
    return (
      <a
        classList={{
          [styles.button]: true,
          [props.Class || ""]: !!props.Class,
        }}
        href={(props as ButtonAnchorProps).Href}
        id={props.ID}
        ref={props.Ref as HTMLAnchorElement}
        style={{
          ...props.Style,
          "background-color": buttonColor,
          "--button-color": textColor(),
          "font-size": fontSize,
          "grid-area": props.GridArea,
          padding: props.Padding ?? "2rem",
        }}
        target={(props as ButtonAnchorProps).Target}
      >
        {!childIsString && props.Pending ? (
          <TbLoader2 class={styles.spin} />
        ) : (
          props.children
        )}
        {childIsString && props.Pending ? (
          <TbLoader2 class={styles.spin} />
        ) : (
          props.Icon
        )}
      </a>
    );
  }

  return (
    <button
      disabled={props.Disabled || props.Pending}
      classList={{
        [styles.button]: true,
        [props.Class || ""]: !!props.Class,
      }}
      id={props.ID}
      ref={props.Ref as HTMLButtonElement}
      style={{
        ...props.Style,
        "background-color": buttonColor,
        "--button-color": textColor(),
        "font-size": fontSize,
        "grid-area": props.GridArea,
        padding: props.Padding ?? "2rem",
      }}
      type={(props as ButtonEleProps).Type}
      onClick={(e) => (props as ButtonEleProps).OnClick?.(e)}
    >
      {!childIsString && props.Pending ? (
        <TbLoader2 class={styles.spin} />
      ) : (
        props.children
      )}
      {childIsString && props.Pending ? (
        <TbLoader2 class={styles.spin} />
      ) : (
        props.Icon
      )}
    </button>
  );
};
