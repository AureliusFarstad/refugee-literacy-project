import SVGatorPlayer from "@svgator/react-native";
import React from "react";
import WebView from "react-native-webview";

function getHtml() {
  return SVGatorPlayer.wrapPage(
    '<svg id="eaf2ZRAckny1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100.6 100.3" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="dd6e966604254f09a2964e1405f1aa72" export-id="e9527cd6f01d4edab6841ffa0b2496fe" cached="false"><circle id="eaf2ZRAckny2" style="isolation:isolate" r="2.21301" transform="matrix(2.824348 0 0 2.824348 65.78 17.258)" fill="#c385f8"/>\r\n<script><![CDATA[\r\n' +
      SVGatorPlayer.getPlayer("91c80d77") +
      '(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll(\'svg#\' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'91c80d77\',{"root":"eaf2ZRAckny1","version":"2022-05-04","animations":[{"elements":{"eaf2ZRAckny2":{"transform":{"data":{"s":{"x":2.824348,"y":2.824348}},"keys":{"o":[{"t":0,"v":{"x":65.78,"y":17.258,"type":"cusp","end":{"x":48.78,"y":4.808}}},{"t":550,"v":{"x":30.32,"y":10.018,"type":"cusp","start":{"x":41.58,"y":3.778},"end":{"x":18.85,"y":16.368}}},{"t":1270,"v":{"x":6.45,"y":53.788,"type":"cusp","start":{"x":8.96,"y":34.838},"end":{"x":4.66,"y":67.248}}},{"t":1850,"v":{"x":20.09,"y":90.738,"type":"cusp","start":{"x":7.82,"y":82.978},"end":{"x":31.92,"y":98.218}}},{"t":2320,"v":{"x":51.09,"y":86.858,"type":"cusp","start":{"x":46.67,"y":92.088},"end":{"x":59,"y":77.488}}},{"t":2790,"v":{"x":65.65,"y":57.628,"type":"cusp","start":{"x":64.74,"y":69.858},"end":{"x":66.56,"y":45.408}}},{"t":3310,"v":{"x":66.12,"y":20.938,"type":"cusp","start":{"x":66.98,"y":33.168},"end":{"x":65.77,"y":15.928}}},{"t":3520,"v":{"x":65.06,"y":5.918,"type":"cusp","start":{"x":65.42,"y":10.928},"end":{"x":65.75,"y":24.078}}},{"t":4280,"v":{"x":67.13,"y":60.398,"type":"cusp","start":{"x":66.44,"y":42.238},"end":{"x":67.45,"y":68.958}}},{"t":4640,"v":{"x":72.53,"y":85.198,"type":"cusp","start":{"x":67.92,"y":77.978},"end":{"x":77.14,"y":92.418}}},{"t":5000,"v":{"x":94.57,"y":91.978,"type":"cusp","start":{"x":87.45,"y":96.748}}}]}}}},"s":"MDBA1ZGIyVDU5OJWJhY2E5VTk4KYWJQYTBhNmEP1NTk3MTZjNjMdFNjc2NzYzNDTk5YmEwQmE5GOWM5YWFiYTBKhNmE1QTU5NzBE2ODYzNTlhMSGFiOWNhOUw5KOGFiVmEwYTZNhNWFhNTlVNzRFRNjg2MzU5OIWRhMGEzYTM1LOTcxNjhXNjMX1OVI5OEphM2HFiUzljYTlEYATU5OGFiOWM1EOTcxOWQ5OGESzYWE5YzYzNTMlhYWE3OWM5YQzliNTlTWDcxYTzY4NjM1OTlBkYTdhYTU5NzFE2ODY3NjdiNHA|"}],"options":"MDFAxODgyMjk3YPTdiNjg3OTdiHMjk0MTI5NzcO3OTc2NmVQNzVk2ODc0NzQ2OMFM3YjcwNmEyAOTg0"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n',
  );
}

const SVGatorComponent = React.forwardRef((props, ref) => {
  const html = getHtml();
  if (!SVGatorPlayer.getWebViewProps) {
    console.warn(
      "Your currently installed @svgator/react-native package is outdated. " +
        "Please update it to the newest version. " +
        "See more: https://www.npmjs.com/package/@svgator/react-native",
    );
    const newProps = SVGatorPlayer.parseProps(props, html);
    return (
      <WebView
        ref={ref}
        {...newProps}
        source={{ html }}
        containerStyle={{ flex: 0 }}
        style={{ backgroundColor: "transparent", flex: 0 }}
      />
    );
  }

  const { newProps, styles } = SVGatorPlayer.getWebViewProps(props, html);

  return (
    <WebView
      ref={ref}
      {...newProps}
      source={{ html }}
      containerStyle={styles.container}
      style={styles.style}
    />
  );
});

export default SVGatorComponent;
