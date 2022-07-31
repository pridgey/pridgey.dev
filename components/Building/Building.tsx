import styles from "./Building.module.css";
import { useState, useEffect } from "react";

type BuildingProps = {
  Rotation: number;
  FrontWidth: number;
  SideWidth?: number;
  Height: number;
  Top: string;
  Left: string;
  Windows: number;
  SideWindows: number;
};

export const Building = ({
  Rotation,
  FrontWidth,
  Height,
  SideWidth,
  Top,
  Left,
  Windows,
  SideWindows,
}: BuildingProps) => {
  const [translateValue, setTranslateValue] = useState(Rotation);
  const [scaleValue, setScaleValue] = useState(FrontWidth);

  const randomColor = Math.round(Math.random() * 255);
  const randomSat = Math.round(Math.random() * 100);

  useEffect(() => {
    setTranslateValue(Rotation);
  }, [Rotation]);

  useEffect(() => {
    setScaleValue(FrontWidth);
  }, [FrontWidth]);

  const {
    building_face,
    front,
    left,
    right,
    roof,
    front_roof,
    left_roof,
    right_roof,
    window,
  } = styles;

  return (
    <>
      <div
        className={styles.container}
        style={
          {
            "--zed": `${translateValue}deg`,
            "--height": `${Height}px`,
            "--side": `${SideWidth || FrontWidth}px`,
            "--side-offset": `${FrontWidth / 2 - 1}px`,
            "--sc": `${scaleValue}px`,
            "--sct": `${scaleValue / 2 - 1}px`,
            "--left": Left,
            "--top": Top,
            "--color": `hsl(${randomColor}, ${randomSat}%, 50%)`,
            "--color-two": `hsl(${randomColor}, ${randomSat}%, 65%)`,
            "--color-dark": `hsl(${randomColor}, ${randomSat}%, 30%)`,
          } as React.CSSProperties
        }
      >
        <div className={`${building_face} ${front}`}>
          {Array.from({ length: Windows }, (_, i) => i).map((i) => (
            <div key={`window-${i}`} className={window}></div>
          ))}
        </div>
        <div className={`${building_face} ${left}`}>
          {Array.from({ length: SideWindows }, (_, i) => i).map((i) => (
            <div key={`window-${i}`} className={window}></div>
          ))}
        </div>
        <div className={`${building_face} ${right}`}></div>
        <div className={`${building_face} ${roof} ${front_roof}`}></div>
        <div className={`${building_face} ${roof} ${left_roof}`}></div>
        <div className={`${building_face} ${roof} ${right_roof}`}></div>
      </div>
    </>
  );
};
