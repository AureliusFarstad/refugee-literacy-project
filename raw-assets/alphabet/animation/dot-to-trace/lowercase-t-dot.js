import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"ehSGK30IoHD1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-100 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"c5465a02a21f4e6f86cb9aadb9560882\" export-id=\"10411d27811e423ab3af3cd6d8ccf46a\" cached=\"false\"><g transform=\"translate(14.465002 0.107511)\"><path d=\"M39.42,2.7c-.5,28.13-3.7,73.39-5.16,97.09-4.86,78.79-5.96,95.23,3.77,97.13c6.41,1.25,19.01-4.85,22.31-9.97\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><path d=\"M4.48,97.7c22.18-.65,39.93,5.31,62.11,3.27\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><\/g><g id=\"ehSGK30IoHD5\" transform=\"matrix(2.108072 0 0 2.108072 11.036654 0.254582)\" opacity=\"0\"><circle style=\"isolation:isolate\" r=\"7.547624\" transform=\"matrix(.879898 0 0 0.879898 3.86269 46.275814)\" fill=\"#c385f8\"\/><\/g><g id=\"ehSGK30IoHD7\" transform=\"matrix(2.108072 0 0 2.108072 45.976654-94.745418)\"><circle style=\"isolation:isolate\" r=\"7.547624\" transform=\"matrix(.879898 0 0 0.879898 3.795027 46.224949)\" fill=\"#c385f8\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"ehSGK30IoHD1\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"ehSGK30IoHD5\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":6800,\"v\":{\"x\":18.945002,\"y\":97.807511,\"type\":\"cusp\",\"end\":{\"x\":41.125002,\"y\":97.157511}}},{\"t\":8100,\"v\":{\"x\":81.055002,\"y\":101.077511,\"type\":\"cusp\",\"start\":{\"x\":58.875002,\"y\":103.117511}}}]}},\"opacity\":[{\"t\":5100,\"v\":0},{\"t\":5900,\"v\":1}]},\"ehSGK30IoHD7\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":800,\"v\":{\"x\":53.885002,\"y\":2.807511,\"type\":\"cusp\",\"end\":{\"x\":53.385002,\"y\":30.937511}}},{\"t\":1890,\"v\":{\"x\":48.725002,\"y\":99.897511,\"type\":\"cusp\",\"start\":{\"x\":50.185002,\"y\":76.197511},\"end\":{\"x\":43.865002,\"y\":178.687511}}},{\"t\":3020,\"v\":{\"x\":52.495002,\"y\":197.027511,\"type\":\"cusp\",\"start\":{\"x\":42.765002,\"y\":195.127511},\"end\":{\"x\":58.905002,\"y\":198.277511}}},{\"t\":3300,\"v\":{\"x\":74.805002,\"y\":187.057511,\"type\":\"cusp\",\"start\":{\"x\":71.505002,\"y\":192.177511}}}]}},\"opacity\":[{\"t\":4100,\"v\":1},{\"t\":4900,\"v\":0}]}},\"s\":\"MDAA1ZDgyMjk2YEjdjNzlVNjg3NYjcwRzc2NzUPyOTQxM2Y0MDTM3MzczM1IyOSTZiNzA3OUE2UYzZhN2I3MDcH2NzVHMjlZNDAEzODMzMjk3MIDdiNmM3OTY4JN2I3MDc2NzUI3YTI5QTQxMzCgzMzI5NmQ3MJFU3MzczMjk0YMTM4MzMyOTYW4NzNRTDdiNmWM3OTc1Njg3YLjZjMjk0MTZkSNjg3MzdhNmMSzMzI5N2E3N0RY2YzZjNmIyOWTQxMzgzMzI5KNmQ3NzdhMjkJ0MTM4MzczN1WE4NA|\"}],\"options\":\"MDTAxODgyTTI5NA2E3YjY4Nzk3IYjI5SzQxMjkA3Nzc5NzY2ZTPc5Njg3NDc0NWjg3YjcwWTZhFMjk4NA|\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
