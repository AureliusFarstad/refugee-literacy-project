import { StyleSheet } from "react-native";

import { APP_COLORS } from "@/constants/routes";

export const globalStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: APP_COLORS.offwhite,
  },
  thomasFont: {
    fontFamily: "Thomas",
    fontSize: 40,
    lineHeight: 50,
    color: APP_COLORS.offblack
  },
});
