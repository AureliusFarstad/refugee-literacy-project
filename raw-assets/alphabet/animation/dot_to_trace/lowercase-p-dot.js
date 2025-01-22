import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"ezLEo6qnJj81\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-100 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"f6178afd5d3b438b840dac0f9307b178\" export-id=\"558771b55d1243e7ba60e9ada084e4dd\" cached=\"false\"><g transform=\"translate(5.169911-2.510002)\"><path d=\"M13.47,99.76c-.25.86-4.02,85.17-4.72,97.5-1.5,26.66-3.73,80.56-3.73,100\" transform=\"translate(0-16.107408)\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><path d=\"M14.82,120.39c6.15-3.27,23.82-19.28,47.51-15.18c9.06,1.57,31.01,25.54,18.6,65.24C67.1,214.68,10.2,184.54,10.2,184.54\" transform=\"translate(0-16.107407)\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><\/g><g id=\"ezLEo6qnJj85\" transform=\"matrix(2.108072 0 0 2.108072 12.081563 20.327069)\" opacity=\"0\"><circle style=\"isolation:isolate\" r=\"7.547624\" transform=\"matrix(.879898 0 0 0.879898 3.86269 38.356732)\" fill=\"#c385f8\"\/><\/g><g id=\"ezLEo6qnJj87\" transform=\"matrix(2.108072 0 0 2.108072 10.731563-.302931)\"><circle style=\"isolation:isolate\" r=\"7.547625\" transform=\"matrix(.879898 0 0 0.879898 3.795027 38.305867)\" fill=\"#c385f8\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"ezLEo6qnJj81\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"ezLEo6qnJj85\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":6700,\"v\":{\"x\":19.989911,\"y\":117.879998,\"type\":\"cusp\",\"end\":{\"x\":26.139911,\"y\":114.609998}}},{\"t\":7310,\"v\":{\"x\":67.499911,\"y\":102.699998,\"type\":\"cusp\",\"start\":{\"x\":43.809911,\"y\":98.599998},\"end\":{\"x\":76.559911,\"y\":104.269998}}},{\"t\":8200,\"v\":{\"x\":86.099911,\"y\":167.939998,\"type\":\"cusp\",\"start\":{\"x\":98.509911,\"y\":128.239998},\"end\":{\"x\":72.269911,\"y\":212.169998}}},{\"t\":9200,\"v\":{\"x\":15.369911,\"y\":182.029998,\"type\":\"cusp\",\"start\":{\"x\":15.369911,\"y\":182.029998}}}]}},\"opacity\":[{\"t\":5100,\"v\":0},{\"t\":6000,\"v\":1}]},\"ezLEo6qnJj87\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":800,\"v\":{\"x\":18.639911,\"y\":97.249998,\"type\":\"cusp\",\"end\":{\"x\":18.389911,\"y\":98.109998}}},{\"t\":2030,\"v\":{\"x\":13.919911,\"y\":194.749998,\"type\":\"cusp\",\"start\":{\"x\":14.619911,\"y\":182.419998},\"end\":{\"x\":12.419911,\"y\":221.409998}}},{\"t\":3300,\"v\":{\"x\":10.189911,\"y\":294.749998,\"type\":\"cusp\",\"start\":{\"x\":10.189911,\"y\":275.309998}}}]}},\"opacity\":[{\"t\":4100,\"v\":1},{\"t\":4900,\"v\":0}]}},\"s\":\"MDLA1ZVJhYTUxOYTNhNFhhMTkwHYTM5ODllOWQJ1MTY5NjA1ZjJVmNWY1ZjViNGTE5Mzk4YTFFWOTQ5MmEzUjkK4OWU5ZDUxNjPk2MDViNTE5OFGEzOTRhMTkwBYTM5ODllOWRGhMjUxNjk2MDLViNTFZOTU5OJDliOWI1MTY5FNjBNNWI1MTkSwOWJhMzk0YTYE5ZDkwYTM5NQEw1MTY5OTU5BMDliYTI5NDVFiNTFhMjlmOTRRROTQ5MzUxNGjk2MDViNTE5ENTlmYTI1MTYB5NjA1ZjVmYWTM\/\"}],\"options\":\"MDCAxODgyMjk3YCTdiNjg3OTdiPMjk0MTI5NzcK3OTc2NmU3OTSY4NzQ3NDY4NI2JJNzA2YTI5TODQ\/\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
