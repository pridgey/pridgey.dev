import styles from "../styles/Home.module.css";
import { Building } from "./../components/Building/Building";
import { useEffect, useState } from "react";

const rot = 10;

const percentToRange = (percent, rangeMin, rangeMax) => {
  return percent * ((rangeMax - rangeMin) / 100) + rangeMin;
};

const randNumInRange = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const generateHouseRow = (row: number) => {
  const iterations = randNumInRange(6, 9);
  const step = 100 / iterations;

  const newHouses = [];

  for (let i = 0; i < iterations; i++) {
    newHouses.push(
      <Building
        key={i}
        Height={randNumInRange(100, 150)}
        FrontWidth={randNumInRange(150, 250)}
        // SideWidth={randNumInRange(150, 250)}
        Rotation={rot}
        Left={`${step * i + randNumInRange(-5, 5)}%`}
        Top={`${100 * row + randNumInRange(0, 20) * row}px`}
        Windows={randNumInRange(4, 12)}
        SideWindows={randNumInRange(4, 10)}
      />
    );
  }

  return newHouses;
};

export default function Home({}) {
  const [mousePos, setMousePos] = useState(30);
  const [sc, setSc] = useState(100);

  const [houses, setHouses] = useState([[]]);

  useEffect(() => {
    setHouses((h) => {
      h[2] = generateHouseRow(2);
      h[1] = generateHouseRow(1);
      h[0] = generateHouseRow(0);
      return [...h];
    });
  }, []);

  return (
    <>
      <div
        className={styles.main}
        onMouseMove={(e) => {
          // const percentage = e.clientX / window?.innerWidth; // 0.5
          // const range = 2 * (percentage * 100) - 100;
          // setMousePos(range);
          // const p2 = e.clientY / window?.innerHeight;
          // const range2 = percentToRange(p2 * 100, 100, 300);
          // setSc(range2);
        }}
      >
        <div className={styles.city}>
          {houses[2]}
          {houses[1]}
          {houses[0]}
        </div>
      </div>
      <main className={styles.content}>Hej</main>
    </>
  );
}
