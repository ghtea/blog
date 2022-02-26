import {Theme} from "theme-ui";
import palette from "./palette";

export enum ColorKey {
  "bg" = "background",
  "text" = "text",

  "primary" = "primary",
  "alternative" = "alternative",
  
  "bg.weak" = "bg-weak",
  "text.strong" = "text-strong",
  "text.weak" = "text-weak",
  "text.alternative" = "text-alternative",

  "image.placeholder.bg" = "image-placeholder-bg",
}

type Colors = Theme["colors"] & Record<ColorKey, typeof palette[keyof (typeof palette)] | "transparent">;

export const colors: Colors = {

  [ColorKey.bg] : palette["white"],
  [ColorKey.text]: palette["gray-700"],

  [ColorKey.primary]: palette["blue-500"],
  [ColorKey["alternative"]]: palette["white"],

  [ColorKey["bg.weak"]]: palette["gray-100"],
  [ColorKey["text.strong"]]: palette["gray-900"],
  [ColorKey["text.weak"]]: palette["gray-500"],
  [ColorKey["text.alternative"]]: palette["white"],

  [ColorKey["image.placeholder.bg"]]: palette["gray-100"],

  modes: {
    dark: {}
  }
};