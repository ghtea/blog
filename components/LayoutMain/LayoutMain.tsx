import {Box} from "@mui/system"
import {useRouter} from "next/router";
import React, {ReactNode, useCallback} from "react"
import {Button} from "components/Button"
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
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }}>
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
      <Box sx={{
        display: "flex", 
        paddingTop: `${HEADER_HEIGHT}px`, 
        flexGrow: 1, 
        flexShrink: 1
      }}>
        {children}
      </Box>
    </Box>
  )
}