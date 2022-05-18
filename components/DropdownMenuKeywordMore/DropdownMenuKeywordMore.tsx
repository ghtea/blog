import {Box} from "@mui/system"
import React, {MouseEventHandler, ReactNode, RefObject, useEffect, useMemo, useRef} from "react"
import {DropdownMenu, DropdownMenuProps} from "components/DropdownMenu"

export type DropdownMenuKeywordMoreProps = Omit<DropdownMenuProps, "items"> & {
}

export const DropdownMenuKeywordMore = ({
  ...rest
}: DropdownMenuKeywordMoreProps) => {

  const items: DropdownMenuProps["items"] = useMemo(()=>{
    return ([
      {children: "Edit", onClick: ()=>{

      }},
      {children: "Delete", onClick: ()=>{

      }},
    ])
  },[]);

  return (
    <DropdownMenu 
      {...rest}
      items={items}
    />
  )
}