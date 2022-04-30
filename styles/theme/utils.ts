import {colord} from "colord";

export const getTransparentColors = (hex: string) => {
  const rgbaColors: Record<string, string> = {};
  const unit = 8

  for (let alpha = unit; alpha < 100; alpha += unit) {
    const rgba = colord(hex).alpha(alpha/100).toRgbString();
    const key = `${Math.floor(alpha)}`;

    rgbaColors[key] = rgba;
  }

  return rgbaColors as Record<
    "8" | "16" | "24" | "32" | "40" | "48" | "56" | "64" | "72" | "80" | "88" | "96", 
    string
  >;
};
