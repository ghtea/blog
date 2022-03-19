import {Box, SxProps, Theme} from "@mui/system"
import {MouseEventHandler, ReactNode, useMemo, useCallback} from "react"

export type TextProps = {
  children?: ReactNode
  className?: string
  sx?: SxProps<Theme>
  status?: TextStatus
  onClick?: MouseEventHandler<HTMLSpanElement>
}

export type TextStatus = "default" | "hint" | "alternative" | "primary" | "error"

export const Text = ({
  children,
  status = "default",
  ...rest
}: TextProps) => {
  const sx: SxProps<Theme> = useMemo(()=>{
    const statusSx: SxProps<Theme> = {
      ...(status === "default" ? {color: "text"} : {}),
      ...(status === "hint" ? {color: "textHint"} : {}),
      ...(status === "alternative" ? {color: "textAlternative"} : {}),
      ...(status === "primary" ? {color: "textPrimary"} : {}),
      ...(status === "error" ? {color: "textError"} : {}),
    }

    return ({
      ...rest.sx,
      ...statusSx,
    } as SxProps<Theme>)
  },[rest.sx, status])

  return (
    <Box 
      component={"span"}
      {...rest}
      sx={sx}
    >
      {children}
    </Box>
  )
}