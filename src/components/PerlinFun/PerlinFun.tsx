import { onMount } from "solid-js";
import { Perlin } from "../../scripts/Perlin";

type PointProps = {
  x: number;
  y: number;
};

let points: PointProps[] = [];
const perlin = new Perlin(Math.random());
const period = 1 / 500;
const width = 50;
const height = 50;
const borderWidth = 0;
let canvas: HTMLCanvasElement;
let canvasContext: CanvasRenderingContext2D;
let squareWidth: number;
let squareHeight: number;

const prepare = () => {
  for (let y = 0; y <= height; y++) {
    for (let x = 0; x <= width; x++) {
      points.push({
        x,
        y,
      });
    }
  }

  canvas = document.getElementsByTagName("canvas")[0];
  canvasContext = canvas.getContext("2d")!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  squareWidth = canvas.width / width;
  squareHeight = canvas.height / height;
};

let start: DOMHighResTimeStamp;

let mousePoint = {
  x: -1000,
  y: -1000,
};

const handleMouseMove = (ev: MouseEvent) => {
  mousePoint.x = ev.offsetX;
  mousePoint.y = ev.offsetY;

  drawSquares(0);
};

document.addEventListener("mousemove", handleMouseMove);

const drawSquares = (timestamp: DOMHighResTimeStamp) => {
  if (points.length) {
    if (!start) start = timestamp;

    // Loop through all of the points
    points.forEach((singlePoint) => {
      // MAKE SOME NOISE!
      let noise = perlin.perlin2(
        singlePoint.x * period,
        singlePoint.y * period
      );

      const pointX = singlePoint.x * squareWidth;
      const pointY = singlePoint.y * squareHeight;
      let pointBlocked = false;
      const distance =
        ((pointX - mousePoint.x) ^ 2) + ((pointY - mousePoint.y) ^ 2);
      if (distance > 5) {
        pointBlocked = true;
      }

      console.log({ mousePoint, pointX, pointY, distance });

      canvasContext.fillStyle = `hsl(${Math.floor(noise * 360)}, 95%, ${
        pointBlocked ? "0%" : "80%"
      })`;
      canvasContext.strokeStyle = "transparent";
      canvasContext.fillRect(
        singlePoint.x * squareWidth - 1,
        singlePoint.y * squareHeight - 1,
        canvas.width / width + 1,
        canvas.height / height + 1
      );
    });

    if (timestamp - start < 120 * 1000) {
      //window.requestAnimationFrame(drawSquares);
    }
  }
};

export const PerlinFun = () => {
  onMount(() => {
    prepare();
    drawSquares(0);
    //window.requestAnimationFrame(drawSquares);
  });

  return <canvas></canvas>;
};
