import {Box} from "@mui/system"
import {useRouter} from "next/router";
import React, {ReactNode, useCallback} from "react"
import {Button} from "components/Button"
import {Sidebar, SIDEBAR_WIDTH} from "components/Sidebar";
import {Text} from "components/Text"
import {useAuthentication} from "utils/authentication";

const HEADER_HEIGHT = 56;

export type LayoutMainProps = {
  children: ReactNode
}

export const LayoutMain = ({children}: LayoutMainProps) => {
  const {user, isSignedIn, signIn} = useAuthentication()
  const router = useRouter()

  const onCreateClick = useCallback(()=>{
    router.push("/draft")
  },[router])

  const onSignInClick = useCallback(async()=>{
    await signIn()
  },[signIn])
  
  return (
    <Box>
      <Box sx={{
        position: "fixed",
        width: "100vw",
        height: `${HEADER_HEIGHT}px`,
        top: 0,
        display: "flex", 
        justifyContent: "space-between", 
        flexDirection: "row", 
        alignItems: "center",
        borderWidth: "1px", 
        borderBottomStyle: "solid", 
        borderColor: "border",
        px: 2,
      }}
      >
        <Text sx={{fontSize: "1.5rem"}}>blog of wiz</Text>
        <Box sx={{flex: 1}}/>
        <Box>
          <Button onClick={onCreateClick}>create</Button>
        </Box>
        <Box sx={{display: "flex", width: "auto"}}>
          {isSignedIn 
            ? <Box sx={{width: "40px", height: "40px"}}>
              {user?.photoURL && <Box component={"img"} sx={{borderRadius: "50%"}} alt={"user-profile"} width={"40px"} height={"40px"} src={user?.photoURL || ""}></Box>}
            </Box> 
            : <Button onClick={onSignInClick}>signIn</Button>
          }
        </Box>
      </Box>
      <Box sx={{margin: `${HEADER_HEIGHT}px`}}>
        {/* sub header */}
        <Box sx={{display: "flex", flexDirection: "row", py: 2}}>
          {/* <Box>home</Box>
          <Box sx={{marginLeft: 2}}>github</Box> */}
        </Box>

        {/* main */}
        <Box sx={{display: "flex", flexDirection: "row"}}>
          <Box sx={{width: `${SIDEBAR_WIDTH}px`, display: ["none", null, null, "flex"]}}>
            {/* left */}
          </Box>
          <Box sx={{flex: 1, display: "flex", alignItems: "center"}}>
            {children}
          </Box>
          <Box sx={{width: `${SIDEBAR_WIDTH}px`, display: ["none", null, null, "flex"]}}>
            <Sidebar/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}