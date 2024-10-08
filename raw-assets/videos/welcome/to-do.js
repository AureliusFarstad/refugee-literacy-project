import SVGatorPlayer from "@svgator/react-native";
import React from "react";
import WebView from "react-native-webview";

function getHtml() {
  return SVGatorPlayer.wrapPage(
    '<svg id="eDxE6yjXGhB1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 1600" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="f7a071fbe56e42d0ad68e13b0205b86b" export-id="9c5bf09e2ad74a8ab1be25da8719bf64" cached="false" style="background-color:#fafafa"><text dx="0" dy="0" font-family="&quot;Arial, sans-serif&quot;" font-size="28" font-weight="400" transform="matrix(7.47202 0 0 7.18687 132.293168 831.709565)" fill="#333"><tspan font-family="&quot;Arial, sans-serif&quot;" font-size="28" font-weight="400" font-style="normal" transform="matrix(7.47202 0 0 7.18687 132.293168 831.709565)" fill="#333"><![CDATA[\r\nTODO\r\n]]></tspan></text><text dx="0" dy="0" font-family="&quot;Arial, sans-serif&quot;" font-size="28" font-weight="400" transform="translate(439.719 718.689)" fill="#333"><![CDATA[\r\n \r\n]]></text></svg>\r\n',
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
