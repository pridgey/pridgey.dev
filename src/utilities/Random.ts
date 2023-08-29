/**
 * Generate a random number with a min and max
 * @param min Minimum number
 * @param max Maximum number
 * @returns random number
 */
export const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
