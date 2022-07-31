import styles from "./Building.module.css";
import { useState, useEffect } from "react";

type BuildingProps = {
  rotation: number;
  scale: number;
};

export const Building = ({ rotation, scale }: BuildingProps) => {
  const [translateValue, setTranslateValue] = useState(rotation);
  const [scaleValue, setScaleValue] = useState(scale);

  useEffect(() => {
    setTranslateValue(rotation);
  }, [rotation]);

  useEffect(() => {
    setScaleValue(scale);
  }, [scale]);

  const {
    building_face,
    front,
    top,
    left,
    right,
    roof,
    front_roof,
    left_roof,
    right_roof,
  } = styles;

  return (
    <>
      <div
        className={styles.container}
        style={
          {
            "--zed": `${translateValue}deg`,
            "--sc": `${scaleValue}px`,
            "--sct": `${scaleValue / 2}px`,
          } as React.CSSProperties
        }
      >
        <div className={`${building_face} ${front}`}>F</div>
        <div className={`${building_face} ${left}`}>L</div>
        <div className={`${building_face} ${right}`}>R</div>
        <div className={`${building_face} ${roof} ${front_roof}`}>R</div>
        <div className={`${building_face} ${roof} ${left_roof}`}>RL</div>
        <div className={`${building_face} ${roof} ${right_roof}`}>RR</div>
      </div>
    </>
  );
};
