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
  A: SVGatorPlayer.wrapPage(
    '<svg id="ewCoTOePmlB1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -100 190 400" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="a150fff500214bd9a6bc0d5ceb409bc4" export-id="65a56270adb04d2ba6ba164fec88e3f2" cached="false"><g transform="translate(.188379-.986296)"><path d="M5.7,201.3c0,0,2.2-14.2,3.2-18.6c2.2-9.5,9.5-51.2,15.2-75.9c7.9-34,17-69.7,25.3-103.2C58.8,26.7,67.9,69.1,69,73.4c8.8,34.3,12.2,67.6,16,102.9.9,8.4.9,10.5,2.2,18.8l.9,6.2" fill="none" stroke="#d9d9d9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="404.55"/><path d="M29.4,100.6c-.6,0-1.1,0-1.7,0c14.9,0,28.9-.2,43.8.2-.4,0-.8,0-1.2,0" fill="none" stroke="#d9d9d9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="46.71"/></g><g transform="translate(.188379-.986293)"><path id="ewCoTOePmlB6" d="M5.7,201.3c0,0,2.2-14.2,3.2-18.6c2.2-9.5,9.5-51.2,15.2-75.9c7.9-34,17-69.7,25.3-103.2C58.8,26.7,67.9,69.1,69,73.4c8.8,34.3,12.2,67.6,16,102.9.9,8.4.9,10.5,2.2,18.8l.9,6.2" fill="none" stroke="#3f3f46" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="404.55"/><path id="ewCoTOePmlB7" d="M29.4,100.6c-.6,0-1.1,0-1.7,0c14.9,0,28.9-.2,43.8.2-.4,0-.8,0-1.2,0" fill="none" stroke="#3f3f46" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="46.71"/></g><g id="ewCoTOePmlB8" transform="matrix(2.108072 0 0 2.108072 80.380032 102.760794)" opacity="0"><path d="M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z" fill="#3f3f46"/><path d="M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z" fill="#3f3f46"/><path d="M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z" fill="#3f3f46"/><path d="M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z" fill="#3f3f46"/><path d="M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z" fill="#3f3f46"/><path d="M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z" fill="#3f3f46"/></g><g id="ewCoTOePmlB15" transform="matrix(2.108072 0 0 2.108072 21.680031 2.060775)" opacity="0"><path d="M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z" fill="#3f3f46"/><path d="M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z" fill="#3f3f46"/><path d="M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z" fill="#3f3f46"/><path d="M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z" fill="#3f3f46"/><path d="M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z" fill="#3f3f46"/><path d="M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z" fill="#3f3f46"/><circle style="isolation:isolate" r="3.369475" transform="matrix(.879898 0 0 0.879898 3.86269 46.275814)" fill="#c385f8"/></g><g id="ewCoTOePmlB23" transform="matrix(2.108072 0 0 2.108072-2.019969 102.760775)" opacity="0"><path d="M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z" fill="#3f3f46"/><path d="M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z" fill="#3f3f46"/><path d="M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z" fill="#3f3f46"/><path d="M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z" fill="#3f3f46"/><path d="M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z" fill="#3f3f46"/><path d="M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z" fill="#3f3f46"/><circle style="isolation:isolate" r="3.369475" transform="matrix(.879898 0 0 0.879898 3.795027 46.224949)" fill="#c385f8"/></g>\r\n<script><![CDATA[\r\n' +
      SVGatorPlayer.getPlayer("91c80d77") +
      '(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll(\'svg#\' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'91c80d77\',{"root":"ewCoTOePmlB1","version":"2022-05-04","animations":[{"elements":{"ewCoTOePmlB6":{"stroke-dashoffset":[{"t":0,"v":0,"e":[1,1]},{"t":100,"v":404.55},{"t":3100,"v":0}]},"ewCoTOePmlB7":{"stroke-dashoffset":[{"t":0,"v":0,"e":[1,1]},{"t":4200,"v":46.71},{"t":5200,"v":0}]},"ewCoTOePmlB8":{"transform":{"data":{"s":{"x":2.108072,"y":2.108072},"t":{"x":-3.75146,"y":-46.2759}},"keys":{"o":[{"t":3100,"v":{"x":88.28838,"y":200.313723,"type":"corner"}},{"t":4200,"v":{"x":29.58838,"y":99.613701,"type":"corner"}}]}},"opacity":[{"t":0,"v":0,"e":[1,0]},{"t":3100,"v":1,"e":[1,0]},{"t":4200,"v":0}]},"ewCoTOePmlB15":{"transform":{"data":{"s":{"x":2.108072,"y":2.108072},"t":{"x":-3.75146,"y":-46.2759}},"keys":{"o":[{"t":4200,"v":{"x":29.588379,"y":99.613704,"type":"cusp","end":{"x":28.988379,"y":99.613704}}},{"t":4240,"v":{"x":27.888379,"y":99.613704,"type":"cusp","start":{"x":28.488379,"y":99.613704},"end":{"x":42.788379,"y":99.613704}}},{"t":5170,"v":{"x":71.688379,"y":99.813704,"type":"cusp","start":{"x":56.788379,"y":99.413704},"end":{"x":71.288379,"y":99.813704}}},{"t":5200,"v":{"x":70.488379,"y":99.813704,"type":"cusp","start":{"x":70.888379,"y":99.813704}}}]}},"opacity":[{"t":0,"v":0,"e":[1,0]},{"t":4200,"v":1}]},"ewCoTOePmlB23":{"transform":{"data":{"s":{"x":2.108072,"y":2.108072},"t":{"x":-3.75146,"y":-46.2759}},"keys":{"o":[{"t":100,"v":{"x":5.888379,"y":200.313704,"type":"cusp","end":{"x":5.888379,"y":200.313704}}},{"t":240,"v":{"x":9.088379,"y":181.713704,"type":"cusp","start":{"x":8.088379,"y":186.113704},"end":{"x":11.288379,"y":172.213704}}},{"t":810,"v":{"x":24.288379,"y":105.813704,"type":"cusp","start":{"x":18.588379,"y":130.513704},"end":{"x":32.188379,"y":71.813704}}},{"t":1600,"v":{"x":49.588379,"y":2.613704,"type":"cusp","start":{"x":41.288379,"y":36.113704},"end":{"x":58.988379,"y":25.713704}}},{"t":2140,"v":{"x":69.188379,"y":72.413704,"type":"cusp","start":{"x":68.088379,"y":68.113704},"end":{"x":77.988379,"y":106.713704}}},{"t":2910,"v":{"x":85.188379,"y":175.313704,"type":"cusp","start":{"x":81.388379,"y":140.013704},"end":{"x":86.088379,"y":183.713704}}},{"t":3050,"v":{"x":87.388379,"y":194.113704,"type":"cusp","start":{"x":86.088379,"y":185.813704}}},{"t":3100,"v":{"x":88.288379,"y":200.313704,"type":"cusp"}}]}},"opacity":[{"t":0,"v":0,"e":[1,1]},{"t":100,"v":1},{"t":3100,"v":1,"e":[1,1]},{"t":5200,"v":0}]}},"s":"MDBA1ZGI4RTVmYJTFiMmFmOWViSMWE2YWNhYjVUmNzc3Mks2ZjUZkNmQ2OTVmYTTFhNmFmYTJhUMGIxYTZhY2FFiNWY3NzZlNjSk1ZmE2YjFhMCmFmOWViMWE2TYWNhYmIwNWYT3NzZlQzY5VTEVmRGEzQWE2YDTlKYTk1Zjc3FNmU2OVE1ZjlBlYTliMWEyV2MFmYWI5ZWIxRVGEyNWZENzdhXMzllYTliMGEPyNjk1ZkFiMGPFkYTJhMmExNJWY3NzZlNjk1PZmEzYWRiMDVCmNzc2ZTZkNmMRiYQ|"}],"options":"MDEAxODgyMjk3YFTdiNjg3OTdiFMjk0MTI5NzcQ3OTc2NmU3OTJY4NzQ3NDY4NN2I3MDZhMjk4ANA|"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n',
  ),
  N: SVGatorPlayer.wrapPage(
    '<svg id="efH7zWIQ4qi1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -100 200 400" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" project-id="1ea293322a7c44159fc16974df61118a" export-id="6d52acedc9ac4e77a4e94c7276c24d6c" cached="false"><path d="M101.4,2.9c2.1,38.6-1.7,81.1-2.1,119.9-.3,23.6.5,54.8-.5,79.1-5.8-13.1-12-23.4-20.6-41.8-9.6-20.5-18.7-38.5-28.9-57.7C33.8,73.1,19.2,34.6,6.6,2.9C5,39.7,5.1,74.1,5.5,111.7c.2,17.1.1,32.1.5,55.3.2,9.3-.5,34.9-.5,34.9" transform="translate(2 0)" fill="none" stroke="#d9d9d9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path id="efH7zWIQ4qi3" d="M101.4,2.9c2.1,38.6-1.7,81.1-2.1,119.9-.3,23.6.5,54.8-.5,79.1-5.8-13.1-12-23.4-20.6-41.8-9.6-20.5-18.7-38.5-28.9-57.7C33.8,73.1,19.2,34.6,6.6,2.9C5,39.7,5.1,74.1,5.5,111.7c.2,17.1.1,32.1.5,55.3.2,9.3-.5,34.9-.5,34.9" transform="translate(2 0)" fill="none" stroke="#3f3f46" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="618"/><g id="efH7zWIQ4qi4" transform="matrix(2.108072 0 0 2.108072 94.202745-93.742592)" opacity="0"><path d="M3.87809,47.8096c-.32,0-.67-.1-.98-.37-.26-.23-.44-.54-.5-.88-.04-.23-.02-.42,0-.52.01-.1.04-.21.06-.27.03-.1.08-.25.14-.42.11-.31.28-.76.48-1.28.4-1.04.95-2.43,1.5-3.83.55-1.39,1.11-2.78,1.53-3.83l.97-2.41.17.06l1.56-1.55L39.9681,1.34961c1.49-1.500001,4.1-1.500001,5.6,0l3.06,3.07c1.54,1.54,1.54,4.06,0,5.59999l-32.57,32.59c0,0-.07.07-.11.11l.05.11-.52.26c0,0-.02.01-.04.02l-.58.25-4.90001,2.05c-5.4,2.26-5.52,2.3-5.57,2.32-.15.05-.32.09-.51.09v-.01Zm4.28-12.47l-.66,1.63c-.42,1.04-.98,2.43-1.53,3.82s-1.1,2.77-1.49,3.81c-.2.51-.36.94-.46,1.25-.05.14-.09.25-.11.34l-.02.11c.09-.03.92-.37,5.51-2.29l5.36001-2.24c0,0,.06-.04.09-.07.04-.04.08-.08.1-.1l.08-.09l32.54-32.54999c.98-.98.98-2.5,0-3.48l-3.06-3.07c-.93-.93-2.55-.93-3.48,0L8.15809,35.3396Z" fill="#3f3f46"/><path d="M13.8881,42.4804c-.1-1.08-.25-2.3401-.36-2.9701-.32-.02-.77-.0399-1.08-.0599-1.31-.06-1.39-.07-1.61-.24-.32-.24-.32-.31-.47-2.19-.02-.27-.04-.54-.06-.75-.64997-.1-1.86997-.2701-2.97998-.4201l.19001-1.4899c3.81997.49,3.83997.52,4.06997.84.16.22.16.27.27,1.7.02.31.05.7.08,1.01.17,0,.37.0199.57.0299c1.48.07,1.71.1001,1.92.2001.4.2.56.28.93,4.18l-1.49.14.02.02Z" fill="#3f3f46"/><path d="M37.346,5.35945L36.2852,6.41992l7.593,7.59568l1.0608-1.0605-7.593-7.59565Z" fill="#3f3f46"/><path d="M38.7778,7.44873L10.8047,35.4219l1.0606,1.0606L39.8385,8.50939L38.7778,7.44873Z" fill="#3f3f46"/><path d="M40.727,10.6909L12.7539,38.6641l1.0607,1.0606L41.7877,11.7516L40.727,10.6909Z" fill="#3f3f46"/><path d="M7.63813,45.15c0,0-.33-1.15-1.04-1.77-.74-.65-1.76001-.93-1.77001-.93L5.20813,41c.06.01,1.36.36,2.38,1.25c1.05.92,1.47,2.44,1.48999,2.5l-1.44999.4h.01Z" fill="#3f3f46"/><circle style="isolation:isolate" r="2.21301" transform="matrix(1.339778 0 0 1.339778 4.362875 45.844065)" fill="#c385f8"/></g>\r\n<script><![CDATA[\r\n' +
      SVGatorPlayer.getPlayer("91c80d77") +
      '(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll(\'svg#\' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})(\'91c80d77\',{"root":"efH7zWIQ4qi1","version":"2022-05-04","animations":[{"elements":{"efH7zWIQ4qi3":{"stroke-dashoffset":[{"t":0,"v":0,"e":[1,1]},{"t":100,"v":618},{"t":5100,"v":0}]},"efH7zWIQ4qi4":{"transform":{"data":{"s":{"x":2.108072,"y":2.108072},"t":{"x":-4.362875,"y":-45.844066}},"keys":{"o":[{"t":100,"v":{"x":103.4,"y":2.9,"type":"cusp","end":{"x":105.5,"y":41.5}}},{"t":1070,"v":{"x":101.3,"y":122.8,"type":"cusp","start":{"x":101.7,"y":84},"end":{"x":101,"y":146.4}}},{"t":1710,"v":{"x":100.8,"y":201.9,"type":"cusp","start":{"x":101.8,"y":177.6},"end":{"x":95,"y":188.8}}},{"t":2090,"v":{"x":80.2,"y":160.1,"type":"cusp","start":{"x":88.8,"y":178.5},"end":{"x":70.6,"y":139.6}}},{"t":2610,"v":{"x":51.3,"y":102.4,"type":"cusp","start":{"x":61.5,"y":121.6},"end":{"x":35.8,"y":73.1}}},{"t":3490,"v":{"x":8.6,"y":2.9,"type":"cusp","start":{"x":21.2,"y":34.6},"end":{"x":7,"y":39.7}}},{"t":4370,"v":{"x":7.5,"y":111.7,"type":"cusp","start":{"x":7.1,"y":74.1},"end":{"x":7.7,"y":128.8}}},{"t":4820,"v":{"x":8,"y":167,"type":"cusp","start":{"x":7.6,"y":143.8},"end":{"x":8.2,"y":176.3}}},{"t":5100,"v":{"x":7.5,"y":201.9,"type":"cusp","start":{"x":7.5,"y":201.9}}}]}},"opacity":[{"t":0,"v":0},{"t":100,"v":1}]}},"s":"MDSA1ZDk4M2Y4MDTkyOGY3ZTkxPODY4YzhiM2YO1NzUyNGU0ZDIRkNDlKM2Y4METg2OGY4MjgwYOTE4NjhjOGIBzZko1N0c0ZTLQ5M2Y4NjkxOGDI4ZjdlOTE4ENjhjOGI5MEEWzZjU3NGRKNDLkzZjgzODY4OYTg5M2Y1NzRlDNDlTM2Y3ZTgU5OTE4MkVROGBY4YjdlOTFWOIDIzZjU3ODM3RZTg5OTA4MkoI0OTNmRzkwOGUQ4MjgyODEzZHjU3NGU0OTNmXODNPOGRPOTBGGM2Y1NzRlNGEQ0ZDlh"}],"options":"MDYAxODkyMzk4YCThiNzg4OThiFMzk1MTM5QzgH3ODk4NjdlSjFg5Nzg4NDg0NDzg4YjgwN2EzKOU85NA|"},\'__SVGATOR_PLAYER__\',window,document)\r\n]]></script>\r\n</svg>\r\n',
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
