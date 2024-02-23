import { styled } from "nativewind";
import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const ArrowIcon = ({ color = "#000", ...props }: SvgProps) => (
  <Svg width={15} height={15} fill="none" viewBox="0 0 15 15" {...props}>
    <Path
      d="M12.621 5.443a.469.469 0 0 0-.433-.287H2.813a.469.469 0 0 0-.434.287.492.492 0 0 0 .1.516l4.687 4.688a.48.48 0 0 0 .668 0l4.688-4.688a.492.492 0 0 0 .1-.516Z"
      fill={color}
    />
  </Svg>
);

const _Check = ({ fill = "#000", ...props }: SvgProps) => (
  <Svg width={25} height={24} fill="none" viewBox="0 0 25 24" {...props}>
    <Path
      d="m20.256 6.75-10.5 10.5L4.506 12"
      stroke={fill}
      strokeWidth={2.438}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CheckIcon = styled(_Check, {
  classProps: ["fill"],
});

export const HeaderHomeIcon = ({ color = "#000", ...props }: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className="w-6 h-6"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </Svg>
);
