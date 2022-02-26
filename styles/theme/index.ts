import type {Theme} from "theme-ui"
import {breakpoints} from "./breakpoints"
import {colors} from "./colors"

export const theme: Theme = {
  config: {
    initialColorModeName: "light",
  },
  breakpoints,
  colors,
  space: [
    0, // 0
    2, // 1 
    4, // 2
    8, // 3
    16, // 4
    32, // 5
    64, // 6
    128, // 7
    256, // 8
    512, // 9
  ],
  fontSizes: {},
  fonts: {},
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    headline: 1.5,
    subtitle: 1.5,
    paragraph: 1.5,
    label: 1.5,
  },
  letterSpacings: {
    headline: "normal",
    subtitle: "normal",
    paragraph: "normal",
    label: "normal",
  },
  shadows: {},
  borders: {},
  sizes: {},
  borderWidths: {},
  borderStyles: {},
  zIndices: {},
  transitions: {},
  styles: {
    pre : {
      "body": {
        margin: "0 !important",
        padding: "0 !important",
      }
    },
  },
}