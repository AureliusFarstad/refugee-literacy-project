/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import SVGatorPlayer from "@svgator/react-native";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import WebView from "react-native-webview";

const letterSVGMap = {
  a: SVGatorPlayer.wrapPage(
    '<svg id="euHb5DvonMN1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -100 192 400" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="e84dc92ad0ef4658a7e7a6a37fb088eb" export-id="b14cacff9da24e6f9dccd5e4bc8ff6a9" cached="false"><path d="M64.59,117.5c-17-12.45-24.2-13.48-35.46-7.24-11.47,6.35-21.36,24.82-23.87,43.77-1.79,13.46,1.37,29.19,13.64,36.95c11.83,7.48,26.58,1.35,31-3.88c7.91-9.37,13.65-17,14.56-29.23.91-12.22,1.33-24.46.47-36.69-.35-5.01-.7-10.01-1.06-15.02.69,18.16,1.38,36.32,2.07,54.48.32,8.56.79,17.58,5.4,24.8s14.92,11.55,22.04,6.78" transform="translate(2 0.879202)" fill="none" stroke="#d9d9d9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="356.38"/><path id="euHb5DvonMN3" d="M64.59,117.5c-17-12.45-24.2-13.48-35.46-7.24-11.47,6.35-21.36,24.82-23.87,43.77-1.79,13.46,1.37,29.19,13.64,36.95c11.83,7.48,26.58,1.35,31-3.88c7.91-9.37,13.65-17,14.56-29.23.91-12.22,1.33-24.46.47-36.69-.35-5.01-.7-10.01-1.06-15.02.69,18.16,1.38,36.32,2.07,54.48.32,8.56.79,17.58,5.4,24.8s14.92,11.55,22.04,6.78" transform="translate(2 0.879202)" fill="none" stroke="#3f3f46" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="356.38"/><g id="euHb5DvonMN4" transform="matrix(2.108072 0 0 2.108072 57.588073 21.931942)" opacity="0"><path d="M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z" fill="#3f3f46"/><path d="M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z" fill="#3f3f46"/><path d="M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z" fill="#3f3f46"/><path d="M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z" fill="#3f3f46"/><path d="M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z" fill="#3f3f46"/><path d="M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z" fill="#3f3f46"/><circle style="isolation:isolate" r="2.21301" transform="matrix(1.339778 0 0 1.339778 4.362875 45.844065)" fill="#c385f8"/></g>\r\n<script><![CDATA[\r\n' +
      SVGatorPlayer.getPlayer("91c80d77") +
      '(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll(\'svg#\' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'91c80d77\',{"root":"euHb5DvonMN1","version":"2022-05-04","animations":[{"elements":{"euHb5DvonMN3":{"stroke-dashoffset":[{"t":0,"v":0,"e":[1,1]},{"t":100,"v":356.38},{"t":5100,"v":0}]},"euHb5DvonMN4":{"transform":{"data":{"s":{"x":2.108072,"y":2.108072},"t":{"x":-4.270218,"y":-45.751407}},"keys":{"o":[{"t":100,"v":{"x":66.59,"y":118.379202,"type":"cusp","end":{"x":49.59,"y":105.929202}}},{"t":650,"v":{"x":31.13,"y":111.139202,"type":"cusp","start":{"x":42.39,"y":104.899202},"end":{"x":19.66,"y":117.489202}}},{"t":1370,"v":{"x":7.26,"y":154.909202,"type":"cusp","start":{"x":9.77,"y":135.959202},"end":{"x":5.47,"y":168.369202}}},{"t":1950,"v":{"x":20.9,"y":191.859202,"type":"cusp","start":{"x":8.63,"y":184.099202},"end":{"x":32.73,"y":199.339202}}},{"t":2420,"v":{"x":51.9,"y":187.979202,"type":"cusp","start":{"x":47.48,"y":193.209202},"end":{"x":59.81,"y":178.609202}}},{"t":2890,"v":{"x":66.46,"y":158.749202,"type":"cusp","start":{"x":65.55,"y":170.979202},"end":{"x":67.37,"y":146.529202}}},{"t":3410,"v":{"x":66.93,"y":122.059202,"type":"cusp","start":{"x":67.79,"y":134.289202},"end":{"x":66.58,"y":117.049202}}},{"t":3620,"v":{"x":65.87,"y":107.039202,"type":"cusp","start":{"x":66.23,"y":112.049202},"end":{"x":66.56,"y":125.199202}}},{"t":4380,"v":{"x":67.94,"y":161.519202,"type":"cusp","start":{"x":67.25,"y":143.359202},"end":{"x":68.26,"y":170.079202}}},{"t":4740,"v":{"x":73.34,"y":186.319202,"type":"cusp","start":{"x":68.73,"y":179.099202},"end":{"x":77.95,"y":193.539202}}},{"t":5100,"v":{"x":95.38,"y":193.099202,"type":"cusp","start":{"x":88.26,"y":197.869202}}}]}},"opacity":[{"t":0,"v":0,"e":[1,1]},{"t":100,"v":1},{"t":5100,"v":1}]}},"s":"MDVA1ZDhjMzM3NGTg2ODM3MkQ4PNTdhODA3ZjMLzSDRiNDZXNDHI0MTQxM2QzMSzc1N2E4Mzc2BNzQ4NTdhODAN3ZjMzNGI0MjGNkMzM3YTg1NQzY4MzcyODU3CYTgwN2Y4NEsFzMzRiNDIzZDJMzNzc3YTdkNJ2RDSzMzNGI0FMjNkMzNLNzIM3ZE04NTc2ODTM3ZjcyODU3NUjMzNGI3NzcyCN2RCTDg0NzYQzZE4zMzg0STJgxNzY3Njc1MHzNNNGI0MjNkGMzM3NzgxODQXzMzRiNDI0MTGQxOGU/"}],"options":"MDGAxODkyMzk4YTUs4Ykg3ODg5XOGIzOTUxMzkE4Nzg5ODY3ZUJg4OUo3ODg0ONDQ3ODhiODBNCN2EzOTk0"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n',
  ),
  n: SVGatorPlayer.wrapPage(
    '<svg id="ekcCBdi1ADu1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -100 164 400" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="3ac4f83ab2b34d6aaaea667a6f32aa5e" export-id="76079a4c9bfa430bb603cc5e5b029346" cached="false"><path d="M7.81,105.44c-1.6,28.71-5.41,69.58-1.84,94.48.16-23.68-3.88-65.84,12.72-83.63c10.13-10.86,24.9-10.27,35.94-2.77c13.46,9.15,11.64,23.43,12.32,37.87.8,16.82-.88,32.57-3.55,48.3" transform="translate(4 0)" fill="none" stroke="#d9d9d9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path id="ekcCBdi1ADu3" d="M7.81,105.44c-1.6,28.71-5.41,69.58-1.84,94.48.16-23.68-3.88-65.84,12.72-83.63c10.13-10.86,24.9-10.27,35.94-2.77c13.46,9.15,11.64,23.43,12.32,37.87.8,16.82-.88,32.57-3.55,48.3" transform="translate(4 0)" fill="none" stroke="#3f3f46" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="312"/><g id="ekcCBdi1ADu4" transform="matrix(2.108072 0 0 2.108072 2.808073 8.99274)" opacity="0"><path d="M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z" fill="#3f3f46"/><path d="M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z" fill="#3f3f46"/><path d="M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z" fill="#3f3f46"/><path d="M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z" fill="#3f3f46"/><path d="M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z" fill="#3f3f46"/><path d="M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z" fill="#3f3f46"/><circle style="isolation:isolate" r="2.21301" transform="matrix(1.339778 0 0 1.339778 4.362875 45.844065)" fill="#c385f8"/></g>\r\n<script><![CDATA[\r\n' +
      SVGatorPlayer.getPlayer("91c80d77") +
      '(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll(\'svg#\' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'91c80d77\',{"root":"ekcCBdi1ADu1","version":"2022-05-04","animations":[{"elements":{"ekcCBdi1ADu3":{"stroke-dashoffset":[{"t":0,"v":0,"e":[1,1]},{"t":100,"v":312},{"t":5100,"v":0}]},"ekcCBdi1ADu4":{"transform":{"data":{"s":{"x":2.108072,"y":2.108072},"t":{"x":-4.270218,"y":-45.751407}},"keys":{"o":[{"t":100,"v":{"x":11.81,"y":105.44,"type":"cusp","end":{"x":10.21,"y":134.15}}},{"t":1620,"v":{"x":9.97,"y":199.92,"type":"cusp","start":{"x":6.4,"y":175.02},"end":{"x":10.13,"y":176.24}}},{"t":3010,"v":{"x":22.69,"y":116.29,"type":"cusp","start":{"x":6.09,"y":134.08},"end":{"x":32.82,"y":105.43}}},{"t":3650,"v":{"x":58.63,"y":113.52,"type":"cusp","start":{"x":47.59,"y":106.02},"end":{"x":72.09,"y":122.67}}},{"t":4320,"v":{"x":70.95,"y":151.39,"type":"cusp","start":{"x":70.27,"y":136.95},"end":{"x":71.75,"y":168.21}}},{"t":5100,"v":{"x":67.4,"y":199.69,"type":"cusp","start":{"x":70.07,"y":183.96}}}]}},"opacity":[{"t":0,"v":0},{"t":100,"v":1}]}},"s":"MDNA1ZGI3NWVhMWGIxYWU5ZGIwUYTVhYlRhYTVJlUDc2NzE2ZDYZjQzZjNjg1ZAWEwYTVhZWExLOWZiMGE1RmFAiYWE1ZTc2NmGQ2ODVlT2E1YLjBhMU1hZTlkLR2IwYTVhYmFPhYWY1ZTc2NmPRJNjg1ZU5hMUmE1YThhODVlJRDc2NmQ2ODVSlOWRhOGIwUGUExYWVhYTlkYBjBhMTVlNzZhFMjlkYThhZmENxNjhWNWVhZmBFjYTFhMWEwNXWU3NjZkUDY4PTTVlYTJhY2FSmNWU3NjZkNmCM2Y2I5"}],"options":"MDJAxODhhMzE4MKjgzNzA4MTgzMMzE0OTMxUDdKmODE3ZTc2ODLE3MDdjN2M3MCFE4Mzc4NzIzBMThj"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n',
  ),
};

