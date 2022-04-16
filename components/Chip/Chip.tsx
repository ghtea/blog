import {Box, SxProps, Theme} from "@mui/system"
import {MouseEventHandler, ReactNode, useMemo, useCallback} from "react"
import {colorAndAppearanceSxRecord} from "./utils"

export type ChipProps = {
  children?: ReactNode
  className?: string
  sx?: SxProps<Theme>
  color?: ChipColor
  appearance?: ChipAppearance
  size?: ChipSize
  onClick?: MouseEventHandler<HTMLDivElement>
  clickable?: boolean
  right?: ReactNode
}

export type ChipColor = "default" | "primary"
export type ChipAppearance = "filled" | "outlined" | "subtle"
export type ChipSize = "sm" | "md" | "lg"

export const Chip = ({
  children,
  clickable = false,
  color = "default",
  appearance = "outlined",
  size = "md",
  onClick,
  right,
  ...rest
}: ChipProps) => {
  const sx: SxProps<Theme> = useMemo(()=>{
    const sizeSx: SxProps<Theme> = {
      ...(size === "sm" ? {fontSize: "0.75rem", px: 1, py: 0.5} : {}),
      ...(size === "md" ? {fontSize: "1rem", px: 1.5, py: 0.5} : {}),
      ...(size === "lg" ? {fontSize: "1.25rem", px: 2, py: 0.5} : {}),
    }

    const colorAndAppearanceSx: SxProps<Theme> = colorAndAppearanceSxRecord[`${appearance}-${color}`]

    const clickableSx: SxProps<Theme> = {
      ...(clickable ? {":hover": {cursor: "pointer"}} : {}),
    }

    return ({
      display: "inline-flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "1000px",
      ...rest.sx,
      ...sizeSx,
      ...colorAndAppearanceSx,
      ...clickableSx,
    } as SxProps<Theme>)
  },[appearance, color, clickable, rest.sx, size])

  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    if (clickable) return;
    onClick?.(event)
  },[clickable, onClick])

  return (
    <Box 
      onClick={handleClick}
      component={"div"}
      {...rest}
      sx={sx}
    >
      <Box>
        {children}
      </Box>
      {right && <Box>{right}</Box>}
    </Box>
  )
}