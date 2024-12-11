import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eB1MAYItNne1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-100 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"d278b97800df49a6884d55c0be111f84\" export-id=\"9753e1971cf8485699c59008fbc281df\" cached=\"false\"><g transform=\"translate(-5.099999 0.623205)\"><path d=\"M2.8,3.5c0,0,20.6.1,20.4,0c0,0,14.9.2,25.3,0c18.6-.3,37.9-.6,58.9,0\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\/><path d=\"M55.3,3.5c.1,38.6-.3,74-.3,112.7c0,7-.9,55.6-.2,79.4\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\/><\/g><g id=\"eB1MAYItNne5\" transform=\"matrix(2.108072 0 0 2.108072-10.208347-93.429724)\" opacity=\"0\"><circle style=\"isolation:isolate\" r=\"7.547625\" transform=\"matrix(.879898 0 0 0.879898 3.86269 46.275814)\" fill=\"#c385f8\" stroke-width=\"28\"\/><\/g><g id=\"eB1MAYItNne7\" transform=\"matrix(2.108072 0 0 2.108072 42.291653-93.429724)\"><circle style=\"isolation:isolate\" r=\"7.547624\" transform=\"matrix(.879898 0 0 0.879898 3.795027 46.224949)\" fill=\"#c385f8\" stroke-width=\"28\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eB1MAYItNne1\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"eB1MAYItNne5\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":6500,\"v\":{\"x\":-2.299999,\"y\":4.123205,\"type\":\"cusp\",\"end\":{\"x\":-2.299999,\"y\":4.123205}}},{\"t\":6890,\"v\":{\"x\":18.100001,\"y\":4.123205,\"type\":\"cusp\",\"start\":{\"x\":18.300001,\"y\":4.223205},\"end\":{\"x\":18.100001,\"y\":4.123205}}},{\"t\":7370,\"v\":{\"x\":43.400001,\"y\":4.123205,\"type\":\"cusp\",\"start\":{\"x\":33.000001,\"y\":4.323205},\"end\":{\"x\":62.000001,\"y\":3.823205}}},{\"t\":8500,\"v\":{\"x\":102.300001,\"y\":4.123205,\"type\":\"cusp\",\"start\":{\"x\":81.300001,\"y\":3.523205}}}]}},\"opacity\":[{\"t\":4900,\"v\":0,\"e\":[0.25,1,0.25,1]},{\"t\":5700,\"v\":1}]},\"eB1MAYItNne7\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":800,\"v\":{\"x\":50.200001,\"y\":4.123205,\"type\":\"cusp\",\"end\":{\"x\":50.300001,\"y\":42.723205}}},{\"t\":2230,\"v\":{\"x\":49.900001,\"y\":116.823205,\"type\":\"cusp\",\"start\":{\"x\":49.900001,\"y\":78.123205},\"end\":{\"x\":49.900001,\"y\":123.823205}}},{\"t\":3300,\"v\":{\"x\":49.700001,\"y\":196.223205,\"type\":\"cusp\",\"start\":{\"x\":49.000001,\"y\":172.423205}}}]}},\"opacity\":[{\"t\":4100,\"v\":1,\"e\":[0,0,0.58,1]},{\"t\":4900,\"v\":0}]}},\"s\":\"MDWA1ZGMzNmFhYN2JkYmFhOWJjIYjFiN2I2NmEJ4MjgxN2I3ODPc4NzQ2YWFjYGjFiYWFkTWFiHYmNiMWI3YjYV2YTgyNzk3NDIZhYjFiY2FkYFmFhOWJjYjFiJN2I2YmI2YTgRyNzk3NFc2YWAFlYjFiNGI0NWmE4Mjc5NzQ2OYWE5YjRiY2FLkYmFiNmE5YmNNMYWQ2YTgyYFWVhOWI0YmJhLZDc0NmFiYmIK4YWRhZGFjNmUE4Mjc5NzRXNImFhZWI4YmI2IYTgyNzk3ODcS4YzU\/\"}],\"options\":\"MDHAxODhhMzFBOQDI4MzcwWTgxWODMzMTQ5MzEU3ZjgxN2U3NjDgxNzA3YzdjNAzA4Mzc4NzIzPMUg4Yw|\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
