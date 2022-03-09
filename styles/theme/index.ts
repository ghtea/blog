import {blue} from "@mui/material/colors";
import {createTheme} from "@mui/system"

export const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
  palette: {
    primary: blue["600"]
  },
})