import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"ekmVvaHRZFU1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-110 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"e8d764fb483347828c96b335637afa61\" export-id=\"8c12ef513ce644368d2a7c87d69a9586\" cached=\"false\"><path d=\"M7.81,105.44c-1.6,28.71-5.41,69.58-1.84,94.48.16-23.68-3.88-65.84,12.72-83.63c10.13-10.86,24.9-10.27,35.94-2.77c13.46,9.15,11.64,23.43,12.32,37.87.8,16.82-.88,32.57-3.55,48.3\" transform=\"translate(4 0)\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\/><g id=\"ekmVvaHRZFU3\" transform=\"matrix(2.108072 0 0 2.108072 2.808073 8.99274)\"><circle style=\"isolation:isolate\" r=\"4.956896\" transform=\"matrix(1.339778 0 0 1.339778 4.270215 45.751406)\" fill=\"#c385f8\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"ekmVvaHRZFU1\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"ekmVvaHRZFU3\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-4.270218,\"y\":-45.751407}},\"keys\":{\"o\":[{\"t\":900,\"v\":{\"x\":11.81,\"y\":105.44,\"type\":\"cusp\",\"end\":{\"x\":10.21,\"y\":134.15}}},{\"t\":2420,\"v\":{\"x\":9.97,\"y\":199.92,\"type\":\"cusp\",\"start\":{\"x\":6.4,\"y\":175.02},\"end\":{\"x\":10.13,\"y\":176.24}}},{\"t\":3810,\"v\":{\"x\":22.69,\"y\":116.29,\"type\":\"cusp\",\"start\":{\"x\":6.09,\"y\":134.08},\"end\":{\"x\":32.82,\"y\":105.43}}},{\"t\":4450,\"v\":{\"x\":58.63,\"y\":113.52,\"type\":\"cusp\",\"start\":{\"x\":47.59,\"y\":106.02},\"end\":{\"x\":72.09,\"y\":122.67}}},{\"t\":5120,\"v\":{\"x\":70.95,\"y\":151.39,\"type\":\"cusp\",\"start\":{\"x\":70.27,\"y\":136.95},\"end\":{\"x\":71.75,\"y\":168.21}}},{\"t\":5900,\"v\":{\"x\":67.4,\"y\":199.69,\"type\":\"cusp\",\"start\":{\"x\":70.07,\"y\":183.96}}}]}}}},\"s\":\"MDNA1ZFNjNDZiYYWRiZUhGYmJhPYWJkYjJiOGIN3NmI4MzdmODABQNzk3OTc1NYmJhZGIyYmJhAZWFjYmRiMmIW4Yjc2YjgzN2QE3NTZiYjJiZPGFlYmJhYWJkOYjJiOGI3YmMR2YjgzTDdhNzUU2YmFmYjJiNOWI1NmI4MzdhTNzU2YklhYWII1YmRhZWJiYjWdhYWJkYWU2YTjgzYWZQYWFiQNWJjYWU3NTZNiYmNiOWFlVGAFlYWQ2YjgzNJ2E3NTZiYWZiSOWJjNmI4MzdHhNzk3OWM2\"}],\"options\":\"MDEAxODgyMjk3YXTdiNjg3OTdiSMjk0MTI5NzcF3OTc2NmVZNzDk2ODc0NzQ2OSDdiNzA2YTI5BODQ\/\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
