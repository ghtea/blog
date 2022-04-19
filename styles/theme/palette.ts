import {blue, grey, red} from "@mui/material/colors";

export const palette = {
  primary: blue["600"],
  error: red["600"],
  border: grey["300"],
  hover: grey["100"],
  // text
  text: grey["900"],
  textHint: grey["500"],
  textAlternative: "#ffffff",
  textPrimary: blue["300"],
  textError: red["300"],
  //
  code: grey["900"],
  codeBackground: grey["200"],
  blockquoteBackground: grey["100"],
  hrBackground: grey["300"],
  // chips
  chip: {
    "filled-default": {
      border: grey["800"],
      background: grey["800"],
      text: "#ffffff",
    },
    "filled-primary": {
      border: blue["800"],
      background: blue["800"],
      text: "#ffffff",
    },
    "outlined-default": {
      border: grey["900"],
      background: "transparent",
      text: grey["900"],
    },
    "outlined-primary": {
      border: blue["900"],
      background: "transparent",
      text: blue["900"],
    },
    "subtle-default": {
      border: grey["600"],
      background: grey["100"],
      text: grey["900"],
    },
    "subtle-primary": {
      border: blue["600"],
      background: blue["100"],
      text: blue["900"],
    },
  },
};


export type Paltte = typeof palette

export type PaltteColor = (
  keyof Paltte | 
  `chip.${keyof Paltte["chip"]}.${keyof Paltte["chip"][keyof Paltte["chip"]]}`
)

/**
 * Palette Color Record
 */
export const pcr = (() => {
  const newPaletteColorRecord = {}

  function addColorKey (record: Record<string, any>, stackedKey: string, paletteColorRecord: Record<string, string>) {
    Array.from(Object.entries(record)).forEach(([key, value])=>{
      const newKey = stackedKey ? `${stackedKey}.${key}` : key

      if (typeof value === "string"){
        paletteColorRecord[newKey] = newKey
      } else if (typeof value === "object") {
        addColorKey(value, newKey, paletteColorRecord)
      }
    })
  }
  addColorKey(palette, "", newPaletteColorRecord)

  return newPaletteColorRecord as Record<PaltteColor, PaltteColor>
})();