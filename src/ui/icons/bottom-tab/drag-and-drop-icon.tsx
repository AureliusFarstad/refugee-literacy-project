import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function DragIcon ({ lineColor }: { lineColor: string }): JSX.Element {
return (
<Svg
    width="55"
    height="55"
    viewBox="0 0 55 55"
    fill="none">
    <Path
        id="path4"
        fill={lineColor}
        d="m 39.828928,4.953125 -0.268699,0.00404 -0.268698,0.010102 -0.264658,0.016163 -0.264658,0.024244 -0.260618,0.028285 -0.260617,0.036365 -0.258597,0.044446 -0.254557,0.048487 -0.254557,0.054548 -0.250515,0.062629 -0.248496,0.06667 -0.246476,0.072731 -0.07879,0.026264 0.638413,1.9677627 0.05455,-0.018183 0.195968,-0.058588 0.20001,-0.054548 0.202028,-0.048487 0.202028,-0.044446 0.20405,-0.038385 0.20809,-0.034344 0.20809,-0.030305 0.210111,-0.024244 0.21213,-0.018183 0.21213,-0.014142 0.216172,-0.00808 0.21617,-0.00202 0.216172,0.00202 0.214151,0.00808 0.21415,0.014142 0.21011,0.018183 0.210111,0.024244 0.0202,0.00404 0.286882,-2.0485744 -0.04444,-0.00808 -0.262637,-0.028284 -0.264659,-0.024244 -0.264658,-0.016163 -0.266677,-0.010102 z m 5.648731,1.6626989 -1.137423,1.7273481 0.161623,0.1070754 0.165664,0.1131362 0.163643,0.1191972 0.159603,0.1232377 0.155563,0.1252579 0.153542,0.1292985 0.149501,0.1333393 0.147482,0.1373797 0.143441,0.1394 0.141419,0.1434409 0.13536,0.1474806 0.133339,0.1495018 0.129299,0.1535428 0.127278,0.157582 0.121216,0.159603 0.119198,0.161623 0.115157,0.165663 0.111116,0.167685 0.04242,0.07071 1.755632,-1.0949974 -0.05657,-0.090914 L 48.47577,9.5513055 48.334349,9.3452359 48.184848,9.1411866 48.033326,8.9431982 47.875744,8.7492503 47.71412,8.5573228 47.548456,8.3694358 47.378752,8.1876096 47.202987,8.0078038 47.025202,7.8340588 46.841355,7.6623341 46.653468,7.4966704 46.46356,7.3350471 46.267593,7.1774645 46.069604,7.0259427 45.867575,6.8784616 45.661506,6.7350209 Z M 32.723567,7.7492067 32.632653,7.8340592 32.452846,8.0078041 32.279101,8.18761 32.107377,8.3694362 31.941714,8.5573231 31.78009,8.7492507 31.622507,8.9431985 31.470986,9.141187 l -0.147481,0.2040493 -0.143441,0.2060696 -0.137381,0.2101095 -0.133338,0.2121308 -0.129299,0.2181908 -0.123238,0.218193 -0.117177,0.22425 -0.113136,0.226273 -0.107076,0.230314 -0.101014,0.232333 -0.07273,0.175765 1.915234,0.781852 0.06263,-0.151521 0.08081,-0.185866 0.08687,-0.183848 0.09092,-0.181826 0.09293,-0.179805 0.09899,-0.175766 0.103035,-0.173745 0.107076,-0.171724 0.111115,-0.167685 0.113137,-0.165663 0.119196,-0.161623 0.123239,-0.159603 0.125258,-0.157582 0.129299,-0.1535428 0.133339,-0.1495018 0.137379,-0.1474806 0.1394,-0.1434405 0.143441,-0.1394 0.07273,-0.06869 z m 17.461369,6.4022993 -2.054636,0.236375 0.01616,0.139399 0.01818,0.21213 0.01414,0.212132 0.0081,0.21617 0.002,0.20203 v 0.02627 l -0.002,0.20405 -0.0081,0.21415 -0.01414,0.21415 -0.01818,0.210111 -0.02424,0.21011 -0.02828,0.21011 -0.03434,0.20607 -0.04041,0.20405 -0.04445,0.204048 -0.04848,0.200009 -0.05455,0.200009 -0.05858,0.197988 -0.06263,0.193948 -0.06869,0.193948 -0.07274,0.189908 -0.07677,0.187887 -0.08081,0.187886 -0.05859,0.127279 1.872809,0.874785 0.07071,-0.149501 0.101015,-0.234353 0.09697,-0.234354 0.09091,-0.238395 0.08485,-0.242435 0.07879,-0.242434 0.07274,-0.246476 0.06869,-0.248495 0.06061,-0.252537 0.05455,-0.252537 0.05051,-0.256577 0.04243,-0.258597 0.03637,-0.258597 0.0303,-0.262637 0.02222,-0.264658 0.01818,-0.264657 0.0101,-0.266679 0.002,-0.256577 -1.034389,-0.01414 1.034389,-0.01213 -0.002,-0.254557 -0.0101,-0.268699 -0.01818,-0.264657 -0.02222,-0.264659 z m -18.703848,1.723308 -2.064735,0.131319 0.01212,0.177785 0.02424,0.264658 0.02828,0.262637 0.03637,0.258597 0.04445,0.258598 0.04848,0.256576 0.05455,0.252538 0.06263,0.252536 0.06667,0.248496 0.07273,0.246475 0.07879,0.242434 0.08485,0.242435 0.09091,0.238395 0.09697,0.234354 0.101014,0.234353 0.107076,0.228293 0.113136,0.226272 0.117177,0.224253 0.0202,0.03434 1.806138,-1.008125 -0.0081,-0.01414 -0.09293,-0.179805 -0.09091,-0.179806 -0.08688,-0.183847 -0.08081,-0.187886 -0.07677,-0.187887 -0.07273,-0.189908 -0.06869,-0.193948 -0.06263,-0.193948 -0.05859,-0.197988 -0.05455,-0.200009 -0.04848,-0.200008 -0.04444,-0.204049 -0.03838,-0.20405 -0.03434,-0.206069 -0.03031,-0.210111 -0.02424,-0.21011 -0.01818,-0.210111 z m 13.661203,5.963897 -0.151522,0.123237 -0.159603,0.121218 -0.163643,0.119196 -0.165664,0.115157 -0.167683,0.111116 -0.171726,0.105056 -0.173744,0.103035 -0.175766,0.09899 -0.179806,0.09495 -0.179806,0.08889 -0.183846,0.08687 -0.187887,0.08081 -0.187888,0.07677 -0.189906,0.07273 -0.193948,0.06869 -0.193948,0.06263 -0.197989,0.05859 -0.200008,0.05455 -0.01213,0.002 0.490931,2.010189 0.03838,-0.0081 0.248496,-0.06869 0.246475,-0.07273 0.242435,-0.07879 0.242435,-0.08485 0.238395,-0.09091 0.234352,-0.09697 0.234353,-0.101014 0.228295,-0.107076 0.226272,-0.113136 0.224251,-0.117177 0.220212,-0.123238 0.216172,-0.127278 0.21415,-0.133339 0.210111,-0.139401 0.206069,-0.141419 0.202029,-0.149502 0.197988,-0.151521 0.195968,-0.157584 0.01414,-0.01213 z m -10.244891,0.296982 -1.220256,1.670781 0.113136,0.08283 0.20607,0.141419 0.21011,0.139401 0.21213,0.133339 0.218192,0.127278 0.218191,0.123238 0.224252,0.117177 0.226273,0.113136 0.230313,0.107076 0.232334,0.101014 0.236373,0.09697 0.238395,0.09091 0.240414,0.08485 0.244455,0.07879 0.246476,0.07273 0.248496,0.06869 0.250515,0.06061 0.254557,0.05657 0.127279,0.02424 0.387895,-2.032413 -0.101015,-0.0202 -0.202029,-0.04445 -0.202028,-0.04848 -0.20001,-0.05455 -0.195968,-0.05859 -0.195967,-0.06263 -0.191929,-0.06869 -0.191927,-0.07273 -0.187886,-0.07677 -0.185868,-0.08081 -0.183845,-0.08688 -0.181827,-0.08889 -0.179806,-0.09495 -0.175766,-0.09899 -0.173744,-0.103034 -0.171725,-0.105056 -0.167684,-0.111117 -0.165664,-0.115156 z m -10.598443,1.400062 c -0.428444,0 -0.775791,0.347348 -0.775791,0.775791 0,0.428444 0.347347,0.775791 0.775791,0.775791 h 5.107293 l -6.598267,6.600288 1.097017,1.097018 6.600288,-6.598268 v 5.107294 c 0,0.428444 0.347348,0.775792 0.775792,0.775792 0.428444,0 0.775792,-0.347348 0.775792,-0.775792 v -6.982123 c 0,-0.428443 -0.347348,-0.775791 -0.775792,-0.775791 z m -9.610521,6.634632 c -5.7511865,0 -10.4307588,4.679574 -10.4307588,10.430759 0,5.751186 4.6795723,10.428738 10.4307588,10.428738 5.751186,0 10.428739,-4.677552 10.428739,-10.428738 0,-5.751185 -4.677553,-10.430759 -10.428739,-10.430759 z" />
</Svg>
);
}