import {Box, SxProps, Theme} from "@mui/system"
import {ChipAppearance, ChipColor} from "./Chip";

const colorAndAppearanceCommonSx: SxProps<Theme> = {
  borderWidth: 1,
  borderStyle: "solid",
}

export const colorAndAppearanceSxRecord: Record<`${ChipAppearance}-${ChipColor}`, SxProps<Theme>> = {
  "filled-default": {
    ...colorAndAppearanceCommonSx,
    borderColor: "chip.filled-default.border",
    backgroundColor: "chip.filled-default.background",
    color: "chip.filled-default.text",
  },
  "filled-primary": {
    ...colorAndAppearanceCommonSx,
    borderColor: "chip.filled-primary.border",
    backgroundColor: "chip.filled-primary.background",
    color: "chip.filled-primary.text",
  },
  "outlined-default": {
    ...colorAndAppearanceCommonSx,
    borderColor: "chip.outlined-default.border",
    backgroundColor: "chip.outlined-default.background",
    color: "chip.outlined-default.text",
  },
  "outlined-primary": {
    ...colorAndAppearanceCommonSx,
    borderColor: "chip.outlined-primary.border",
    backgroundColor: "chip.outlined-primary.background",
    color: "chip.outlined-primary.text",
  },
  "subtle-default": {
    ...colorAndAppearanceCommonSx,
    borderColor: "chip.subtle-default.border",
    backgroundColor: "chip.subtle-default.background",
    color: "chip.subtle-default.text",
  },
  "subtle-primary": {
    ...colorAndAppearanceCommonSx,
    borderColor: "chip.subtle-primary.border",
    backgroundColor: "chip.subtle-primary.background",
    color: "chip.subtle-primary.text",
  },
}