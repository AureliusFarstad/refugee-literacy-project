import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"e31OuMW9XCb1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"-100 -100 300 400\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" project-id=\"bb537b34fdbd4b4cb8518f1d4971935f\" export-id=\"e719e20892d54de4a99c8cd750e3bb1a\" cached=\"false\"><g transform=\"translate(14.465002 0.107511)\"><path d=\"M39.42,2.7c-.5,28.13-3.7,73.39-5.16,97.09-4.86,78.79-5.96,95.23,3.77,97.13c6.41,1.25,19.01-4.85,22.31-9.97\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><path d=\"M4.48,97.7c22.18-.65,39.93,5.31,62.11,3.27\" fill=\"none\" stroke=\"#d9d9d9\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\/><\/g><g transform=\"translate(14.465002 0.107511)\"><path id=\"e31OuMW9XCb6\" d=\"M39.42,2.7c-.5,28.13-3.7,73.39-5.16,97.09-4.86,78.79-5.96,95.23,3.77,97.13c6.41,1.25,19.01-4.85,22.31-9.97\" fill=\"none\" stroke=\"#3f3f46\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-dasharray=\"223\"\/><path id=\"e31OuMW9XCb7\" d=\"M4.48,97.7c22.18-.65,39.93,5.31,62.11,3.27\" fill=\"none\" stroke=\"#3f3f46\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-dasharray=\"63\"\/><\/g><g id=\"e31OuMW9XCb8\" transform=\"matrix(2.108072 0 0 2.108072 66.896654 89.504601)\" opacity=\"0\"><path d=\"M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z\" fill=\"#3f3f46\"\/><path d=\"M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z\" fill=\"#3f3f46\"\/><path d=\"M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z\" fill=\"#3f3f46\"\/><path d=\"M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z\" fill=\"#3f3f46\"\/><path d=\"M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z\" fill=\"#3f3f46\"\/><path d=\"M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z\" fill=\"#3f3f46\"\/><\/g><g id=\"e31OuMW9XCb15\" transform=\"matrix(2.108072 0 0 2.108072 11.036654 0.254582)\" opacity=\"0\"><path d=\"M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z\" fill=\"#3f3f46\"\/><path d=\"M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z\" fill=\"#3f3f46\"\/><path d=\"M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z\" fill=\"#3f3f46\"\/><path d=\"M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z\" fill=\"#3f3f46\"\/><path d=\"M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z\" fill=\"#3f3f46\"\/><path d=\"M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z\" fill=\"#3f3f46\"\/><circle style=\"isolation:isolate\" r=\"3.369475\" transform=\"matrix(.879898 0 0 0.879898 3.86269 46.275814)\" fill=\"#c385f8\"\/><\/g><g id=\"e31OuMW9XCb23\" transform=\"matrix(2.108072 0 0 2.108072 45.976654-94.745418)\" opacity=\"0\"><path d=\"M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z\" fill=\"#3f3f46\"\/><path d=\"M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z\" fill=\"#3f3f46\"\/><path d=\"M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z\" fill=\"#3f3f46\"\/><path d=\"M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z\" fill=\"#3f3f46\"\/><path d=\"M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z\" fill=\"#3f3f46\"\/><path d=\"M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z\" fill=\"#3f3f46\"\/><circle style=\"isolation:isolate\" r=\"3.369475\" transform=\"matrix(.879898 0 0 0.879898 3.795027 46.224949)\" fill=\"#c385f8\"\/><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"e31OuMW9XCb1\",\"version\":\"2024-09-05\",\"animations\":[{\"elements\":{\"e31OuMW9XCb6\":{\"stroke-dashoffset\":[{\"t\":0,\"v\":0,\"e\":[1,1]},{\"t\":100,\"v\":223},{\"t\":2600,\"v\":0}]},\"e31OuMW9XCb7\":{\"stroke-dashoffset\":[{\"t\":0,\"v\":0,\"e\":[1,1]},{\"t\":100,\"v\":63},{\"t\":3800,\"v\":63},{\"t\":5100,\"v\":0}]},\"e31OuMW9XCb8\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":2600,\"v\":{\"x\":74.805002,\"y\":187.05753,\"type\":\"corner\"}},{\"t\":3800,\"v\":{\"x\":18.946528,\"y\":97.807513,\"type\":\"corner\"}}]}},\"opacity\":[{\"t\":0,\"v\":0,\"e\":[1,0]},{\"t\":2600,\"v\":1,\"e\":[1,0]},{\"t\":3800,\"v\":0}]},\"e31OuMW9XCb15\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":3800,\"v\":{\"x\":18.945002,\"y\":97.807511,\"type\":\"cusp\",\"end\":{\"x\":41.125002,\"y\":97.157511}}},{\"t\":5100,\"v\":{\"x\":81.055002,\"y\":101.077511,\"type\":\"cusp\",\"start\":{\"x\":58.875002,\"y\":103.117511}}}]}},\"opacity\":[{\"t\":0,\"v\":0,\"e\":[1,0]},{\"t\":3800,\"v\":1}]},\"e31OuMW9XCb23\":{\"transform\":{\"data\":{\"s\":{\"x\":2.108072,\"y\":2.108072},\"t\":{\"x\":-3.75146,\"y\":-46.2759}},\"keys\":{\"o\":[{\"t\":100,\"v\":{\"x\":53.885002,\"y\":2.807511,\"type\":\"cusp\",\"end\":{\"x\":53.385002,\"y\":30.937511}}},{\"t\":1190,\"v\":{\"x\":48.725002,\"y\":99.897511,\"type\":\"cusp\",\"start\":{\"x\":50.185002,\"y\":76.197511},\"end\":{\"x\":43.865002,\"y\":178.687511}}},{\"t\":2320,\"v\":{\"x\":52.495002,\"y\":197.027511,\"type\":\"cusp\",\"start\":{\"x\":42.765002,\"y\":195.127511},\"end\":{\"x\":58.905002,\"y\":198.277511}}},{\"t\":2600,\"v\":{\"x\":74.805002,\"y\":187.057511,\"type\":\"cusp\",\"start\":{\"x\":71.505002,\"y\":192.177511}}}]}},\"opacity\":[{\"t\":0,\"v\":0,\"e\":[1,1]},{\"t\":100,\"v\":1},{\"t\":2600,\"v\":1,\"e\":[1,1]},{\"t\":5100,\"v\":0}]}},\"s\":\"MDKA1ZGFiNTI5NDGE1YTI5MWE0CTzk5OWZTOWUP1MlI2YTY1NjYE2MDYwNWM1MHjk0OTlhMjk1TOTNhNDk5OWYP5ZTUyNmE2MTOVjNTJSOTlhNPDk1YTI5MWE0JTjk5OWY5ZWEWzNTJCNmE2MTJVjNTI5Njk5OHWM5YzUyNmE2EMTVjNTI5MTlKjYTRJOTVhMlSBFOWU5MWE0OJTU1MjZhOTY5WMVE5Y2EzOTUK1Y0E1MmEzS2SEwOTU5NTk0NFTI2YTYxNWM1OMjk2YTBhMzUHyNmFBNjE2MDOYwTGFk\"}],\"options\":\"MDRAxODhhMzE4MXjgzUTcwODE4LMzMxNDkzMTdMmODE3ZTc2ODWE3MDdjN2M3MKDgzNzg3MjMxVOGM\/\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n<\/svg>\r\n");
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
