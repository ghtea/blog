import {Box, SxProps, Theme} from "@mui/system"
import {MouseEventHandler, ReactNode, useMemo, useCallback} from "react"

export type ButtonProps = {
  children?: ReactNode
  className?: string
  sx?: SxProps<Theme>
  disabled?: boolean
  status?: ButtonColor
  size?: ButtonSize
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ButtonColor = "default" | "primary" | "error"
export type ButtonSize = "sm" | "md" | "lg"

export const Button = ({
  children,
  disabled = false,
  status = "default",
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

    const statusSx: SxProps<Theme> = {
      ...(status === "default" ? {} : {}),
      ...(status === "primary" ? {bgcolor: "primary"} : {}),
      ...(status === "error" ? {bgcolor: "error"} : {}),
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
      ...statusSx,
      ...disabledSx,
    } as SxProps<Theme>)
  },[disabled, rest.sx, size, status])

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