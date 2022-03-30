import {ThemeProvider} from "@mui/system"
import type {AppProps} from "next/app"
import {theme} from "styles/theme"
import "styles/reset.css"
import "styles/global.css"
import "utils/firebase"; 
import {AuthenticationProvider} from "utils/authentication"
import {ReactQueryProvider} from "utils/reactQuery";
import "github-markdown-css/github-markdown-light.css"
import "styles/codemirror-themes/dracula.css"
import "styles/codemirror-themes/mdn-like.css"
import "codemirror/lib/codemirror.css"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AuthenticationProvider>
      <ReactQueryProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReactQueryProvider>
    </AuthenticationProvider>
  )
}

export default MyApp
