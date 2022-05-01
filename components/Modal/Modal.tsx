import {Box} from "@mui/system"
import React, {useCallback, MouseEventHandler, useEffect, useRef, ReactNode} from "react"
import {Button} from "components/Button"
import {Icon} from "components/Icon"

export type ModalProps = {
  onClose: ()=>void
  // header
  title?: string
  // content
  children: ReactNode
  // footer
  cancel?: {
    children?: string
    onClick?: ()=>void
  }
  confirm?: {
    children?: string
    onClick?: ()=>void
  }
}

export const Modal = ({
  onClose,
  title,
  children,
  confirm,
  cancel,
}: ModalProps) => {
  const handleClickOutside: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    onClose()
  },[onClose])

  const handleClickClose: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    onClose()
  },[onClose])

  const handleClickModal: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    event.stopPropagation()
  },[])

  return (
    <Box 
      onClick={handleClickOutside}
      sx={{
        display: "flex", 
        flexDirection:"column", 
        justifyContent: "center",
        alignItems: "center", 
        width: "100%",
        height: "100%",
        backgroundColor: "modal.outside.background",
      }}
    >
      <Box 
        onClick={handleClickModal}
        sx={{
          display: "flex", 
          flexDirection:"column", 
          alignItems: "center",
          backgroundColor: "modal.background",
          width: "100%",
          maxWidth: "540px",
          height: "auto",
          borderRadius: "12px",
          padding: 3
        }}
      >
        <Box sx={{
          width: 1, 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center", 
          marginBottom: 4,
        }}>
          <Box sx={{fontSize: "1.5rem", fontWeight: "bold"}}>
            {title}
          </Box>
          <Box onClick={handleClickClose} sx={{cursor: "pointer"}}>
            <Icon name={"close"}/>
          </Box>
        </Box>
        <Box 
          sx={{
            width: 1,
            flexGrow: 1, 
            flexShrink: 1,
            marginBottom: 4
          }}
        >
          {children}
        </Box>
        <Box sx={{width: 1}}>
          <Box sx={{margin: "-6px", display: "flex", alignItems: "center"}}>
            {cancel && (
              <Box sx={{flex: 1, padding: "6px"}}>
                <Button width={"100%"} onClick={cancel.onClick}>
                  {cancel.children || "Cancel"}
                </Button>
              </Box>
            )}
            {confirm && (
              <Box sx={{flex: 1, padding: "6px"}}>
                <Button width={"100%"} appearance={"primary"} onClick={confirm.onClick}>
                  {confirm.children || "Confirm"}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}