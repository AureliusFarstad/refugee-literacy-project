import SVGatorPlayer from "@svgator/react-native";
// @ts-ignore
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import WebView from "react-native-webview";

const VideoPlayer = forwardRef(
  // @ts-ignore
  ({ onAnimationComplete, svgContent, ...props }, ref) => {
    const webViewRef = useRef(null);
    const [isWebViewReady, setIsWebViewReady] = useState(false);

    // Debug the wrapping process
    console.log("=== WRAPPING DEBUG ===");
    console.log("Raw svgContent type:", typeof svgContent);
    console.log("Raw svgContent length:", svgContent?.length);
    if (typeof svgContent === "string") {
      console.log("Contains <svg>:", svgContent.includes("<svg"));
      console.log(
        "Contains SVGator:",
        svgContent.includes("SVGator") || svgContent.includes("svgator"),
      );
      console.log("First 200 chars:", svgContent.substring(0, 200));
    }

    const wrappedHtml = SVGatorPlayer.wrapPage(svgContent);

    console.log("Wrapped HTML length:", wrappedHtml?.length);
    console.log(
      "Wrapped HTML contains SVGator:",
      wrappedHtml?.includes("SVGator") || wrappedHtml?.includes("svgator"),
    );
    console.log("=== END WRAPPING DEBUG ===");

    // @ts-ignore
    const injectJavaScript = (code) => {
      if (isWebViewReady) {
        // @ts-ignore
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
      }
    };

    useImperativeHandle(ref, () => ({
      play: () => {
        console.log("=== PLAY METHOD CALLED ===");
        injectJavaScript(`
          console.log('--- PLAY DEBUG START ---');
          const svg = document.querySelector('svg');
          
          if (!svg) {
            console.error('SVG element not found');
            console.log('Available elements in body:', document.body.innerHTML.substring(0, 300));
            return;
          }
          
          console.log('SVG found, checking svgatorPlayer...');
          console.log('SVG tagName:', svg.tagName);
          console.log('SVG id:', svg.id);
          console.log('SVG class:', svg.className);
          
          if (!svg.svgatorPlayer) {
            console.error('svgatorPlayer not found on SVG element');
            
            // Check if SVGator is loaded at all
            console.log('Checking for SVGator globally...');
            console.log('window.SVGatorPlayer:', typeof window.SVGatorPlayer);
            console.log('window.SVGator:', typeof window.SVGator);
            
            // List all properties on the SVG element
            console.log('SVG element properties:', Object.getOwnPropertyNames(svg));
            return;
          }
          
          console.log('svgatorPlayer found!');
          console.log('svgatorPlayer object:', svg.svgatorPlayer);
          console.log('svgatorPlayer methods:', Object.getOwnPropertyNames(svg.svgatorPlayer));
          console.log('Current state:', svg.svgatorPlayer.getState ? svg.svgatorPlayer.getState() : 'getState not available');
          console.log('Duration:', svg.svgatorPlayer.getDuration ? svg.svgatorPlayer.getDuration() : 'getDuration not available');
          
          console.log('Calling play()...');
          svg.svgatorPlayer.play();
          
          // Check state after play
          setTimeout(() => {
            console.log('State after play:', svg.svgatorPlayer.getState ? svg.svgatorPlayer.getState() : 'getState not available');
          }, 100);
          
          console.log('--- PLAY DEBUG END ---');
        `);
      },
      pause: () => {
        console.log("=== PAUSE METHOD CALLED ===");
        injectJavaScript(`
          console.log('--- PAUSE DEBUG START ---');
          const svg = document.querySelector('svg');
          
          if (!svg) {
            console.error('SVG element not found');
            return;
          }
          
          if (!svg.svgatorPlayer) {
            console.error('svgatorPlayer not found on SVG element');
            return;
          }
          
          console.log('svgatorPlayer found, calling pause method');
          svg.svgatorPlayer.pause();
          console.log('--- PAUSE DEBUG END ---');
        `);
      },
      restart: () => {
        console.log("=== RESTART METHOD CALLED ===");
        injectJavaScript(`
          console.log('--- PAUSE DEBUG START ---');
          const svg = document.querySelector('svg');
          
          if (!svg) {
            console.error('SVG element not found');
            return;
          }
          
          if (!svg.svgatorPlayer) {
            console.error('svgatorPlayer not found on SVG element');
            return;
          }
          
          console.log('svgatorPlayer found, calling pause method');
          svg.svgatorPlayer.restart();
          console.log('--- PAUSE DEBUG END ---');
        `);
      },
    }));

    // @ts-ignore
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
          console.log('=== SETUP DEBUG START ===');
          console.log('Document ready state:', document.readyState);
          console.log('Document body HTML preview:', document.body.innerHTML.substring(0, 300));
          
          // Wait for DOM to be fully ready and SVGator to initialize
          setTimeout(() => {
            console.log('--- After 1 second delay ---');
            const svg = document.querySelector('svg');
            console.log('SVG element found:', !!svg);
            
            if (svg) {
              console.log('SVG tagName:', svg.tagName);
              console.log('SVG id:', svg.id);
              console.log('SVG class:', svg.className);
              console.log('SVG has svgatorPlayer:', !!svg.svgatorPlayer);
              
              if (svg.svgatorPlayer) {
                console.log('svgatorPlayer object:', svg.svgatorPlayer);
                console.log('svgatorPlayer methods:', Object.getOwnPropertyNames(svg.svgatorPlayer));
                
                // Set up the listener
                console.log('Setting up animation listeners');
                svg.svgatorPlayer.on('end', function() {
                  console.log('*** ANIMATION ENDED ***');
                  window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'animationComplete' }));
                });
                
                // Also try other events for debugging
                svg.svgatorPlayer.on('play', function() {
                  console.log('*** ANIMATION STARTED ***');
                });
                
                svg.svgatorPlayer.on('pause', function() {
                  console.log('*** ANIMATION PAUSED ***');
                });
                
                // Check if there are any other events available
                console.log('Available events on svgatorPlayer:', svg.svgatorPlayer.events || 'events property not found');
              } else {
                // If svgatorPlayer still not found, try waiting longer
                console.log('svgatorPlayer not found, trying again in 2 seconds...');
                setTimeout(() => {
                  const svgRetry = document.querySelector('svg');
                  console.log('Second retry - SVG has svgatorPlayer:', !!svgRetry?.svgatorPlayer);
                  if (svgRetry?.svgatorPlayer) {
                    console.log('Setting up delayed animation listeners');
                    svgRetry.svgatorPlayer.on('end', function() {
                      console.log('*** ANIMATION ENDED (DELAYED SETUP) ***');
                      window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'animationComplete' }));
                    });
                  }
                }, 2000);
              }
            } else {
              console.error('No SVG element found in DOM');
              console.log('Full document body:', document.body.innerHTML);
            }
          }, 1000);
          
          console.log('=== SETUP DEBUG END ===');
        `);
      }

    // Dependency missing: injectJavaScript
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isWebViewReady]);

    const { newProps, styles } = SVGatorPlayer.getWebViewProps(
      props,
      wrappedHtml,
    );

    return (
      // @ts-ignore
      <WebView
        ref={webViewRef}
        {...newProps}
        source={{ html: wrappedHtml }}
        containerStyle={styles.container}
        style={styles.style}
        onMessage={onMessage}
        // @ts-ignore
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error("WebView error: ", nativeEvent);
        }}
        // @ts-ignore
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
            console.log('Window load event fired');
            window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'windowLoaded' }));
          });
          
          // Also listen for DOMContentLoaded
          document.addEventListener('DOMContentLoaded', function() {
            console.log('DOMContentLoaded event fired');
            window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'domReady' }));
          });
          
          true;
        `}
      />
    );
  },
);

export default VideoPlayer;
