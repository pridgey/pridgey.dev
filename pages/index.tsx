import styles from "../styles/Home.module.css";
import { Building } from "./../components/Building/Building";
import { useState } from "react";
import Document from "next/document";

export default function Home({}) {
  const [mousePos, setMousePos] = useState(30);

  return (
    <div
      className={styles.main}
      onMouseMove={(e) => {
        const percentage = e.clientX / window?.innerWidth; // 0.5
        const range = 2 * (percentage * 100) - 100;
        setMousePos(range);
      }}
    >
      <div className={styles.greeting}>Hej, I'm Pridgey</div>
      <div className={styles.windowbox}>
        <Building rotation={mousePos} />
      </div>
    </div>
  );
}
