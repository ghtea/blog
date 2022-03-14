import {ThemeProvider} from "@mui/system"
import type {AppProps} from "next/app"
import {theme} from "styles/theme"
import "styles/font.css"
import "utils/firebase"; 
import {ReactQueryProvider} from "utils/reactQuery";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
