import styles from "./Building.module.css";
import { useState, useEffect } from "react";

type BuildingProps = {
  rotation: number;
};

export const Building = ({ rotation }: BuildingProps) => {
  const [translateValue, setTranslateValue] = useState(rotation);

  useEffect(() => {
    setTranslateValue(rotation);
  }, [rotation]);

  return (
    <>
      <div
        className={styles.container}
        style={{ "--zed": `${translateValue}deg` } as React.CSSProperties}
      >
        <div className={`${styles.building_face} ${styles.front}`}>A</div>
        <div className={`${styles.building_face} ${styles.top}`}>B</div>
        <div className={`${styles.building_face} ${styles.left}`}>C</div>
        <div className={`${styles.building_face} ${styles.right}`}>D</div>
      </div>
    </>
  );
};
