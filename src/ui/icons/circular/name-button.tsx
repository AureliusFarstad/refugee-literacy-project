import * as React from "react";
import Svg, { Path } from "react-native-svg";

import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

export const NameButton = ({
  primaryColor,
  offwhiteColor,
  offblackColor,
}: ButtonColorProps) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" id="svg10">
      <Path
        d="m 19.999962,39.999959 c 11.0457,0 20,-8.9543 20,-20 C 39.999962,8.954309 31.045662,0 19.999962,0 8.954302,0 0,8.954309 0,19.999959 c 0,11.0457 8.954302,20 19.999962,20 z"
        fill={primaryColor}
        id="Path1"
      />
      <Path
        fill={offwhiteColor}
        d="m 12.499962,11.749959 c -0.7956,0 -1.5587,0.3161 -2.1213,0.8787 -0.5626,0.5626 -0.87866,1.3257 -0.87866,2.1213 v 10.5 c 0,0.7957 0.31606,1.5587 0.87866,2.1214 0.5626,0.5626 1.3257,0.8786 2.1213,0.8786 h 15 c 0.7957,0 1.5587,-0.316 2.1214,-0.8786 0.5626,-0.5627 0.8786,-1.3257 0.8786,-2.1214 v -10.5 c 0,-0.7956 -0.316,-1.5587 -0.8786,-2.1213 -0.5627,-0.5626 -1.3257,-0.8787 -2.1214,-0.8787 z"
        id="Path11"
      />
      <Path
        fill={offblackColor}
        d="m 12.5,11.25 c -0.928037,0 -1.818374,0.369155 -2.47461,1.02539 C 9.369146,12.931634 8.9999995,13.82198 8.9999995,14.75 v 10.5 c 0,0.928103 0.3692042,1.818306 1.0253905,2.474609 C 10.681647,28.380866 11.572005,28.75 12.5,28.75 h 14.999999 c 0.928079,0 1.818294,-0.369192 2.47461,-1.025391 C 30.630808,27.068293 31,26.178078 30.999999,25.25 v -10.5 c 0,-0.927995 -0.369133,-1.818353 -1.02539,-2.47461 C 29.318314,11.619212 28.42812,11.25 27.499999,11.25 Z m 0,1 h 14.999999 c 0.66328,0 1.298473,0.2634 1.767579,0.732422 0.468943,0.468943 0.732421,1.104372 0.732421,1.767578 v 10.5 c 0,0.663321 -0.26342,1.298493 -0.732421,1.767578 C 28.798493,27.486579 28.163321,27.75 27.499999,27.75 H 12.5 c -0.663206,0 -1.298635,-0.263479 -1.767579,-0.732422 C 10.263408,26.548481 9.999999,25.913296 10,25.25 v -10.5 c 0,-0.66318 0.263465,-1.298623 0.732421,-1.767578 C 11.201386,12.513457 11.836836,12.25 12.5,12.25 Z"
        id="Path12"
      />
      <Path
        fill={offblackColor}
        d="m 16.624999,20.25 c -0.946936,0 -1.86994,0.290121 -2.646484,0.832031 -0.776485,0.542059 -1.368747,1.31044 -1.695312,2.199219 -0.103775,0.283006 -0.101579,0.595281 0.0059,0.876953 0.107491,0.28181 0.314271,0.514353 0.580078,0.65625 1.15665,0.616147 2.447413,0.93736 3.757813,0.935547 1.309832,0.0015 2.599861,-0.31969 3.755859,-0.935547 0.265944,-0.141881 0.472587,-0.37444 0.580078,-0.65625 0.107438,-0.281672 0.109842,-0.593833 0.0059,-0.876953 C 20.642363,22.392429 20.050118,21.624092 19.273519,21.082031 18.497053,20.540097 17.572106,20.25 16.625081,20.25 Z m 0,1 c 0.742376,0 1.467438,0.227478 2.076172,0.652343 0.608802,0.42494 1.072194,1.025877 1.328125,1.722657 0.02082,0.05668 0.02156,0.119252 0,0.175781 -0.02151,0.05639 -0.06373,0.10234 -0.117187,0.130859 -1.011436,0.538842 -2.139049,0.819946 -3.285156,0.81836 h -0.002 c -1.146,0.0016 -2.273605,-0.279507 -3.285156,-0.81836 -0.05339,-0.0285 -0.09568,-0.07447 -0.117187,-0.130859 -0.02156,-0.05653 -0.02083,-0.118988 0,-0.175781 0.256034,-0.696822 0.71941,-1.297716 1.328125,-1.722657 C 15.159591,21.477454 15.88269,21.25 16.624953,21.25 Z"
        id="Path14"
      />
      <Path
        fill={offblackColor}
        d="m 16.624999,14.25 c -0.72915,0 -1.429706,0.289203 -1.945312,0.804687 C 14.164203,15.570293 13.875,16.270849 13.875,17 c 0,0.729228 0.289154,1.429779 0.804687,1.945312 0.515639,0.515639 1.216218,0.804688 1.945312,0.804688 0.729173,0 1.429748,-0.289 1.945313,-0.804688 C 19.086,18.429747 19.374999,17.729172 19.374999,17 c 0,-0.729095 -0.289048,-1.429674 -0.804687,-1.945313 C 18.054779,14.539154 17.354228,14.25 16.624999,14.25 Z m 0,1 c 0.464372,0 0.910015,0.183451 1.238282,0.511718 0.328361,0.328362 0.511718,0.773976 0.511718,1.238282 0,0.464427 -0.183406,0.910046 -0.511718,1.238281 C 17.535046,18.566593 17.089427,18.75 16.624999,18.75 16.160694,18.75 15.71508,18.566642 15.386718,18.238281 15.058451,17.910014 14.875,17.464371 14.875,17 c 0,-0.46425 0.183402,-0.909888 0.511718,-1.238282 C 15.715112,15.433402 16.16075,15.25 16.624999,15.25 Z"
        id="Path16"
      />
      <Path
        fill={offblackColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m 26.703124,16.673828 -3.5,0.0039 a 0.49943849,0.49943849 0 0 0 -0.5,0.5 0.49943849,0.49943849 0 0 0 0.5,0.5 l 3.5,-0.0039 a 0.49943849,0.49943849 0 0 0 0.5,-0.5 0.49943849,0.49943849 0 0 0 -0.5,-0.5 z"
        id="Path6"
      />
      <Path
        fill={offblackColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m 26.703124,19.498046 -3.5,0.0039 c -0.276271,-3.11e-4 -0.500311,0.223729 -0.5,0.5 -3.11e-4,0.276271 0.223729,0.500311 0.5,0.5 l 3.5,-0.0039 c 0.276271,3.11e-4 0.500311,-0.223729 0.5,-0.5 3.11e-4,-0.276271 -0.223729,-0.500311 -0.5,-0.5 z"
        id="Path8"
      />
      <Path
        fill={offblackColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m 26.703124,22.324218 -3.5,0.0039 a 0.49943849,0.49943849 0 0 0 -0.5,0.5 0.49943849,0.49943849 0 0 0 0.5,0.5 l 3.5,-0.0039 a 0.49943849,0.49943849 0 0 0 0.5,-0.5 0.49943849,0.49943849 0 0 0 -0.5,-0.5 z"
        id="Path10"
      />
      {/* <defs
     id="defs10">
    <clipPath
       id="clip0_2037_88">
      <rect
         width="41"
         height="41"
         fill="#ffffff"
         transform="translate(0,0.283203)"
         id="rect10"
         x="0"
         y="0" />
    </clipPath>
  </defs> */}
    </Svg>
  );
};