const SVGatorLetterComponent = forwardRef(
  ({ onAnimationComplete, letter, ...props }, ref) => {
    const webViewRef = useRef(null);
    const [isWebViewReady, setIsWebViewReady] = useState(false);

    const svgContent = letterSVGMap[letter] || "<svg></svg>"; // Default to empty SVG if letter not found
    const wrappedHtml = SVGatorPlayer.wrapPage(svgContent);

    const injectJavaScript = (code) => {
      if (isWebViewReady) {
        webViewRef.current?.injectJavaScript(`
          (function() {
            try {
              ${code}
            } catch (error) {
              console.error('Error in injected JavaScript:', error);
            }
          })();
          true;
        `);
      } else {
        console.warn("WebView is not ready. Skipping JavaScript injection.");
      }
    };

    useImperativeHandle(ref, () => ({
      play: () => {
        console.log("Play method called");
        injectJavaScript(`
          console.log('Attempting to find SVG element');
          const svg = document.querySelector('svg');
          if (!svg) {
            console.error('SVG element not found');
            return;
          }
          console.log('SVG element found, checking for svgatorPlayer');
          if (!svg.svgatorPlayer) {
            console.error('svgatorPlayer not found on SVG element');
            return;
          }
          console.log('svgatorPlayer found, calling play method');
          svg.svgatorPlayer.play();
        `);
      },
    }));

    const onMessage = (event) => {
      console.log("Message received:", event.nativeEvent.data);
      try {
        const data = JSON.parse(event.nativeEvent.data);
        if (data.event === "animationComplete") {
          console.log("Animation complete event received");
          onAnimationComplete && onAnimationComplete();
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    useEffect(() => {
      if (isWebViewReady) {
        console.log("WebView is ready, setting up animation");
        injectJavaScript(`
          console.log('Setup code running');
          const svg = document.querySelector('svg');
          if (!svg) {
            console.error('SVG element not found during setup');
            return;
          }
          if (!svg.svgatorPlayer) {
            console.error('svgatorPlayer not found on SVG element during setup');
            return;
          }
          console.log('Setting up animation listeners');
          svg.svgatorPlayer.on('end', function() {
            console.log('Animation ended, sending message');
            window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'animationComplete' }));
          });
        `);
      }
    }, [isWebViewReady]);

    const { newProps, styles } = SVGatorPlayer.getWebViewProps(
      props,
      wrappedHtml,
    );

    return (
      <WebView
        ref={webViewRef}
        {...newProps}
        source={{ html: wrappedHtml }}
        containerStyle={styles.container}
        style={styles.style}
        onMessage={onMessage}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error("WebView error: ", nativeEvent);
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error("WebView HTTP error: ", nativeEvent);
        }}
        onLoadEnd={() => {
          console.log("WebView content loaded");
          setIsWebViewReady(true);
        }}
        injectedJavaScript={`
          window.addEventListener('load', function() {
            window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'windowLoaded' }));
          });
          true;
        `}
      />
    );
  },
);

export default SVGatorLetterComponent;
