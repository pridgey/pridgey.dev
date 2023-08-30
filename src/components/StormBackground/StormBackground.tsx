import { random } from "~/utilities/Random";
import { shuffleArray } from "~/utilities/ShuffleArray";
import { LightningSource } from "../LightningSource";
import { StormCloud } from "../StormCloud";
import styles from "./StormBackground.module.css";

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
      <LightningSource />
      <StormCloud />
    </div>
  );
};
