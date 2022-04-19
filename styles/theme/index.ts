import {createTheme} from "@mui/system"
import {palette} from "./palette"

export const themeOptions = {
  palette,
}

export const theme = createTheme(themeOptions)
export * from "./palette"