import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eQHteC5jDIM1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-100 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"505df1bc6369457b9e220bb08ded9311\" export-id=\"4beb046020824628a3c8ef2259eb86c8\" cached=\"false\"><g transform=\"translate(.188379-.986296)\"><path d=\"M5.7,201.3c0,0,2.2-14.2,3.2-18.6c2.2-9.5,9.5-51.2,15.2-75.9c7.9-34,17-69.7,25.3-103.2C58.8,26.7,67.9,69.1,69,73.4c8.8,34.3,12.2,67.6,16,102.9.9,8.4.9,10.5,2.2,18.8l.9,6.2\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-dasharray=\"404.55\"\/><path d=\"M29.4,100.6c-.6,0-1.1,0-1.7,0c14.9,0,28.9-.2,43.8.2-.4,0-.8,0-1.2,0\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-dasharray=\"46.71\"\/><\/g><g id=\"eQHteC5jDIM5\" transform=\"matrix(2.108072 0 0 2.108072 19.980031 2.060775)\" opacity=\"0\"><circle style=\"isolation:isolate\" r=\"7.547625\" transform=\"matrix(.879898 0 0 0.879898 3.86269 46.275814)\" fill=\"#c385f8\" stroke-width=\"35\"\/><\/g><g id=\"eQHteC5jDIM7\" transform=\"matrix(2.108072 0 0 2.108072-2.019969 102.760775)\"><circle style=\"isolation:isolate\" r=\"7.547624\" transform=\"matrix(.879898 0 0 0.879898 3.795027 46.224949)\" fill=\"#c385f8\" stroke-width=\"35\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eQHteC5jDIM1\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"eQHteC5jDIM5\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":6200,\"v\":{\"x\":27.888379,\"y\":99.613704,\"type\":\"cusp\",\"end\":{\"x\":42.708483,\"y\":99.613704}}},{\"t\":7200,\"v\":{\"x\":75.145741,\"y\":100.000182,\"type\":\"cusp\",\"start\":{\"x\":60.330055,\"y\":99.69581}}}]}},\"opacity\":[{\"t\":5400,\"v\":0},{\"t\":6200,\"v\":1,\"e\":[1,0]}]},\"eQHteC5jDIM7\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":800,\"v\":{\"x\":5.888379,\"y\":200.313704,\"type\":\"cusp\",\"end\":{\"x\":5.888379,\"y\":200.313704}}},{\"t\":940,\"v\":{\"x\":9.088379,\"y\":181.713704,\"type\":\"cusp\",\"start\":{\"x\":8.088379,\"y\":186.113704},\"end\":{\"x\":11.288379,\"y\":172.213704}}},{\"t\":1510,\"v\":{\"x\":24.288379,\"y\":105.813704,\"type\":\"cusp\",\"start\":{\"x\":18.588379,\"y\":130.513704},\"end\":{\"x\":32.188379,\"y\":71.813704}}},{\"t\":2300,\"v\":{\"x\":49.588379,\"y\":2.613704,\"type\":\"cusp\",\"start\":{\"x\":41.288379,\"y\":36.113704},\"end\":{\"x\":58.988379,\"y\":25.713704}}},{\"t\":2840,\"v\":{\"x\":69.188379,\"y\":72.413704,\"type\":\"cusp\",\"start\":{\"x\":68.088379,\"y\":68.113704},\"end\":{\"x\":77.988379,\"y\":106.713704}}},{\"t\":3610,\"v\":{\"x\":85.188379,\"y\":175.313704,\"type\":\"cusp\",\"start\":{\"x\":81.388379,\"y\":140.013704},\"end\":{\"x\":86.088379,\"y\":183.713704}}},{\"t\":3750,\"v\":{\"x\":87.388379,\"y\":194.113704,\"type\":\"cusp\",\"start\":{\"x\":86.088379,\"y\":185.813704}}},{\"t\":3800,\"v\":{\"x\":88.288379,\"y\":200.313704,\"type\":\"cusp\"}}]}},\"opacity\":[{\"t\":800,\"v\":1},{\"t\":4600,\"v\":1},{\"t\":5400,\"v\":0}]}},\"s\":\"MDIA1ZDllNDU4NTzk4Rjk1Szg0YOTdLOGM5MjkWxNDU1ZDViNTJM1MzUzNGY0NUTg3OGM5NTg4GRzg2OTc4YzkQyOTE0NTVkNTUQ0ZjQ1OGNYOGTc4ODk1ODQ5NNzhjOTI5MTkQ2NDU1ZDU0NGIY0NTg5OGM4ZSjhmNDU1ZDU0HNGY0NTg0OGZPFOTc4OEg5NUYs5MTg0OTc4OKFI0NTVkODk4ANDhmOTY4ODRDmNDU5NjkzODEg4ODg3NDVTNCWQ1NDRmNDU4GOTkzTTk2NDUR1ZDU0NTM1M2IEw\"}],\"options\":\"MDOAxODkyMzk4YGThiNzg4OThiLMzk1MTM5ODcY4OVE4NjdlODTk3ODg0ODQ3OBDhiODA3YTM5FOTQ\/\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
