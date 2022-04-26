import {Box, SxProps, Theme} from "@mui/system"
import {MouseEventHandler, ReactNode, useMemo, useCallback, memo, forwardRef} from "react"

export type ButtonProps = {
  children?: ReactNode
  className?: string
  sx?: SxProps<Theme>
  disabled?: boolean
  color?: ButtonColor
  size?: ButtonSize
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ButtonColor = "default" | "primary" | "error"
export type ButtonSize = "sm" | "md" | "lg"

export const Button = ({
  children,
  disabled = false,
  color = "default",
  size = "md",
  onClick,
  ...rest
}: ButtonProps) => {
  const sx: SxProps<Theme> = useMemo(()=>{
    const sizeSx: SxProps<Theme> = {
      ...(size === "sm" ? {fontSize: "0.875rem", px: 2, py: 1} : {}),
      ...(size === "md" ? {fontSize: "1rem", px: 2, py: 1} : {}),
      ...(size === "lg" ? {fontSize: "1.25rem", px: 2, py: 1} : {}),
    }

    const colorSx: SxProps<Theme> = {
      ...(color === "default" ? {} : {}),
      ...(color === "primary" ? {bgcolor: "primary"} : {}),
      ...(color === "error" ? {bgcolor: "error"} : {}),
    }

    const disabledSx: SxProps<Theme> = {
      ...(disabled ? {cursor: "default"} : {}),
    }

    return ({
      margin: 0,
      padding: 0,
      border: "none",
      background: "transparent",
      outline: "none",
      Color: "none",
      borderRadius: "4px",
      cursor: "pointer",
      ...rest.sx,
      ...sizeSx,
      ...colorSx,
      ...disabledSx,
    } as SxProps<Theme>)
  },[disabled, rest.sx, size, color])

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event)=>{
    if (disabled) return;
    onClick?.(event)
  },[disabled, onClick])

  return (
    <Box 
      onClick={handleClick}
      component={"button"}
      {...rest}
      sx={sx}
    >
      {children}
    </Box>
  )
}