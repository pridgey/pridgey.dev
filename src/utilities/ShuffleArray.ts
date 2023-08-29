/**
 * Shuffles an array around randomly (Fisher-Yates)
 * @param array The array to be shuffled
 * @returns The shuffled array
 */
export const shuffleArray = (array: Array<unknown>) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
