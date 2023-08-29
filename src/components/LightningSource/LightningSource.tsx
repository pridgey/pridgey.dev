import { createUniqueId, onMount, type JSX } from "solid-js";
import { variateNumber } from "../../utilities/VariateNumber";
import { random } from "../../utilities/Random";
import styles from "./LightningSource.module.css";

type LightningSourceProps = {
  style?: JSX.CSSProperties;
};

export const LightningSource = (props: LightningSourceProps) => {
  const calculateValues = () => {
    const lightningDuration = Math.round(random(15, 25));
    const lightningRotation = random(-4, 4);
    const lightningTop = random(-50, 0);
    const lightningWidth = random(20, 110);
    const lightningLeft = random(-10, 110);

    const lightningLength = Math.round(random(200, 250));

    const docRoot = document.querySelector(":root");

    if (docRoot) {
      const docRootHTMLElement = docRoot as HTMLElement;
      docRootHTMLElement.style.setProperty(
        "--shadow-length",
        `${lightningLength}px`
      );
      docRootHTMLElement.style.setProperty(
        "--lightning-duration",
        `${lightningDuration}s`
      );
      docRootHTMLElement.style.setProperty(
        "--cloud-filter-id",
        `url(#${filterID})`
      );
      docRootHTMLElement.style.setProperty(
        "--lightning-rotation",
        `rotate(${lightningRotation}deg)`
      );
      docRootHTMLElement.style.setProperty(
        "--lightning-top",
        `${lightningTop}px`
      );
      docRootHTMLElement.style.setProperty(
        "--lightning-width",
        `${lightningWidth}vw`
      );
      docRootHTMLElement.style.setProperty(
        "--lightning-left",
        `${lightningLeft}vw`
      );
    }

    setTimeout(calculateValues, lightningDuration * 1000);
  };

  onMount(() => {
    calculateValues();
  });

  const filterID = createUniqueId();

  return (
    <>
      <div
        class={styles.lightning}
        style={{
          ...props.style,
        }}
      ></div>
      <svg width="0" height="0">
        <filter id={filterID}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="4"
            seed={random(0, 10000)}
          />
          <feDisplacementMap in="SourceGraphic" scale="18" />
        </filter>
      </svg>
    </>
  );
};
