import {colors} from "./colors"

const {
  white, 
  black, 
  gray, 
  indigo: primary, 
  rose: error, 
  green: success,
  grayTransparent,
} = colors

export const palette = {
  primary: primary["600"],
  error: error["600"],
  hover: gray["100"],
  border: {
    default: gray["300"]
  },
  outline: {
    primary: primary["100"]
  },
  // text
  text: {
    default: gray["900"],
    hint: gray["500"],
    alternative: white,
    primary: primary["400"],
    error: error["300"],
  },
  //
  code: {
    text: gray["900"],
    background: gray["200"],
  },
  blockquote: gray["100"],
  hr: gray["300"],
  modal: {
    background: white,
    outside: {
      background: grayTransparent["900"]["56"]
    }
  },
  // inputs
  input: {
    default: {
      icon: gray["400"],
      border: gray["300"],
      focus: {
        border: primary["300"],
        outline: primary["100"]
      }
    },
    error: {
      border: error["300"],
      focus: {
        border: error["300"],
        outline: error["100"]
      }
    }
  },
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


console.log(grayTransparent["900"]["56"])