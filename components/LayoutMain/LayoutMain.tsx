import {Box} from "@mui/system"
import React, {ReactNode} from "react"
import {Button} from "components/Button"
import {Sidebar, SIDEBAR_WIDTH} from "components/Sidebar";
import {Text} from "components/Text"

const HEADER_HEIGHT = 56;

export type LayoutMainProps = {
  children: ReactNode
}

// ref: https://icecraft.tistory.com
// ref: https://nasica1.tistory.com
export const LayoutMain = ({children}: LayoutMainProps) => {
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
        <Box sx={{display: "flex", width: "auto"}}>
          <Button>create</Button>
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