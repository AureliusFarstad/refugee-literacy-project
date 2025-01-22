import type { SvgProps } from "react-native-svg";

export interface ExtendedSvgProps extends SvgProps {
  focused?: boolean;
  size?: number;
  border?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
}

export interface ExtendedSvgPropsWithMultipleColor extends SvgProps {
  focused?: boolean;
  size?: number;
  border?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
}
