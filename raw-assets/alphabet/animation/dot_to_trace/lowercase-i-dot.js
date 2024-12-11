import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"ensGheYX9x61\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-100 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"abbf6b7f32c94896992e2c9a769b390a\" export-id=\"beaa5949c4854429bde0558651e285e0\" cached=\"false\"><g transform=\"translate(40.714631-5.624916)\"><path d=\"M6.21,102.7c-1.53,32.74.83,65.66,7.02,97.84\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><path d=\"M8.3,54.77c-2.25-.57-4.53,4.91-1.5,4.58c1.22-.13,2.66-1.4,2.76-2.61.09-.97-.94-2.82-1.9-1.66\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><\/g><g id=\"ensGheYX9x65\" transform=\"matrix(2.108072 0 0 2.108072 41.106283-48.407845)\" opacity=\"0\"><circle style=\"isolation:isolate\" r=\"7.547625\" transform=\"matrix(.879898 0 0 0.879898 3.86269 46.275814)\" fill=\"#c385f8\"\/><\/g><g id=\"ensGheYX9x67\" transform=\"matrix(2.108072 0 0 2.108072 39.016283-.477845)\"><circle style=\"isolation:isolate\" r=\"7.547624\" transform=\"matrix(.879898 0 0 0.879898 3.795027 46.224949)\" fill=\"#c385f8\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"ensGheYX9x61\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"ensGheYX9x65\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":4600,\"v\":{\"x\":49.014631,\"y\":49.145084,\"type\":\"cusp\",\"end\":{\"x\":46.764631,\"y\":48.575084}}},{\"t\":5090,\"v\":{\"x\":47.514631,\"y\":53.725084,\"type\":\"cusp\",\"start\":{\"x\":44.484631,\"y\":54.055084},\"end\":{\"x\":48.734631,\"y\":53.595084}}},{\"t\":5370,\"v\":{\"x\":50.274631,\"y\":51.115084,\"type\":\"cusp\",\"start\":{\"x\":50.174631,\"y\":52.325084},\"end\":{\"x\":50.364631,\"y\":50.145084}}},{\"t\":5600,\"v\":{\"x\":48.374631,\"y\":49.455084,\"type\":\"cusp\",\"start\":{\"x\":49.334631,\"y\":48.295084}}}]}},\"opacity\":[{\"t\":3800,\"v\":0},{\"t\":4600,\"v\":1}]},\"ensGheYX9x67\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":800,\"v\":{\"x\":46.924631,\"y\":97.075084,\"type\":\"cusp\",\"end\":{\"x\":45.394631,\"y\":129.815084}}},{\"t\":2200,\"v\":{\"x\":53.944631,\"y\":194.915084,\"type\":\"cusp\",\"start\":{\"x\":47.754631,\"y\":162.735084}}}]}},\"opacity\":[{\"t\":800,\"v\":1},{\"t\":3000,\"v\":1},{\"t\":3800,\"v\":0}]}},\"s\":\"MDAA1ZDg2MmQ2ZLkc4MDdkNmNGNN2ZXNzQ3YTcG5MmQ0NTQxM2QZTM2IzYkMzNJzJkNmY3NDdkHNzA2ZTdmNzQY3YTc5VTJkNDBUzYzM3UDJkNGzQ3ZjcwN2Q2WYzdmNzQ3YTcN5N2UyZEk0NTBNjMzcyZDcxNQzQ3Nzc3MmQ0SNTNjMzcyZDZIjNzc3ZjcwN2HQ3OTZjN2Y3MMDJkNDU3MU42AYzc3N2U3MDMI3MmQ3ZUs3YjUcwNzBINmYyZJEI0NTNjMzcyIZDcxN2I3ZTJIkNDUzY0czYjINiODg\/\"}],\"options\":\"MDRAxODkyMzlHOGGE4Yjc4ODk4IYjM5NTEzOTgM3ODk4NjdlODEk3ODg0ODQ3OVDhiTjgwN2EzWOTk0\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
}

const SVGatorComponent = React.forwardRef((props, ref) => {
    const html = getHtml();
    if (!SVGatorPlayer.getWebViewProps) {
        console.warn("Your currently installed @svgator/react-native package is outdated. " +
            "Please update it to the newest version. " +
            "See more: https://www.npmjs.com/package/@svgator/react-native");
        const newProps = SVGatorPlayer.parseProps(props, html);
        return (
            <WebView ref={ref}
                     {...newProps}
                     source={{html}}
                     containerStyle={{flex: 0}}
                     style={{backgroundColor: "transparent", flex: 0}}/>
        );
    }

    const {newProps, styles} = SVGatorPlayer.getWebViewProps(props, html);

    return (
        <WebView
            ref={ref}
            {...newProps}
            source={{html}}
            containerStyle={styles.container}
            style={styles.style}
        />
    );
});

export default SVGatorComponent;
