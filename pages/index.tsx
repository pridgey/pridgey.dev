import styles from "../styles/Home.module.css";
import { Building } from "./../components/Building/Building";
import { useState } from "react";
import Document from "next/document";

const percentToRange = (percent, rangeMin, rangeMax) => {
  return percent * ((rangeMax - rangeMin) / 100) + rangeMin;
};

export default function Home({}) {
  const [mousePos, setMousePos] = useState(30);
  const [sc, setSc] = useState(100);

  return (
    <div
      className={styles.main}
      onMouseMove={(e) => {
        const percentage = e.clientX / window?.innerWidth; // 0.5
        const range = 2 * (percentage * 100) - 100;
        setMousePos(range);

        const p2 = e.clientY / window?.innerHeight;
        const range2 = percentToRange(p2 * 100, 100, 300);
        setSc(range2);
      }}
    >
      <div className={styles.greeting}>Hej, I'm Pridgey</div>
      <div className={styles.windowbox}>
        <Building rotation={mousePos} scale={sc} />
        <Building rotation={mousePos / 2} scale={sc * 2} />
      </div>
    </div>
  );
}
