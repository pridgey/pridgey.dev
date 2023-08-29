/**
 * Takes a number and adds or subtracts a variant value.
 * @param num The original number to vary slightly
 * @param min The bottom range of variation
 * @param max The top range of variation
 * @returns The new number
 */
export const variateNumber = (
  num: number,
  min: number,
  max: number
): number => {
  const variant = Math.random() * max + min;

  return num + variant;
};
