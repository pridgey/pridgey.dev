export const ColorDict = {
  Background: "var(--color-background)",
  BackgroundFull: "var(--color-fullbackground)",
  Black: "var(--color-black)",
  Foreground: "var(--color-foreground)",
  ForegroundFull: "var(--color-fullforeground)",
  Gray: "var(--color-gray)",
  Primary: "var(--color-primary)",
  Red: "var(--color-red)",
  Secondary: "var(--color-secondary)",
  White: "var(--color-white)",
};

export const FontSizeDict = {
  "1-small": 0.618,
  "2-normal": 1,
  "3-paragraph": 2,
  "3-medium": 2,
  "4-medium-large": 2.618,
  "5-large": 4.236,
  "5-header": 4.236,
  "6-extra-large": 6.854,
  "6-title": 6.854,
  "7-massive": 11.089,
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
  return `${FontSizeDict["2-normal"]}rem`;
};
