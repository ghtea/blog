import {getTransparentColors} from "./utils";

// ref: Untitled UI v2.6
export const defaultColors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: { // gray modern
    "25": "#FCFCFD",
    "50": "#F8FAFC",
    "100": "#EEF2F6",
    "200": "#E3E8EF",
    "300": "#CDD5DF",
    "400": "#9AA4B2",
    "500": "#697586",
    "600": "#4B5565",
    "700": "#364152",
    "800": "#202939",
    "900": "#121926",
  },
  indigo: {
    "25": "#F5F8FF",
    "50": "#EEF4FF",
    "100": "#E0EAFF",
    "200": "#C7D7FE",
    "300": "#A4BCFD",
    "400": "#8098F9",
    "500": "#6172F3",
    "600": "#444CE7",
    "700": "#3538CD",
    "800": "#2D31A6",
    "900": "#2D3282",
  },
  rose: {
    "25": "#FFF5F6",
    "50": "#FFF1F3",
    "100": "#FFE4E8",
    "200": "#FECDD6",
    "300": "#FEA3B4",
    "400": "#FD6F8E",
    "500": "#F63D68",
    "600": "#E31B54",
    "700": "#C01048",
    "800": "#A11043",
    "900": "#89123E",
  },
  green: {
    "25": "#F6FEF9",
    "50": "#EDFCF2",
    "100": "#D3F8DF",
    "200": "#AAF0C4",
    "300": "#73E2A3",
    "400": "#73E2A3",
    "500": "#16B364",
    "600": "#099250",
    "700": "#087443",
    "800": "#095C37",
    "900": "#084C2E",
  },
}

export const transparentColors = {
  grayTransparent: {
    "500": getTransparentColors(defaultColors.gray["500"]),
    "900": getTransparentColors(defaultColors.gray["900"])
  },
}

export const colors = {
  ...defaultColors,
  ...transparentColors,
}
