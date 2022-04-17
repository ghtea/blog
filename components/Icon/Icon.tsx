import {Box} from "@mui/system"
import {StyledIconProps} from "@styled-icons/styled-icon"
import {nameComponentMap} from "./utils"

export type IconProps = StyledIconProps & {
  name: IconName
  color?: string
}

export type IconName = keyof typeof nameComponentMap

export const Icon = ({
  name,
  size = 24,
  title,
  color,
  ...rest
}: IconProps) => {
  const Component = nameComponentMap[name]

  return (
    <Box sx={{color}}>
      <Component size={size} title={title} {...rest}/>
    </Box>
  )
}