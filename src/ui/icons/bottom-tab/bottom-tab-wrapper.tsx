import type { JSX } from "react";
import { StyleSheet, View } from "react-native";

import type { SectionColorScheme } from "@/constants/routes";
import { APP_COLORS } from "@/constants/routes";
import { TAB_ICON_CONTAINER_SIZE } from "@/utils/layout";

const styles = StyleSheet.create({
  rounded_square: {
    width: TAB_ICON_CONTAINER_SIZE,
    height: TAB_ICON_CONTAINER_SIZE,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function TabIcon({
  icon,
  sectionColor,
  focused,
}: {
  icon: (props: { lineColor: string }) => JSX.Element;
  sectionColor: SectionColorScheme;
  focused: boolean;
}): JSX.Element {
  let backgroundColor: string = focused
    ? APP_COLORS.offwhite
    : sectionColor.light;
  let lineColor: string = focused ? APP_COLORS.offblack : sectionColor.dark;

  return (
    <View style={[styles.rounded_square, { backgroundColor }]}>
      {icon({ lineColor })}
    </View>
  );
}
