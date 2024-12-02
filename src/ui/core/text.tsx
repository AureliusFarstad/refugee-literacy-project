import React from "react";
import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";

export type TypographyVariant =
  | "2xl-thin"
  | "2xl"
  | "2xl-medium"
  | "2xl-bold"
  | "2xl-heavy"
  | "xl-thin"
  | "xl"
  | "xl-medium"
  | "xl-bold"
  | "xl-heavy"
  | "lg-thin"
  | "lg"
  | "lg-medium"
  | "lg-bold"
  | "lg-heavy"
  | "md-thin"
  | "md"
  | "md-medium"
  | "md-bold"
  | "md-heavy"
  | "sm-thin"
  | "sm"
  | "sm-medium"
  | "sm-bold"
  | "sm-heavy"
  | "xs-thin"
  | "xs"
  | "xs-medium"
  | "xs-bold"
  | "xs-heavy"
  | "title-2xl"
  | "title-xl"
  | "title-lg"
  | "title"
  | "title-sm"
  | "post-text-lg"
  | "post-text"
  | "button"
  | "button-lg"
  | "mono";

const variantClasses: Record<TypographyVariant, string> = {
  "2xl-thin": "text-4xl font-thin",
  "2xl": "text-4xl font-normal",
  "2xl-medium": "text-4xl font-medium",
  "2xl-bold": "text-4xl font-bold",
  "2xl-heavy": "text-4xl font-black",
  "xl-thin": "text-3xl font-thin",
  xl: "text-3xl font-normal",
  "xl-medium": "text-3xl font-medium",
  "xl-bold": "text-3xl font-bold",
  "xl-heavy": "text-3xl font-black",
  "lg-thin": "text-2xl font-thin",
  lg: "text-2xl font-normal",
  "lg-medium": "text-2xl font-medium",
  "lg-bold": "text-2xl font-bold",
  "lg-heavy": "text-2xl font-black",
  "md-thin": "text-base font-thin",
  md: "text-base font-normal",
  "md-medium": "text-base font-medium",
  "md-bold": "text-base font-bold",
  "md-heavy": "text-base font-black",
  "sm-thin": "text-sm font-thin",
  sm: "text-sm font-normal",
  "sm-medium": "text-sm font-medium",
  "sm-bold": "text-sm font-bold",
  "sm-heavy": "text-sm font-black",
  "xs-thin": "text-xs font-thin",
  xs: "text-xs font-normal",
  "xs-medium": "text-xs font-medium",
  "xs-bold": "text-xs font-bold",
  "xs-heavy": "text-xs font-black",
  "title-2xl": "text-4xl font-bold",
  "title-xl": "text-3xl font-bold",
  "title-lg": "text-2xl font-bold",
  title: "text-xl font-bold",
  "title-sm": "text-lg font-bold",
  "post-text-lg": "text-lg",
  "post-text": "text-base",
  button: "text-base font-medium",
  "button-lg": "text-lg font-medium",
  mono: "font-mono",
};

interface TextComponentProps extends TextProps {
  className?: string;
  variant?: TypographyVariant;
}

export const Text = ({
  className = "",
  variant = "md",
  children,
  ...props
}: TextComponentProps) => {
  const textStyle = React.useMemo(
    () => twMerge("font-dongle", variantClasses[variant], className),
    [className, variant],
  );

  return (
    <RNText className={textStyle} {...props}>
      {children}
    </RNText>
  );
};
