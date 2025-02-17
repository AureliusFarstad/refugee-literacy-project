import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

export const PlayButton = ({
    primaryColor,
    offwhiteColor,
    offblackColor,
}: ButtonColorProps) => {
return (
    <Svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        id="svg1">
        <Circle
            cx="20"
            cy="20"
            r="20"
            fill= {primaryColor}
            id="circle1" />
        <Path
            fill = {offwhiteColor}
            d="m 15.45,28.400499 12.6,-7.2746 c 0.8666,-0.5004 0.8666,-1.7513 0,-2.2517 l -12.6,-7.2746 c -0.8667,-0.5004 -1.95,0.1251 -1.95,1.1258 v 14.5492 c 0,1.0008 1.0833,1.6262 1.95,1.1259 z"
            id="Path2" />
        <Path
            fill = {offblackColor}
            d="M 14.78125,10.931641 C 13.85605,10.955203 13,11.703449 13,12.724609 v 14.550782 c 0,1.361611 1.520037,2.239272 2.699219,1.558593 l 12.601562,-7.27539 c 1.179086,-0.680839 1.179086,-2.436349 0,-3.117188 L 15.699219,11.166016 C 15.404421,10.995811 15.08965,10.923786 14.78125,10.931641 Z m -0.388672,1.08789 c 0.230723,-0.133213 0.529536,-0.146318 0.806641,0.01367 l 12.601562,7.273438 c 0.554115,0.319961 0.554115,1.066757 0,1.386718 l -12.601562,7.27344 C 14.645,28.286718 14,27.915379 14,27.275391 V 12.724609 c 0,-0.319926 0.161855,-0.571864 0.392578,-0.705078 z"
            id="Path3" />
    </Svg>
)}
