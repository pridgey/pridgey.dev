import styles from "./StormBackground.module.css";
import { StormCloudSVG } from "../StormCloudSVG";
import { For } from "solid-js";
import { variateNumber } from "../../utilities/VariateNumber";
import { shuffleArray } from "../../utilities/ShuffleArray";
import { LightningSource } from "../LightningSource";
import { random } from "../../utilities/Random";

const columns = 20;
const rows = 20;

export const StormBackground = () => {
  const allClouds: any[] = [];

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      allClouds.push({
        height: random(200, 400),
        left: random(-10, 110),
        top: random(-10, 110),
        width: random(200, 400),
      });
    }
  }

  shuffleArray(allClouds);

  return (
    <div class={styles.layout}>
      <For each={new Array(6)}>
        {(_, i) => (
          <LightningSource
            style={{
              left: `${allClouds[i()]?.left}%`,
              top: `${allClouds[i()]?.top}%`,
            }}
          />
        )}
      </For>
      <For each={allClouds}>
        {(cloudData, i) => (
          <StormCloudSVG
            class={styles.cloud}
            style={{
              height: `${cloudData.height}px`,
              left: `${cloudData.left}%`,
              top: `${cloudData.top}%`,
              width: `${cloudData.width}px`,
            }}
          />
        )}
      </For>
    </div>
  );
};
