import React from "react";
import type { TextProps, TextStyle } from "react-native";
import { StyleSheet, Text as NNText } from "react-native";
import { twMerge } from "tailwind-merge";

interface Props extends TextProps {
  className?: string;
}

export const Text = ({ className = "", style, children, ...props }: Props) => {
  const textStyle = React.useMemo(
    () => twMerge("font-dongle ", className),
    [className],
  );

  const nStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        {
          writingDirection: "ltr",
        },
        style,
      ]) as TextStyle,
    [style],
  );
  return (
    <NNText className={textStyle} style={nStyle} {...props}>
      {children}
    </NNText>
  );
};
