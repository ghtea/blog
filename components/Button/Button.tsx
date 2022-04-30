import {Box, SxProps, Theme} from "@mui/system"
import {MouseEventHandler, ReactNode, useMemo, useCallback, FocusEventHandler, useState} from "react"
import {appearanceDisabledSxMap, appearanceDisabledFrameSxMap} from "./utils"

export type ButtonProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  appearance?: ButtonAppearance
  size?: ButtonSize
  width?: "auto" | "100%"
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ButtonSize = "sm" | "md" | "lg"
export type ButtonAppearance = "default" | "primary" | "primary-subtle" | "error" | "error-subtle"

const BORDER_RADIUS = "8px"

export const Button = ({
  children,
  disabled = false,
  appearance = "default",
  size = "md",
  onClick,
  width = "auto",
  ...rest
}: ButtonProps) => {
  const [focused, setFocused] = useState(false)

  const appearanceDisabledKey = disabled ? `${appearance}-disabled` as `${ButtonAppearance}-disabled` : appearance

  const containerSx: SxProps<Theme> = {
    margin: 0,
    padding: 0,
    width,
    border: "none",
    background: "transparent",
    outline: "none",
    borderRadius: BORDER_RADIUS,
    cursor: "pointer",
    position: "relative",
    ...appearanceDisabledSxMap[appearanceDisabledKey],
    pointerEvents: disabled ? "none" : "auto"
  }

  const sizeSx: SxProps<Theme> = {
    ...(size === "sm" ? {fontSize: "0.875rem", px: 1.5, py: 1} : {}),
    ...(size === "md" ? {fontSize: "1rem", px: 2.25, py: 1.25} : {}),
    ...(size === "lg" ? {fontSize: "1.25rem", px: 3, py: 1.5} : {}),
  }

  const frameSx: SxProps<Theme> = {
    position: "absolute", 
    left: 0,
    top: 0,
    width: "100%", 
    height: "100%", 
    borderStyle: "solid",
    borderWidth: 1, 
    borderRadius: BORDER_RADIUS,
    borderColor: "transparent",
    outlineWidth: "4px",
    outlineColor: "currentcolor",
    outlineStyle: focused ? "solid" : "none",
    ...appearanceDisabledFrameSxMap[appearanceDisabledKey]
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event)=>{
    if (disabled) return;
    onClick?.(event)
  },[disabled, onClick])

  const handleFocus: FocusEventHandler<HTMLButtonElement> = useCallback((event)=>{
    setFocused(true)
  },[])

  const handleBlur: FocusEventHandler<HTMLButtonElement> = useCallback((event)=>{
    setFocused(false)
  },[])

  return (
    <Box 
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      component={"button"}
      {...rest}
      sx={containerSx}
    >
      <Box sx={frameSx}/>
      <Box sx={sizeSx}>
        {children}
      </Box>
    </Box>
  )
}