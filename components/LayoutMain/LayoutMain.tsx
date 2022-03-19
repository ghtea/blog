import {Box} from "@mui/system"
import React, {ReactNode} from "react"

export type LayoutMainProps = {
  children: ReactNode
}

// ref: https://icecraft.tistory.com
// ref: https://nasica1.tistory.com
export const LayoutMain = ({children}: LayoutMainProps) => {
  return (
    <Box>
      <Box sx={{
        display: "flex", 
        justifyContent: "space-between", 
        flexDirection: "row", 
        borderWidth: "1px", 
        borderBottomStyle: "solid", 
        borderColor: "border"
      }}
      >
        <Box sx={{display: "flex", width: "auto"}} >blog of wiz</Box>
        <Box sx={{display: "flex", width: "auto"}}>
          <Box component={"button"}>create</Box>
        </Box>
      </Box>
      <Box>
        <Box>
          sub-header
        </Box>
        <Box>
          {children}
        </Box>
      </Box>
    </Box>
  )
}