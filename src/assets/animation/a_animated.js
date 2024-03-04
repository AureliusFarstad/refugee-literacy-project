import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

import { View } from "react-native";

function getHtml() {
  return SVGatorPlayer.wrapPage(
    '<svg id="elEk3BoG2L71" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 150 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="background-color:transparent"><path id="elEk3BoG2L72" d="M64.59,117.5c-17-12.45-24.2-13.48-35.46-7.24-11.47,6.35-21.36,24.82-23.87,43.77-1.79,13.46,1.37,29.19,13.64,36.95c11.83,7.48,26.58,1.35,31-3.88c7.91-9.37,13.65-17,14.56-29.23.91-12.22,1.33-24.46.47-36.69-.35-5.01-.7-10.01-1.06-15.02.69,18.16,1.38,36.32,2.07,54.48.32,8.56.79,17.58,5.4,24.8s14.92,11.55,22.04,6.78" transform="translate(25.911621-.279417)" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="0,400"/><g id="elEk3BoG2L73" transform="translate(-19.283042-77.193412)"><g transform="matrix(.1 0 0 0.1 84.184613 143.214019)"><path d="M361.412,297.527v-282.468C361.412,6.742,368.154,0,376.471,0s15.059,6.742,15.059,15.059v316.235c0,3.183-1.008,6.283-2.88,8.857L268.179,505.798c-6.014,8.269-18.344,8.269-24.357,0L123.351,340.151c-1.872-2.574-2.88-5.675-2.88-8.857v-316.235C120.471,6.742,127.213,0,135.529,0s15.059,6.742,15.059,15.059v282.468c10.908-7.292,23.925-11.409,37.647-11.409c12.094,0,23.718,3.189,33.882,9.067c10.164-5.878,21.789-9.067,33.882-9.067c12.094,0,23.718,3.189,33.882,9.067c10.164-5.878,21.789-9.067,33.882-9.067c13.726,0,26.742,4.118,37.649,11.409ZM286.231,429.771l69.576-95.667c-6.816-11.016-18.826-17.869-32.042-17.869-8.992,0-17.459,3.144-24.196,8.804-5.6,4.705-13.772,4.705-19.373,0-6.737-5.66-15.204-8.804-24.196-8.804s-17.459,3.144-24.196,8.804c-5.6,4.705-13.772,4.705-19.373,0-6.737-5.66-15.204-8.804-24.196-8.804-13.212,0-25.221,6.848-32.042,17.869l69.576,95.667c8.885-5.166,19.213-8.124,30.231-8.124s21.345,2.958,30.231,8.124Z"/></g><ellipse rx="2.5" ry="2.5" transform="translate(109.784663 191.913995)" fill="#ff2d34" stroke-width="0"/></g>\r\n<script><![CDATA[\r\n' +
      SVGatorPlayer.getPlayer("91c80d77") +
      '(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll(\'svg#\' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'91c80d77\',{"root":"elEk3BoG2L71","version":"2022-05-04","animations":[{"elements":{"elEk3BoG2L72":{"stroke-dasharray":[{"t":0,"v":[0,400]},{"t":3000,"v":[400,400]}]},"elEk3BoG2L73":{"transform":{"data":{"t":{"x":-109.784663,"y":-194.413995}},"keys":{"o":[{"t":0,"v":{"x":90.501621,"y":117.220583,"type":"cusp","end":{"x":73.501621,"y":104.770583}}},{"t":300,"v":{"x":55.041621,"y":109.980583,"type":"cusp","start":{"x":66.301621,"y":103.740583},"end":{"x":43.571621,"y":116.330583}}},{"t":600,"v":{"x":31.171621,"y":153.750583,"type":"cusp","start":{"x":33.681621,"y":134.800583},"end":{"x":29.381621,"y":167.210583}}},{"t":1000,"v":{"x":44.811621,"y":190.700583,"type":"cusp","start":{"x":32.541621,"y":182.940583},"end":{"x":56.641621,"y":198.180583}}},{"t":1300,"v":{"x":75.811621,"y":186.820583,"type":"cusp","start":{"x":71.391621,"y":192.050583},"end":{"x":83.721621,"y":177.450583}}},{"t":1500,"v":{"x":90.371621,"y":157.590583,"type":"cusp","start":{"x":89.461621,"y":169.820583},"end":{"x":91.281621,"y":145.370583}}},{"t":1700,"v":{"x":90.841621,"y":120.900583,"type":"cusp","start":{"x":91.701621,"y":133.130583},"end":{"x":90.491621,"y":115.890583}}},{"t":1900,"v":{"x":89.781621,"y":105.880583,"type":"cusp","start":{"x":90.141621,"y":110.890583},"end":{"x":90.471621,"y":124.040583}}},{"t":2100,"v":{"x":91.851621,"y":160.360583,"type":"cusp","start":{"x":91.161621,"y":142.200583},"end":{"x":92.171621,"y":168.920583}}},{"t":2400,"v":{"x":97.251621,"y":185.160583,"type":"cusp","start":{"x":92.641621,"y":177.940583},"end":{"x":101.861621,"y":192.380583}}},{"t":2700,"v":{"x":119.291621,"y":191.940577,"type":"cusp","start":{"x":112.171621,"y":196.710577}}}]}}}},"s":"MDKA1ZGNkNzRiNEkljN2M0YjNjLNkJiYmMxYzAD3NDhjODU4MjPgyODI3ZTc0YKjZiYmM0YjdiLNWM2YmJjMUFHjME1ZNzQ4YzEgzN2U3NGJiYOzZiN2M0RGIzYYzZiYmMxYzBGjNTc0OGM4MzHdlNzRTYjhiYFmJlYmU3NDhjUODM3ZTc0YjNViZWM2YjdjNGFMwYjNjNmI3NDzQ4Y2I4YjNiEZWM1YjdWN2UQ3NEdjNWMyYjNdiN2I2NzQ4YMzgzN2U3NGI4TYzJjNTc0OGMH4MzgyODJjZgL|"}],"options":"MDFAxODgySzI5NF2E3YjY4NzlEJN2IyOUE0MTIN5Nzc3OUY3NjJZlNzk2ODc0UAjc0Njg3YjcwBNmEyOTg0"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n'
  );
}

const SVGatorComponent = React.forwardRef((props, ref) => {
  const html = getHtml();
  if (!SVGatorPlayer.getWebViewProps) {
    console.warn(
      "Your currently installed @svgator/react-native package is outdated. " +
        "Please update it to the newest version. " +
        "See more: https://www.npmjs.com/package/@svgator/react-native"
    );
    const newProps = SVGatorPlayer.parseProps(props, html);
    return (
      <WebView
        ref={ref}
        {...newProps}
        source={{ html }}
        containerStyle={{ flex: 1, height: "100%" }}
        style={{ backgroundColor: "transparent" }}
      />
    );
  }

  const { newProps, styles } = SVGatorPlayer.getWebViewProps(props, html);
  console.log(newProps);
  console.log(styles);

  styles.style["height"] = 120;

  return (
    <WebView
      ref={ref}
      {...newProps}
      source={{ html }}
      containerStyle={styles.container}
      style={{
        backgroundColor: "transparent",
        flex: 0,
        height: 120,
        width: "100%",
      }}
    />
  );
});

export default SVGatorComponent;
