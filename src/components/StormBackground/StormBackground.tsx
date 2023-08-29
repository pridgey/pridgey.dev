import styles from "./StormBackground.module.css";
import { StormCloud } from "../StormCloud";
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
      <StormCloud style={{ "box-shadow": "0px 800px 40px 0px var(--cloud)" }} />
      <LightningSource />
      <StormCloud />
    </div>
  );
};
