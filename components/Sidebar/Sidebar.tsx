import {Box} from "@mui/system"
import React, {ReactNode} from "react"
import {Button} from "components/Button"
import {Text} from "components/Text"

export const SIDEBAR_WIDTH = 240;

export type SidebarProps = {
}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <Box sx={{width: `${SIDEBAR_WIDTH}px`}}>
          sidebar
    </Box>
  )
}