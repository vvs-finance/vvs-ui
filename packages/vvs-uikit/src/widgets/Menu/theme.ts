import { darkColors, baseColors } from "../../theme/colors";

export interface NavThemeType {
  background: string;
}

export const light: NavThemeType = {
  background: baseColors.darkPurple,
};

export const dark: NavThemeType = {
  background: darkColors.backgroundAlt,
};
