import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

export const EarButton = ({
    primaryColor,
    offwhiteColor,
    offblackColor,
  }: ButtonColorProps) => {
  return (
<Svg
    viewBox="0 0 40 40"
    fill="none"
    id="svg8"
>
    <Circle
      cx="20"
      cy="20"
      r="20"
      fill={primaryColor}
      id="circle1" />
    <Path
      d="m 23.511301,8.4396915 c -3.487,-0.22634 -5.5247,0.54862 -7.5075,3.0826095 -1.6503,2.1089 -1.0476,4.4666 -0.507,6.5811 l 0.0064,0.0248 c 0.2195,0.8589 0.5005,1.6268 0.5005,2.6423 0,1.961 -1.5015,3.0827 -2.0019,4.8442 -0.6602,2.324 -0.5009,4.8444 3.0025,5.7252 3.2256,0.8109 5.2989,-1.6095 6.006,-3.0827 0.7005,-1.4594 0.6191,-2.2461 2.0025,-3.5232 3.2922,-3.0393 5.5057,-3.9635 6.5065,-7.927 1.0858,-4.3 -3.0154,-8.0432395 -8.008,-8.3673095 z"
      fill={offwhiteColor}
      id="Path3" />
    <Path
      fill={offblackColor }
      d="m 23.150404,8.0195359 c -1.081723,-0.063532 -2.123102,0.01934 -3.097656,0.25 -1.998802,0.4730941 -3.639975,1.5627016 -4.722656,3.1308591 -0.944331,1.367981 -1.282517,3.187985 -0.964844,5.253906 l 0.002,0.0098 0.002,0.0098 c 0.28834,1.483003 0.724124,2.756945 0.84375,3.958985 0.119627,1.202039 -0.03651,2.325174 -0.957031,3.677734 l -0.01172,0.01758 -0.0098,0.01758 c -1.054176,1.865201 -1.273855,3.518025 -0.69336,4.867188 0.483093,1.12282 1.529138,2.026581 2.955078,2.539062 0.463319,0.166527 0.975641,0.248047 1.515625,0.248047 0.881985,0 1.821631,-0.217296 2.708985,-0.642578 1.830315,-0.877295 3.108416,-2.460938 3.5,-4.330078 0.147005,-0.701498 0.56279,-1.370664 1.126953,-2.029297 0.627306,-0.681049 1.937738,-1.923569 3.199218,-3.224609 1.266084,-1.305788 2.480687,-2.631051 2.992188,-3.708985 0.72385,-1.525576 0.597923,-3.577117 -0.335938,-5.427734 C 30.234618,10.71716 28.55341,9.2965245 26.484388,8.6484421 25.352593,8.2938559 24.232127,8.0830682 23.150404,8.0195359 Z m -0.05664,0.9999996 c 0.993502,0.05836 2.032594,0.250188 3.091797,0.582032 1.820177,0.5701355 3.275921,1.8034895 4.125,3.4863275 0.81334,1.611783 0.875722,3.388651 0.326172,4.546875 -0.370299,0.780366 -1.562091,2.155813 -2.808594,3.441406 -1.246502,1.285593 -2.544059,2.515405 -3.226562,3.257812 l -0.0078,0.0059 -0.0039,0.0078 c -0.621857,0.725939 -1.150082,1.53168 -1.347676,2.474582 -0.325616,1.55426 -1.382193,2.88086 -2.955078,3.634765 -0.757647,0.363118 -1.559176,0.542969 -2.275391,0.542969 -0.438615,0 -0.838653,-0.06758 -1.177734,-0.189453 -1.221259,-0.438919 -2.022893,-1.173807 -2.375,-1.992188 -0.429505,-0.998237 -0.317293,-2.278669 0.644531,-3.980468 l -0.02148,0.03516 c 1.042386,-1.531629 1.260701,-2.976285 1.125,-4.339844 -0.135048,-1.357 -0.581275,-2.640794 -0.853516,-4.03125 v -0.002 c -0.287755,-1.874103 0.02665,-3.412659 0.798828,-4.53125 0.938719,-1.359642 2.342908,-2.3018825 4.128906,-2.7246085 0.870747,-0.206091 1.818999,-0.2829699 2.8125,-0.22461 z"
      id="Path4" />
    <Path
      fill={offblackColor }
      d="m 23.113301,10.619101 c -1.08966,-0.01451 -2.17216,0.220201 -3.11328,0.708984 -1.55195,0.806073 -2.39019,2.28417 -2.4043,4.21484 -0.01022,1.41476 0.408798,2.5756 0.429687,2.63281 l 0.002,0.002 v 0.002 c 4e-5,10e-5 0.0017,0.0013 0.002,0.002 0.0089,0.02312 0.01955,0.04679 0.0332,0.07031 0.0065,0.01142 0.0078,0.01419 0.0039,0.0078 0.01314,0.0216 0.02867,0.04124 0.04492,0.06055 -0.0026,-0.003 -0.0033,-0.0022 0.0059,0.0078 0.01689,0.01937 0.03456,0.03717 0.05273,0.05273 h 0.002 c 0.0028,0.0023 0.0036,0.004 0.0059,0.0059 l 0.002,0.002 c 0.01874,0.01537 0.03847,0.02947 0.06055,0.04297 0.0066,0.004 0.0122,0.0081 0.01172,0.0078 0.02062,0.012 0.0431,0.02147 0.06641,0.03125 l 0.002,0.002 c 0.02579,0.01066 0.0519,0.01913 0.07617,0.02539 0.0029,7.86e-4 0.0061,0.0011 0.0098,0.002 0.02519,0.0061 0.05179,0.01098 0.07813,0.01367 0.0098,0.0011 0.01203,4.52e-4 0.0078,0 h 0.002 0.002 c 0.02388,0.002 0.05121,0.0033 0.08008,0.002 -0.0014,5.8e-5 0.212362,-0.007 0.470703,0.03125 0.258342,0.03826 0.564664,0.125127 0.773438,0.289063 h 0.002 c 0.188879,0.148135 0.27993,0.330794 0.296875,0.603515 0.01388,0.22371 -0.06147,0.379688 -0.193359,0.515625 -0.131895,0.135938 -0.326257,0.242308 -0.53125,0.31836 -0.409986,0.152102 -0.85569,0.183981 -0.882813,0.185546 -0.29069,0.01669 -0.534021,0.246362 -0.513672,0.53125 0.01975,0.274183 0.269589,0.468751 0.546875,0.46875 0.01203,10e-7 0.02353,4.56e-4 0.0332,0 h 0.002 c 0.471002,-0.02614 1.13163,-0.157606 1.68359,-0.472656 0.551968,-0.315049 0.998486,-0.843621 0.951172,-1.60547 -0.03299,-0.53185 -0.265974,-0.981478 -0.677734,-1.30469 -0.493138,-0.387129 -1.09572,-0.473103 -1.51953,-0.511719 0,0 -0.130646,-0.452052 -0.174201,-0.686892 -0.04355,-0.234839 -0.08557,-0.719358 -0.08557,-0.719358 2.14671,-1.19916 3.69066,-0.888957 4.42773,-0.576172 1.14931,0.487677 1.91501,1.55548 2.00391,2.78906 0.05646,0.783218 -0.450229,1.52869 -1.16602,2.19141 -0.715787,0.662721 -1.62585,1.2298 -2.3125,1.65625 -0.183611,0.114007 -0.357401,0.221504 -0.509766,0.320313 -0.689309,0.446868 -0.916098,1.18716 -1.125,1.85547 -0.153729,0.491706 -0.287201,0.859883 -0.476562,1.08203 -0.189361,0.222148 -0.427536,0.327801 -0.894531,0.302734 -0.329965,-0.0176 -0.514834,-0.105059 -0.646485,-0.277344 -0.202131,-0.264391 -0.242515,-0.742342 -0.1875,-1.21875 0.05502,-0.476407 0.196479,-0.944993 0.285156,-1.17578 0.102974,-0.267034 -0.06911,-0.55935 -0.347656,-0.642578 -0.278444,-0.08307 -0.586313,0.04151 -0.689453,0.308594 -0.04374,0.113253 -0.242266,0.649631 -0.330078,1.30078 -0.08781,0.65115 -0.06889,1.4281 0.369141,2.00195 0.327949,0.429601 0.849849,0.671324 1.48242,0.705078 0.06415,0.0033 0.126285,0.0039 0.1875,0.0039 0.801881,-1.04e-4 1.32853,-0.30447 1.66602,-0.724609 0.337487,-0.420139 0.498118,-0.941013 0.638672,-1.39062 0.180794,-0.57848 0.351384,-1.0851 0.705078,-1.31445 0.142061,-0.09214 0.311978,-0.196688 0.492188,-0.308594 0.7548,-0.46875 1.77231,-1.09955 2.58984,-1.88672 0.817538,-0.787164 1.44534,-1.74419 1.36523,-2.85547 -0.115278,-1.59844 -1.12827,-2.99069 -2.63672,-3.63086 -0.877882,-0.37259 -2.63302,-0.678766 -4.88477,0.369141 0.135768,-1.32185 0.698489,-2.28252 1.7793,-2.84375 1.5354,-0.797495 3.57388,-0.768426 5.16992,0.07813 1.37783,0.730887 2.10433,1.87687 2.03516,3.16211 -0.01549,0.28566 0.23206,0.511258 0.523438,0.523438 0.291622,0.01217 0.558888,-0.189226 0.574219,-0.47461 0.0904,-1.67392 -0.865436,-3.16661 -2.58008,-4.07617 -0.967147,-0.512939 -2.06268,-0.778458 -3.15234,-0.792969 z"
      id="Path8" />
    <Path
      fill={offblackColor}
      strokeLinecap="round"
      d="m 10.53125,14.710938 a 0.55000001,0.55000001 0 0 0 -0.392578,0.154296 0.55000001,0.55000001 0 0 0 -0.01563,0.777344 c 0.581134,0.605095 1.888605,2.52345 1.886719,4.511719 -0.0019,1.988297 -1.315529,4.035432 -1.910157,4.705078 a 0.55000001,0.55000001 0 0 0 0.04687,0.777344 0.55000001,0.55000001 0 0 0 0.775391,-0.04687 c 0.768736,-0.86572 2.185219,-2.996115 2.1875,-5.435547 0.0023,-2.439462 -1.411821,-4.461709 -2.191406,-5.273438 A 0.55000001,0.55000001 0 0 0 10.53125,14.710938 Z"
      id="Path1-8" />
    <Path
      fill={offblackColor}
      strokeLinecap="round"
      d="m 8.5664063,16.203125 a 0.5,0.5 0 0 0 -0.7070313,0.002 0.5,0.5 0 0 0 0.00391,0.707031 c 0.4496697,0.4457 1.4789856,1.892923 1.4804688,3.361328 0.0015,1.468418 -1.0285224,3.020712 -1.4882813,3.517579 a 0.5,0.5 0 0 0 0.027344,0.707031 0.5,0.5 0 0 0 0.7070313,-0.02734 C 9.2121637,23.798154 10.345684,22.170974 10.34375,20.273437 10.341833,18.375871 9.2012164,16.832331 8.5664063,16.203125 Z"
      id="Path1-2" />
  </Svg>
)};        