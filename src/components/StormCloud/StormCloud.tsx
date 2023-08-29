import { createUniqueId, type JSX } from "solid-js";
import { random } from "../../utilities/Random";
import styles from "./StormCloud.module.css";

type StormCloudProps = {
  style?: JSX.CSSProperties;
};

// Configuration
const baseFrequency = ".01";
const octaves = "6";

export const StormCloud = (props: StormCloudProps) => {
  const filterID = createUniqueId();

  return (
    <>
      <div
        class={styles.cloud}
        style={{
          ...props.style,
          "--cloud-filter-id": `url(#${filterID})`,
        }}
      ></div>
      <svg width="0" height="0">
        <filter id={filterID}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={octaves}
            seed={random(0, 10000)}
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
    </>
  );
};
