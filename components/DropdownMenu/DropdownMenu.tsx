import {Box} from "@mui/system"
import React, {MouseEventHandler, ReactNode, RefObject, useEffect, useRef} from "react"

export type DropdownMenuProps = {
  toggleRef?: RefObject<HTMLElement>
  isOpened: boolean
  setIsOpened: (value:boolean) => void
  items: {
    children: ReactNode
    onClick?: ()=>void
  }[]
}

export const DropdownMenu = ({
  toggleRef,
  isOpened,
  setIsOpened,
  items,
}: DropdownMenuProps) => {

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const handleClick = (event: MouseEvent)=>{
      if ((event.target instanceof Node) && !menuRef.current?.contains(event.target) && !toggleRef?.current?.contains(event.target)){
        setIsOpened(false)
      }
    }

    window.addEventListener("click", handleClick)
    return () => {
      window.removeEventListener("click", handleClick)
    }
  },[setIsOpened, toggleRef])

  return (<>
    {isOpened 
      ? (
        <Box sx={{position: "absolute", top: 0, left: 0, transform: "translate(120px, 100%)"}}>
          <Box
            ref={menuRef}
            sx={{
              display: "inline-flex",
              flexDirection: "column", 
              borderRadius: "12px", 
              background: "dropdownMenu.background",
              borderColor: "dropdownMenu.border",
              borderStyle: "solid",
              borderWidth: "1px",
              overflow: "auto"
            }}>
            {items.map((item, index)=>{
              const handleClick: MouseEventHandler<HTMLDivElement> | undefined = item.onClick && (
                ()=>{
                  item.onClick?.();
                  setIsOpened(false)
                }
              )

              return (
                <Box 
                  key={`item-${index}`} 
                  role={"button"} 
                  onClick={handleClick} 
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    cursor: handleClick ? "pointer" : undefined,
                    "&:hover": {
                      backgroundColor: handleClick ? "dropdownMenu.hover" : undefined, 
                    }
                  }}>
                  {item.children}
                </Box>
              )
            })}
          </Box>
        </Box>
      )
      : null
    }
  </>)
}