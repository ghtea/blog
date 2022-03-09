import {Box, SxProps, Theme} from "@mui/system"
import {MouseEventHandler, ReactNode, useMemo, useCallback} from "react"

export type ButtonProps = {
  children: ReactNode
  className?: string
  sx: SxProps<Theme>
  disabled?: boolean
  status?: ButtonStatus
  size?: ButtonSize
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ButtonStatus = "neutral" | "primary" | "error"
export type ButtonSize = "sm" | "md" | "lg"

export const Button = ({
  children,
  disabled = false,
  status = "neutral",
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
      ...(status === "neutral" ? {} : {}),
      ...(status === "primary" ? {bgcolor: "primary"} : {}),
      ...(status === "error" ? {bgcolor: "red"} : {}), // WIP:
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
      appearance: "none",
      borderRadius: "4px",
      ...rest.sx,
      ...sizeSx,
      ...statusSx,
      ...disabledSx,
    })
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
      sx={sx} // TODO: fix
    >
      {children}
    </Box>
  )
}