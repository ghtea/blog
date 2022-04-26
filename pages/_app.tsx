import {ThemeProvider} from "@mui/system"
import type {AppProps} from "next/app"
import {ModalPortal} from "components/ModalPortal"
import {theme} from "styles/theme"
import {AuthenticationProvider} from "utils/authentication"
import {ModalProvider} from "utils/modal"
import {ReactQueryProvider} from "utils/reactQuery";
import "styles/reset.css"
import "styles/global.css"
import "utils/firebase"; 


function MyApp({Component, pageProps}: AppProps) {
  return (
    <AuthenticationProvider>
      <ReactQueryProvider>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <Component {...pageProps} />
            <ModalPortal/>
          </ModalProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </AuthenticationProvider>
  )
}

export default MyApp
