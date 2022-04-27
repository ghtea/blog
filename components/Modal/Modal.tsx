import {Box} from "@mui/system"
import React, {useCallback, MouseEventHandler, useEffect, useRef} from "react"
import {Button} from "components/Button"
import {pcr} from "styles/theme"

export type ModalProps = {
  onClose: ()=>void
  // header
  title?: string
  // footer
  onConfirm?: ()=>void
}

export const Modal = ({
  onClose,
  title,
  onConfirm,
}: ModalProps) => {
  const handleOutsideClick: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    onClose()
  },[onClose])

  const handleModalClick: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    event.stopPropagation()
  },[])

  return (
    <Box 
      onClick={handleOutsideClick}
      sx={{
        display: "flex", 
        flexDirection:"column", 
        justifyContent: "center",
        width: "100%",
        height: "100%",
        alignItems: "center", 
        backgroundColor: pcr["modalOutsideBackground"],
      }}
    >
      <Box 
        onClick={handleModalClick}
        sx={{
          display: "flex", 
          flexDirection:"column", 
          alignItems: "center",
          backgroundColor: pcr["modalBackground"],
          width: "100%",
          maxWidth: "540px",
          height: "auto",
          borderRadius: "12px",
          padding: 3
        }}
      >
        <Box>
          <Box sx={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: 4}}>
            {"header"}
          </Box>
        </Box>
        <Box 
          sx={{
            flexGrow: 1, 
            flexShrink: 1
          }}
        >
          {"content"}
        </Box>
        <Box sx={{marginTop: 4}}>
          <Button>cancel</Button>
          <Button color={"primary"}>confirm</Button>
        </Box>
      </Box>
    </Box>
  )
}