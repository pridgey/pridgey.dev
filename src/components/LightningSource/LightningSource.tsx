import type { JSX } from "solid-js";
import { variateNumber } from "../../utilities/VariateNumber";
import { random } from "../../utilities/Random";
import styles from "./LightningSource.module.css";

type LightningSourceProps = {
  style?: JSX.CSSProperties;
};

export const LightningSource = (props: LightningSourceProps) => {
  const lightning1Duration = Math.round(variateNumber(30, -5, 5));
  const lightning1Delay = Math.round(variateNumber(15, -5, 5));
  const lightning2Duration = Math.round(variateNumber(18, -2, 20));
  const lightning2Delay = Math.round(variateNumber(20, -20, 20));

  const lightningLength = Math.round(random(150, 500));

  const whichLightning = Math.random();

  return (
    <div
      classList={{
        [styles.lightning]: true,
        [styles.lightning1]: whichLightning < 0.5,
        [styles.lightning2]: whichLightning > 0.3,
      }}
      style={{
        ...props.style,
        "--shadow-length": `${lightningLength}px`,
        "--lightning1-duration": `${lightning1Duration}s`,
        "--lightning1-delay": `${lightning1Delay}s`,
        "--lightning2-duration": `${lightning2Duration}s`,
        "--lightning2-delay": `${lightning2Delay}s`,
      }}
    ></div>
  );
};
