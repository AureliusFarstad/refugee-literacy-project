import SVGatorPlayer from "@svgator/react-native";
import React from "react";
import WebView from "react-native-webview";

function getHtml() {
  return SVGatorPlayer.wrapPage(
    '<svg id="e2RTHl49cLn1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="9acbd3097e2843f4a5b9e0a10a8e15f9" export-id="0fe148140bb7417d80129c8746a815cb" cached="false"><circle id="e2RTHl49cLn2" style="isolation:isolate" r="6" transform="translate(65.501621 17.220583)" fill="#c385f8"/>\r\n<script><![CDATA[\r\n' +
      SVGatorPlayer.getPlayer("91c80d77") +
      '(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll(\'svg#\' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'91c80d77\',{"root":"e2RTHl49cLn1","version":"2022-05-04","animations":[{"elements":{"e2RTHl49cLn2":{"transform":{"keys":{"o":[{"t":0,"v":{"x":65.501621,"y":17.220583,"type":"cusp","end":{"x":48.501621,"y":4.770583}}},{"t":550,"v":{"x":30.041621,"y":9.980583,"type":"cusp","start":{"x":41.301621,"y":3.740583},"end":{"x":18.571621,"y":16.330583}}},{"t":1270,"v":{"x":6.171621,"y":53.750583,"type":"cusp","start":{"x":8.681621,"y":34.800583},"end":{"x":4.381621,"y":67.210583}}},{"t":1850,"v":{"x":19.811621,"y":90.700583,"type":"cusp","start":{"x":7.541621,"y":82.940583},"end":{"x":31.641621,"y":98.180583}}},{"t":2320,"v":{"x":50.811621,"y":86.820583,"type":"cusp","start":{"x":46.391621,"y":92.050583},"end":{"x":58.721621,"y":77.450583}}},{"t":2790,"v":{"x":65.371621,"y":57.590583,"type":"cusp","start":{"x":64.461621,"y":69.820583},"end":{"x":66.281621,"y":45.370583}}},{"t":3310,"v":{"x":65.841621,"y":20.900583,"type":"cusp","start":{"x":66.701621,"y":33.130583},"end":{"x":65.491621,"y":15.890583}}},{"t":3520,"v":{"x":64.781621,"y":5.880583,"type":"cusp","start":{"x":65.141621,"y":10.890583},"end":{"x":65.471621,"y":24.040583}}},{"t":4280,"v":{"x":66.851621,"y":60.360583,"type":"cusp","start":{"x":66.161621,"y":42.200583},"end":{"x":67.171621,"y":68.920583}}},{"t":4640,"v":{"x":72.251621,"y":85.160583,"type":"cusp","start":{"x":67.641621,"y":77.940583},"end":{"x":76.861621,"y":92.380583}}},{"t":5000,"v":{"x":94.291621,"y":91.940583,"type":"cusp","start":{"x":87.171621,"y":96.710583}}}]}}}},"s":"MDFA1ZGI0NWI5ZYGFlYWJHOWFhWZGEyYThhN0cH1YjczRjZlWTSZhNjk2OTY1NJWI5ZGEyYWI5MZTljYWRLYTJBhOGE3NWI3MzSZhNjU1YmEyYSWQ5ZVdhYlE5JYWFkQWEyYThChN2FjNWI3MzMZhNjU1YjlmYJTJhNWE1NWJQWNzM2YTY1NWIR5YURhNVZhZDQllYWJhNzlhYVWQ5ZTViNzM5DZjlhQmE1YWMW5ZUg2NTViYWCNhOTllOWU5ZFFk1YjczNmE2TNTViOWZhOWFTjNWJVNzM2YTKY5UzY5YjY/"}],"options":"MDIAxODhhMzE4MNjgzNzA4MTgzLMzFMNDkzMTdQmODE3ZVNNNzAY4MTcwN2M3YTzcwODM3ODcyVQzMxOGM/"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n'
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
