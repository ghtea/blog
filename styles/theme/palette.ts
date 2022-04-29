import {colors} from "./colors"

const {white, black, gray, indigo: primary, rose: error, green: success} = colors

export const palette = {
  primary: primary["600"],
  error: error["600"],
  border: gray["300"],
  hover: gray["100"],
  // text
  text: gray["900"],
  textHint: gray["500"],
  textAlternative: white,
  textPrimary: primary["400"],
  textError: error["300"],
  //
  code: gray["900"],
  codeBackground: gray["200"],
  blockquoteBackground: gray["100"],
  hrBackground: gray["300"],
  // buttons
  button: {
    "default": {
      text: gray["700"],
      background: white,
      border: gray["300"],
      hover: {
        text: gray["800"],
        background: gray["50"],
      },
      focus: {
        outline: gray["100"],
      }
    },
    "default-disabled": {
      text: gray["300"],
      background: white,
      border: gray["200"],
    },
    "primary": {
      text: white,
      background: primary["600"],
      hover: {
        background: primary["700"],
      },
      focus: {
        outline: primary["100"],
      }
    },
    "primary-disabled": {
      text: white,
      background: primary["200"],
    },
    "primary-subtle": {
      text: primary["700"],
      background: primary["50"],
      hover: {
        background: primary["100"],
      },
      focus: {
        outline: primary["100"],
      }
    },
    "primary-subtle-disabled": {
      text: primary["300"],
      background: primary["25"],
    },
    "error": {
      text: white,
      background: error["600"],
      hover: {
        background: error["700"],
      },
      focus: {
        outline: error["100"],
      }
    },
    "error-disabled": {
      text: white,
      background: error["200"],
    },
    "error-subtle": {
      text: error["700"],
      background: error["50"],
      hover: {
        background: error["100"],
      },
      focus: {
        outline: error["100"],
      }
    },
    "error-subtle-disabled": {
      text: error["300"],
      background: error["25"],
    },
  },
  // chips
  chip: {
    "filled-default": {
      border: gray["800"],
      background: gray["800"],
      text: white,
    },
    "filled-primary": {
      border: primary["600"],
      background: primary["800"],
      text: white,
    },
    "outlined-default": {
      border: gray["900"],
      background: "transparent",
      text: gray["900"],
    },
    "outlined-primary": {
      border: primary["800"],
      background: "transparent",
      text: primary["800"],
    },
    "subtle-default": {
      border: gray["600"],
      background: gray["100"],
      text: gray["900"],
    },
    "subtle-primary": {
      border: primary["500"],
      background: primary["100"],
      text: primary["800"],
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