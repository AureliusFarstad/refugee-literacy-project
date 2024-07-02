import type { Theme } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";

import { colors } from "@/ui/theme/colors";

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};
