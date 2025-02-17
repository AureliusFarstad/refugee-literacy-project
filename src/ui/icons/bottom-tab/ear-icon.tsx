import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export function EarIcon ({ lineColor }: { lineColor: string }): JSX.Element {
return (
<Svg
    viewBox="0 0 55 55"
    fill="none"
    id="svg8">
    <Path
        id="path4-9"
        fill={lineColor}
        d="M 32.982422 4.6484375 C 31.477009 4.6622965 30.020917 4.8325435 28.636719 5.1601562 C 24.851413 6.0560953 21.743726 8.1181349 19.693359 11.087891 C 17.904997 13.678556 17.263629 17.126648 17.865234 21.039062 L 17.869141 21.056641 L 17.873047 21.076172 C 18.419101 23.884664 19.244156 26.295858 19.470703 28.572266 C 19.697251 30.848672 19.401477 32.975649 17.658203 35.537109 L 17.636719 35.570312 L 17.617188 35.603516 C 15.620802 39.13581 15.205353 42.267238 16.304688 44.822266 C 17.219562 46.948648 19.199964 48.660329 21.900391 49.630859 C 22.777819 49.946226 23.748869 50.099609 24.771484 50.099609 C 26.441776 50.099609 28.221884 49.688206 29.902344 48.882812 C 33.368571 47.221402 35.78772 44.223347 36.529297 40.683594 C 36.807693 39.355106 37.595658 38.087155 38.664062 36.839844 C 39.852047 35.550082 42.333681 33.196315 44.722656 30.732422 C 47.120349 28.259538 49.419998 25.750361 50.388672 23.708984 C 51.75949 20.819867 51.52244 16.934363 49.753906 13.429688 C 47.919597 9.7943098 44.734693 7.1042821 40.816406 5.8769531 C 38.673027 5.2054421 36.550506 4.8058629 34.501953 4.6855469 C 33.989815 4.6554686 33.484226 4.6438178 32.982422 4.6484375 z M 33.001953 6.5449219 C 33.460657 6.5407164 33.926114 6.5524476 34.396484 6.5800781 C 36.277965 6.6906001 38.244095 7.0532006 40.25 7.6816406 C 43.697028 8.7613566 46.454525 11.098218 48.0625 14.285156 C 49.602793 17.33753 49.720418 20.701101 48.679688 22.894531 C 47.97842 24.372378 45.72194 26.977469 43.361328 29.412109 C 41.000718 31.846748 38.544469 34.176071 37.251953 35.582031 L 37.236328 35.59375 L 37.228516 35.607422 C 36.050851 36.982196 35.049982 38.509266 34.675781 40.294922 C 34.059134 43.23836 32.058788 45.749998 29.080078 47.177734 C 27.645256 47.865402 26.127843 48.207031 24.771484 48.207031 C 23.940841 48.207031 23.183163 48.078458 22.541016 47.847656 C 20.228211 47.016437 18.709785 45.624058 18.042969 44.074219 C 17.229711 42.18408 17.443007 39.759164 19.263672 36.537109 C 21.198851 33.661304 21.608531 30.947234 21.353516 28.384766 C 21.097763 25.814897 20.251894 23.383228 19.736328 20.75 L 19.736328 20.746094 C 19.191381 17.196941 19.78766 14.282437 21.25 12.164062 C 23.027734 9.5891898 25.688012 7.8064124 29.070312 7.0058594 C 30.30707 6.7131404 31.625841 6.5575384 33.001953 6.5449219 z M 34.433594 9.609375 C 32.37001 9.581895 30.31939 10.025521 28.537109 10.951172 C 25.598046 12.477703 24.011096 15.277316 23.984375 18.933594 C 23.965025 21.612849 24.757315 23.811579 24.796875 23.919922 L 24.800781 23.923828 L 24.800781 23.927734 C 24.800857 23.927924 24.804087 23.930341 24.804688 23.931641 C 24.821538 23.975421 24.841337 24.019911 24.867188 24.064453 C 24.879497 24.086083 24.88237 24.090225 24.875 24.078125 C 24.89988 24.119035 24.930158 24.15679 24.960938 24.193359 C 24.956038 24.187659 24.953333 24.190014 24.970703 24.208984 C 25.002693 24.245664 25.035902 24.279124 25.070312 24.308594 L 25.074219 24.308594 C 25.079519 24.312994 25.081567 24.316743 25.085938 24.320312 L 25.089844 24.324219 C 25.125334 24.353329 25.16326 24.378727 25.205078 24.404297 C 25.217578 24.411897 25.227473 24.420492 25.226562 24.419922 C 25.265612 24.442652 25.30937 24.459996 25.353516 24.478516 L 25.355469 24.482422 C 25.404309 24.502612 25.454041 24.5194 25.5 24.53125 C 25.5055 24.53275 25.512521 24.533456 25.519531 24.535156 C 25.567231 24.546706 25.618088 24.555447 25.667969 24.560547 C 25.686529 24.562647 25.689651 24.561403 25.681641 24.560547 L 25.685547 24.560547 L 25.689453 24.560547 C 25.734673 24.564347 25.787123 24.566953 25.841797 24.564453 C 25.839097 24.564563 26.243179 24.550607 26.732422 24.623047 C 27.221666 24.695507 27.801892 24.859462 28.197266 25.169922 L 28.201172 25.169922 C 28.558869 25.450458 28.731582 25.797977 28.763672 26.314453 C 28.789962 26.738112 28.646253 27.031627 28.396484 27.289062 C 28.146702 27.546499 27.778838 27.748551 27.390625 27.892578 C 26.614199 28.180627 25.770115 28.241178 25.71875 28.244141 C 25.168245 28.275751 24.707557 28.710483 24.746094 29.25 C 24.783494 29.769244 25.25613 30.138674 25.78125 30.138672 C 25.80403 30.138674 25.827393 30.139535 25.845703 30.138672 L 25.849609 30.138672 C 26.741586 30.089172 27.991814 29.838825 29.037109 29.242188 C 30.082419 28.645551 30.927493 27.645905 30.837891 26.203125 C 30.775411 25.195914 30.334473 24.344517 29.554688 23.732422 C 28.620788 22.999282 27.48034 22.834849 26.677734 22.761719 C 26.677734 22.761719 26.43014 21.905674 26.347656 21.460938 C 26.265186 21.016202 26.185547 20.099609 26.185547 20.099609 C 30.250959 17.828655 33.174458 18.415464 34.570312 19.007812 C 36.74686 19.931369 38.196876 21.954878 38.365234 24.291016 C 38.472157 25.774264 37.513759 27.184402 36.158203 28.439453 C 34.802655 29.694506 33.077713 30.768567 31.777344 31.576172 C 31.429624 31.792077 31.101047 31.996471 30.8125 32.183594 C 29.507095 33.029867 29.077257 34.431629 28.681641 35.697266 C 28.390511 36.628453 28.137906 37.325395 27.779297 37.746094 C 27.420687 38.166795 26.970327 38.367783 26.085938 38.320312 C 25.461054 38.286983 25.110647 38.121193 24.861328 37.794922 C 24.478535 37.294222 24.401673 36.388543 24.505859 35.486328 C 24.610055 34.584115 24.87894 33.696827 25.046875 33.259766 C 25.241886 32.75406 24.916178 32.200585 24.388672 32.042969 C 23.861358 31.885652 23.277356 32.121152 23.082031 32.626953 C 22.999201 32.84143 22.623328 33.856706 22.457031 35.089844 C 22.290737 36.322983 22.326713 37.796062 23.15625 38.882812 C 23.777316 39.696385 24.764936 40.152874 25.962891 40.216797 C 26.084378 40.223097 26.20243 40.224609 26.318359 40.224609 C 27.836951 40.224412 28.833522 39.647216 29.472656 38.851562 C 30.111785 38.055909 30.417415 37.07021 30.683594 36.21875 C 31.025979 35.123232 31.347756 34.164809 32.017578 33.730469 C 32.286611 33.555976 32.609893 33.356457 32.951172 33.144531 C 34.380603 32.256818 36.307241 31.062998 37.855469 29.572266 C 39.403712 28.081544 40.593118 26.268591 40.441406 24.164062 C 40.223094 21.136957 38.303949 18.501409 35.447266 17.289062 C 33.784744 16.583457 30.461602 16.003768 26.197266 17.988281 C 26.454382 15.484978 27.51958 13.664414 29.566406 12.601562 C 32.474127 11.091276 36.334861 11.146803 39.357422 12.75 C 41.966739 14.134144 43.341931 16.304309 43.210938 18.738281 C 43.181607 19.27926 43.651317 19.707402 44.203125 19.730469 C 44.755395 19.753519 45.260028 19.370535 45.289062 18.830078 C 45.46026 15.66003 43.651468 12.833841 40.404297 11.111328 C 38.572726 10.13993 36.497178 9.636856 34.433594 9.609375 z M 10.605469 17.357422 A 1.041583 1.041583 0 0 0 9.8613281 17.650391 A 1.041583 1.041583 0 0 0 9.8320312 19.123047 C 10.932575 20.268968 13.407869 23.900657 13.404297 27.666016 C 13.400697 31.431427 10.913208 35.308005 9.7871094 36.576172 A 1.041583 1.041583 0 0 0 9.8769531 38.048828 A 1.041583 1.041583 0 0 0 11.34375 37.960938 C 12.799572 36.321449 15.483961 32.285782 15.488281 27.666016 C 15.492681 23.046194 12.814259 19.21693 11.337891 17.679688 A 1.041583 1.041583 0 0 0 10.605469 17.357422 z M 6.0664062 19.919922 A 0.94689364 0.94689364 0 0 0 5.5449219 20.1875 A 0.94689364 0.94689364 0 0 0 5.5527344 21.527344 C 6.4043137 22.371405 8.3526602 25.111731 8.3554688 27.892578 C 8.3583088 30.673449 6.4077932 33.613727 5.5371094 34.554688 A 0.94689364 0.94689364 0 0 0 5.5898438 35.892578 A 0.94689364 0.94689364 0 0 0 6.9277344 35.841797 C 8.1062645 34.568027 10.253663 31.486109 10.25 27.892578 C 10.2464 24.298991 8.0869607 21.375176 6.8847656 20.183594 A 0.94689364 0.94689364 0 0 0 6.0664062 19.919922 z " />
</Svg>
);
}