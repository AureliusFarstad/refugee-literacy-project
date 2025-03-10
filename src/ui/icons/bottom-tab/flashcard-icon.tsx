import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function FlashcardIcon({
  lineColor,
}: {
  lineColor: string;
}): JSX.Element {
  return (
    <Svg width="55" height="55" viewBox="0 0 55 55" fill="none">
      <Path
        id="path4"
        fill={lineColor}
        d="m 34.947384,9.6380986 c -3.324252,-0.034009 -6.38157,2.1197984 -7.377059,5.4939944 l -1.040858,3.528158 c -1.384434,-1.622797 -3.398514,-2.613753 -5.56642,-2.677676 -0.767108,-0.02262 -1.55435,0.06989 -2.336241,0.289702 L 8.6134586,19.088596 C 4.4452608,20.26039 1.9383967,24.606755 3.0097914,28.801895 l 2.839081,11.120424 c 1.0713952,4.195144 5.3381116,6.657526 9.5063686,5.485717 l 10.013348,-2.81425 c 3.132562,-0.880648 5.327868,-3.557446 5.771281,-6.613485 l 7.99371,2.594903 c 4.118055,1.337391 8.471522,-0.956218 9.696744,-5.109104 l 3.083259,-10.452039 c 1.225209,-4.152838 -1.119358,-8.601465 -5.237401,-9.938854 L 37.26707,10.020919 C 36.494835,9.770126 35.714407,9.6459452 34.947384,9.6380986 Z m 0.0021,2.1520734 c 0.556943,0.0071 1.125728,0.09523 1.692688,0.279355 l 9.409112,3.058427 c 3.024374,0.982204 4.71975,4.194692 3.819929,7.244623 l -3.085327,10.44997 c -0.899792,3.049835 -4.003038,4.686233 -7.027347,3.704049 L 31.14192,33.726832 c -0.04026,-0.283289 -0.0933,-0.567585 -0.165544,-0.850483 l -0.879453,-3.443317 c 1.156521,1.980398 2.975563,3.558264 5.284995,4.308285 5.044212,1.638181 10.369439,-1.364978 11.892273,-6.526576 1.522331,-5.159995 -1.221279,-10.720277 -6.263774,-12.357865 -0.946075,-0.307253 -1.905238,-0.44968 -2.845289,-0.446969 -0.314069,9.05e-4 -0.623596,0.01905 -0.931186,0.05173 -3.702015,0.39339 -6.975724,3.050539 -8.117867,6.921812 -0.256633,0.869849 -0.382089,1.749918 -0.405584,2.621804 l -0.575266,-2.249329 c -0.04164,-0.163025 -0.09377,-0.32032 -0.14485,-0.478009 l 1.62647,-5.504341 c 0.731114,-2.478104 2.919907,-4.014205 5.332589,-3.983404 z m 3.209486,4.757322 c 0.721843,-1.83e-4 1.459996,0.112178 2.191389,0.349712 3.898843,1.266179 6.075927,5.624672 4.869066,9.715369 -1.207441,4.092583 -5.276495,6.355269 -9.17735,5.088411 -3.898731,-1.266169 -6.075914,-5.624794 -4.869065,-9.715369 0.905621,-3.069585 3.428296,-5.102696 6.269982,-5.398806 0.236771,-0.02468 0.47531,-0.03925 0.715978,-0.03932 z M 20.878206,18.12844 c 2.414599,0.06507 4.548449,1.687137 5.187737,4.190335 l 2.84322,11.122493 c 0.786831,3.080905 -1.025593,6.218471 -4.08687,7.079079 L 14.808946,43.336666 C 11.747801,44.197236 8.7029583,42.440467 7.9161042,39.359469 L 5.0770231,28.236976 C 4.290193,25.156071 6.1026167,22.020574 9.1638923,21.159967 L 19.17724,18.345717 c 0.574579,-0.161529 1.14428,-0.232279 1.700966,-0.217277 z m 14.547187,2.187252 c -0.227254,0.0088 -0.418609,0.152329 -0.517326,0.347643 -0.09872,0.195313 -0.09071,0.463636 0.09105,0.668383 l 1.727866,1.951351 h 0.0021 c 0.07183,0.08099 0.159966,0.13699 0.254525,0.167614 0.281949,0.09159 0.546528,-0.06017 0.666315,-0.273149 0.119786,-0.212989 0.128132,-0.506366 -0.05794,-0.715977 l -1.732006,-1.949282 c -0.121011,-0.136321 -0.281645,-0.202517 -0.434553,-0.196583 z m -18.516107,0.461453 c -0.802013,0.0075 -1.614153,0.119623 -2.42522,0.347643 -5.1903447,1.459174 -8.1903213,7.005111 -6.8349016,12.312341 1.3557749,5.308728 6.6548256,8.573885 11.8467476,7.114258 5.190525,-1.459203 8.186184,-7.007253 6.830763,-12.314411 -1.016797,-3.981657 -4.243145,-6.81158 -7.99164,-7.362573 -0.467671,-0.06875 -0.943866,-0.101806 -1.425749,-0.09726 z m 25.390324,1.765114 c -0.0424,7.51e-4 -0.08785,0.0059 -0.132435,0.01656 l -2.474884,0.585612 c -0.179053,0.0421 -0.31667,0.154737 -0.38489,0.291772 -0.06822,0.137034 -0.07484,0.289924 -0.04138,0.430414 0.03346,0.140492 0.108936,0.271892 0.227623,0.364197 0.118687,0.09231 0.286868,0.137856 0.459385,0.09726 l 2.476954,-0.583543 c 0.165474,-0.03892 0.292539,-0.142129 0.364197,-0.266939 0.07165,-0.124812 0.09265,-0.266863 0.07449,-0.401446 -0.01816,-0.134581 -0.07561,-0.262811 -0.171752,-0.364197 -0.09616,-0.101382 -0.236969,-0.17252 -0.397306,-0.169682 z m -25.359284,0.374544 c 0.372079,-0.0041 0.739538,0.02203 1.100869,0.07449 2.893671,0.420209 5.399681,2.606561 6.209972,5.779557 1.080029,4.228857 -1.306049,8.58637 -5.336728,9.719507 -4.032397,1.133645 -8.109287,-1.35221 -9.189766,-5.582974 -1.080004,-4.228823 1.308296,-8.584333 5.338797,-9.717438 0.630067,-0.177132 1.257606,-0.266343 1.876856,-0.273147 z m 19.62939,2.137588 c -0.750368,-0.0046 -1.493659,0.185956 -2.174836,0.56285 -0.158982,0.08795 -0.257104,0.231773 -0.289702,0.380751 -0.0326,0.14898 -0.007,0.299533 0.05794,0.428346 0.06493,0.128812 0.170108,0.238231 0.310396,0.29591 0.140288,0.05768 0.314882,0.05481 0.47387,-0.03311 0.813567,-0.450085 1.739201,-0.541254 2.615597,-0.256594 0.876213,0.284542 1.593175,0.910286 2.023776,1.767184 0.08234,0.163805 0.220966,0.270411 0.368335,0.306256 0.147371,0.03584 0.296658,0.0069 0.422138,-0.06208 0.12548,-0.06893 0.231903,-0.180171 0.285563,-0.322812 0.05366,-0.142642 0.04919,-0.318351 -0.03311,-0.482147 -0.573138,-1.140486 -1.540232,-1.983062 -2.716995,-2.365214 -0.441235,-0.143315 -0.892715,-0.216604 -1.342976,-0.219346 z m -17.373852,1.980321 c -0.157611,0.0015 -0.318482,0.02344 -0.478009,0.06828 -1.017923,0.286166 -1.619084,1.382761 -1.349184,2.439706 0.08288,0.324429 0.41553,0.526433 0.734602,0.436622 0.318702,-0.08958 0.501624,-0.430077 0.420069,-0.753225 -0.103332,-0.408834 0.12816,-0.826758 0.506978,-0.933256 0.37953,-0.106696 0.76865,0.126478 0.873245,0.53595 0.08262,0.323413 0.412908,0.52853 0.732532,0.438691 0.319054,-0.08977 0.502955,-0.428766 0.420069,-0.753225 -0.227692,-0.891657 -1.007071,-1.488065 -1.860302,-1.479551 z m -5.115312,1.438164 c -0.157611,0.0015 -0.318482,0.02344 -0.478008,0.06828 -1.017991,0.286186 -1.615003,1.383035 -1.345046,2.439706 0.08257,0.323786 0.411704,0.526217 0.730463,0.436622 0.319028,-0.08967 0.502809,-0.428723 0.420068,-0.753225 -0.10457,-0.409287 0.12967,-0.8266 0.509049,-0.933255 0.379641,-0.106728 0.766564,0.12611 0.871175,0.535949 0.08282,0.324231 0.41474,0.528596 0.734601,0.438692 0.319254,-0.08973 0.502738,-0.429489 0.420069,-0.753225 -0.227693,-0.891582 -1.009127,-1.488067 -1.862371,-1.479551 z m 6.390001,3.526089 c -0.214319,-0.0054 -0.423573,0.111961 -0.533879,0.312465 -0.471816,0.857365 -1.227823,1.467018 -2.13345,1.721658 -0.905678,0.254567 -1.848384,0.125166 -2.66319,-0.368335 -0.284196,-0.172197 -0.657746,-0.06688 -0.819443,0.225554 -0.161686,0.29216 -0.06658,0.666145 0.217277,0.838066 1.088929,0.659621 2.363296,0.836 3.577821,0.494563 1.214393,-0.341426 2.230411,-1.161131 2.857705,-2.301063 0.161208,-0.29292 0.06671,-0.666793 -0.217276,-0.838067 -0.08771,-0.05284 -0.186429,-0.08232 -0.285565,-0.08484 z"
      />
    </Svg>
  );
}
