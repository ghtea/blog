import {blue, grey, red} from "@mui/material/colors";
import {createTheme} from "@mui/system"

export const theme = createTheme({
  palette: {
    primary: blue["600"],
    error: red["600"],
    border: grey["300"],
    text: grey["900"],
    textHint: grey["500"],
    textAlternative: "#ffffff",
    textPrimary: blue["300"],
    textError: red["300"],
    code: grey["900"],
    codeBackground: grey["200"],
  },
})