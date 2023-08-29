import { For, type JSX } from "solid-js";
import { variateNumber } from "../../utilities/VariateNumber";
import { random } from "../../utilities/Random";

type SVGProps = {
  class?: string;
  classlist?: {
    [k: string]: boolean | undefined;
  };
  style?: JSX.CSSProperties;
};

type Circle = {
  radius: number;
  X: number;
  Y: number;
};

// Configuration
const maxRadius = 25;
const minRadius = 10;
const minCircles = 4;
const maxCircles = 10;
const circleXOverlap = 10;
const circleXMinVariance = 0;
const circleXMaxVariance = 10;
const circleYMinVariance = -10;
const circleYMaxVariance = 5;

export const StormCloudSVG = (props: SVGProps) => {
  const numberOfCircles = random(minCircles, maxCircles);

  const generateCircles = (): Circle[] => {
    // Array of circles
    const circles: Circle[] = [];

    // Get all the circles radius
    const radiui: number[] = [];

    for (let i = 0; i < numberOfCircles; i++) {
      radiui.push(random(minRadius, maxRadius));
    }

    // Sort the circles radius
    radiui.sort((a, b) => a - b);

    const sortedRadius: number[] = new Array(radiui.length);
    const isEvenLength = radiui.length % 2 === 0;

    // Put largest in the middle
    sortedRadius[Math.floor(radiui.length / 2)] = radiui.pop() ?? 0;
    if (isEvenLength) {
      // Put second largest in middle+1
      sortedRadius[Math.floor(radiui.length / 2)] = radiui.pop() ?? 0;
      console.log("Progress 2:", { sortedRadius });
    }

    let rightIndex = radiui.length;
    let leftIndex = 0;

    while (radiui.length) {
      sortedRadius[rightIndex] = radiui.shift() ?? 0;
      if (radiui.length) sortedRadius[leftIndex] = radiui.shift() ?? 0;

      rightIndex--;
      leftIndex++;
    }

    // Current X as Circles proceed to the right
    let currentX = 0;
    // Current Y as Circles proceed
    let currentY = 0;

    // All these circles make a cloud
    sortedRadius.forEach((r, i) => {
      if (i === 0) {
        currentX = r;
        currentY = r;
      } else {
        currentX = variateNumber(
          currentX + r - variateNumber(circleXOverlap, -3, 3),
          circleXMinVariance,
          circleXMaxVariance
        );
        currentY = variateNumber(r, circleYMinVariance, circleYMaxVariance);
      }

      circles.push({
        radius: r,
        X: currentX,
        Y: Math.max(currentY, r),
      });
    });

    return circles;
  };

  const cloud = generateCircles();
  const frameWidth = (cloud.at(-1)?.X ?? 0) + (cloud.at(-1)?.radius ?? 0) + 10;
  const frameHeight =
    Math.max(...cloud.map((c) => c.Y)) +
    Math.max(...cloud.map((c) => c.radius));

  return (
    <svg
      class={props.class}
      classList={props.classlist}
      viewBox={`0 0 ${frameWidth} ${frameHeight}`}
      color="var(--cloud-blue)"
      style={props.style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <For each={cloud}>
        {(circle) => (
          <circle
            cx={circle.X}
            cy={circle.Y}
            r={circle.radius}
            fill="currentColor"
          />
        )}
      </For>
    </svg>
  );
};
