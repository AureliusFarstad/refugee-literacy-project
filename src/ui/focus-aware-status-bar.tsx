import { useIsFocused } from "@react-navigation/native";
import * as React from "react";
import { StatusBar } from "expo-status-bar";

type Props = React.ComponentProps<typeof StatusBar>;
export const FocusAwareStatusBar = (props: Props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar style="auto" {...props} /> : null;
};
