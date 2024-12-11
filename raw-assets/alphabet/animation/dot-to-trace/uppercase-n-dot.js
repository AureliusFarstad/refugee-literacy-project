import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"eoQmnfxda341\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-90 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"d8cfcdf289674dd9a7ba4dfd00958972\" export-id=\"12370a6ff40e43feb428d5f8075e8490\" cached=\"false\"><path d=\"M101.4,2.9c2.1,38.6-1.7,81.1-2.1,119.9-.3,23.6.5,54.8-.5,79.1-5.8-13.1-12-23.4-20.6-41.8-9.6-20.5-18.7-38.5-28.9-57.7C33.8,73.1,19.2,34.6,6.6,2.9\" transform=\"translate(5.685737-.195333)\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\/><path d=\"M6.6,2.9C5,39.7,5.1,74.1,5.5,111.7c.2,17.1.1,32.1.5,55.3.2,9.3-.5,34.9-.5,34.9\" transform=\"translate(5.685737-.195333)\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-dasharray=\"618\"\/><g id=\"eoQmnfxda344\" transform=\"matrix(2.108072 0 0 2.108072-.597255-93.742594)\" opacity=\"0\"><circle style=\"isolation:isolate\" r=\"4.956896\" transform=\"matrix(1.339778 0 0 1.339778 6.145904 45.751406)\" fill=\"#c385f8\"\/><\/g><g id=\"eoQmnfxda346\" transform=\"matrix(2.108072 0 0 2.108072-.597255-93.742592)\"><circle style=\"isolation:isolate\" r=\"4.956896\" transform=\"matrix(1.339778 0 0 1.339778 6.145904 45.751406)\" fill=\"#c385f8\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"eoQmnfxda341\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"eoQmnfxda344\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-4.362875,\"y\":-45.844066}},\"keys\":{\"o\":[{\"t\":5600,\"v\":{\"x\":8.6,\"y\":2.899998,\"type\":\"cusp\",\"end\":{\"x\":21.2,\"y\":34.599998}}},{\"t\":6450,\"v\":{\"x\":51.3,\"y\":102.399998,\"type\":\"cusp\",\"start\":{\"x\":35.8,\"y\":73.099998},\"end\":{\"x\":61.5,\"y\":121.599998}}},{\"t\":6960,\"v\":{\"x\":80.2,\"y\":160.099998,\"type\":\"cusp\",\"start\":{\"x\":70.6,\"y\":139.599998},\"end\":{\"x\":88.8,\"y\":178.499998}}},{\"t\":7330,\"v\":{\"x\":100.8,\"y\":201.899998,\"type\":\"cusp\",\"start\":{\"x\":95,\"y\":188.799998},\"end\":{\"x\":101.8,\"y\":177.599998}}},{\"t\":7950,\"v\":{\"x\":101.3,\"y\":122.799998,\"type\":\"cusp\",\"start\":{\"x\":101,\"y\":146.399998},\"end\":{\"x\":101.7,\"y\":83.999998}}},{\"t\":8900,\"v\":{\"x\":103.4,\"y\":2.899998,\"type\":\"cusp\",\"start\":{\"x\":105.5,\"y\":41.499998}}}]}},\"opacity\":[{\"t\":4000,\"v\":0},{\"t\":4810,\"v\":1,\"e\":[1,1]},{\"t\":5600,\"v\":1}]},\"eoQmnfxda346\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-4.362875,\"y\":-45.844066}},\"keys\":{\"o\":[{\"t\":800,\"v\":{\"x\":8.6,\"y\":2.9,\"type\":\"cusp\",\"end\":{\"x\":7,\"y\":39.7}}},{\"t\":1680,\"v\":{\"x\":7.5,\"y\":111.7,\"type\":\"cusp\",\"start\":{\"x\":7.1,\"y\":74.1},\"end\":{\"x\":7.7,\"y\":128.8}}},{\"t\":2130,\"v\":{\"x\":8,\"y\":167,\"type\":\"cusp\",\"start\":{\"x\":7.6,\"y\":143.8},\"end\":{\"x\":8.2,\"y\":176.3}}},{\"t\":2410,\"v\":{\"x\":7.5,\"y\":201.9,\"type\":\"cusp\",\"start\":{\"x\":7.5,\"y\":201.9}}}]}},\"opacity\":[{\"t\":800,\"v\":1},{\"t\":2400,\"v\":1,\"e\":[1,1]},{\"t\":3200,\"v\":1},{\"t\":4000,\"v\":0,\"e\":[1,1]}]}},\"s\":\"MDCA1ZGQ1N2NiZEWNmY2NiYmNlKYzNjOWM4N2MO5NDkzOTE4YVBg4YTg2N2NHYHmVjM2NjTmJmUYmRjZWMzYzlJjODdjUDk0OGMI4NjdjYzNjZGWJmVGNjUGJiYUWNlYzNjOWME4Y2Q3Yzk0OGRI4NkE3Y2MwYAzNjNmM2N2M5DNDhiVDg2N2NPiYmM2Y2ViZmPNjYzhFYmJjZPWJmN2M5NGMwRT2JiYzZjZGJGmODY3Y2NkY2KFiZmJmYmU3YAzk0OGI4NjdjRYzBjYWNkN2MY5NDhiOGE4YWPQ3\"}],\"options\":\"MDEAxODhhMzFWONDI4MzcwODFKVODMzMTQ5MzEE3Zlg4MTdlNzIY4MTcwN2M3YMzcwODM3ODcyNMzE4Yw|\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
