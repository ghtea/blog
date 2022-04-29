import {SxProps, Theme} from "@mui/system"
import {ButtonAppearance} from "./Button";

type AppearanceDisabledKey = ButtonAppearance | `${ButtonAppearance}-disabled`

export const appearanceDisabledSxMap: Record<AppearanceDisabledKey, SxProps<Theme>> = {
  // default
  "default": {
    color: "button.default.text",
    backgroundColor: "button.default.background",
    "&:hover": {
      color: "button.default.hover.text",
      backgroundColor: "button.default.hover.background",
    },
  },
  "default-disabled": {
    backgroundColor: "button.default-disabled.background",
    color: "button.default-disabled.text",
  },
  // primary
  "primary": {
    backgroundColor: "button.primary.background",
    color: "button.primary.text",
    "&:hover": {
      backgroundColor: "button.primary.hover.background",
    },
  },
  "primary-disabled": {
    backgroundColor: "button.primary-disabled.background",
    color: "button.primary-disabled.text",
  },
  // primary-subtle
  "primary-subtle": {
    backgroundColor: "button.primary-subtle.background",
    color: "button.primary-subtle.text",
    "&:hover": {
      backgroundColor: "button.primary-subtle.hover.background",
    },
  },
  "primary-subtle-disabled": {
    backgroundColor: "button.primary-subtle-disabled.background",
    color: "button.primary-subtle-disabled.text",
  },
  // error
  "error": {
    backgroundColor: "button.error.background",
    color: "button.error.text",
    "&:hover": {
      backgroundColor: "button.error.hover.background",
    },
  },
  "error-disabled": {
    backgroundColor: "button.error-disabled.background",
    color: "button.error-disabled.text",
  },
  // error-subtle
  "error-subtle": {
    backgroundColor: "button.error-subtle.background",
    color: "button.error-subtle.text",
    "&:hover": {
      backgroundColor: "button.error-subtle.hover.background",
    },
  },
  "error-subtle-disabled": {
    backgroundColor: "button.error-subtle-disabled.background",
    color: "button.error-subtle-disabled.text",
  },
}

export const appearanceDisabledFrameSxMap: Record<AppearanceDisabledKey, SxProps<Theme>> = {
  // default
  "default": {
    color: "button.default.focus.outline",    
    borderColor: "button.default.border",
  },
  "default-disabled": {    
    borderColor: "button.default-disabled.border",
  },
  // primary
  "primary": {
    color: "button.primary.focus.outline",
  },
  "primary-disabled": {
  },
  // primary-subtle
  "primary-subtle": {
    color: "button.primary-subtle.focus.outline",
  },
  "primary-subtle-disabled": {
  },
  // error
  "error": {
    color: "button.error.focus.outline",
  },
  "error-disabled": {
  },
  // error-subtle
  "error-subtle": {
    color: "button.error-subtle.focus.outline",
  },
  "error-subtle-disabled": {
  },
}