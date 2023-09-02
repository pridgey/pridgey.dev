export const ColorDict = {
  Background: "var(--color-background)",
  Black: "var(--color-black)",
  Blue: "var(--color-blue)",
  Gray: "var(--color-gray)",
  Lightning: "var(--color-lightning)",
  Red: "var(--color-red)",
  White: "var(--color-white)",
};

// Rem based on initial font-size 6px
export const FontSizeDict = {
  "1-detail": 2.1666666667,
  "2-subtext": 2.3333333333,
  "3-paragraph": 3.3333333333,
  "4-subtitle": 3.6666666667,
  "5-header": 4,
  "6-title": 7,
};

export const FontWeightDict = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

/**
 * Helper function to lookup fontsize and return rem string
 * @param key Key to lookup fontsize
 * @returns Font-size in rems
 */
export const getFontSize = (key: keyof typeof FontSizeDict) => {
  if (Object.hasOwn(FontSizeDict, key)) {
    return `${FontSizeDict[key]}rem`;
  }
  return `${FontSizeDict["3-paragraph"]}rem`;
};
