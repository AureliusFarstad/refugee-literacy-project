import React from "react";
import {
  Canvas,
  Fill,
  Mask,
  Morphology,
  Path,
  Skia,
} from "@shopify/react-native-skia";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { Alert } from "react-native";

export const App = () => {
  const letterPath = Skia.Path.MakeFromSVGString(
    "m15.1 716.4 129-605.04 71.8 0 129 605.04-62.6 0-38.3-197.52-128 0-38.3 197.52-62.6 0zm217.3-257.88-52.4-285.96-52.7 285.96 105.1 0z"
  )!;
  const drawPath = useSharedValue(Skia.Path.Make());
  const traceCount = useSharedValue(0);

  const showSuccessAlert = () => {
    Alert.alert("Success", "Letter tracing completed successfully!");
  };

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      drawPath.value.moveTo(event.x, event.y);
    })
    .onUpdate((event) => {
      drawPath.value.lineTo(event.x, event.y);
      drawPath.value = drawPath.value;
    })
    .onFinalize(() => {
      traceCount.value += 1;
      if (traceCount.value >= 10) {
        runOnJS(showSuccessAlert)();
      }
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <Canvas style={{ flex: 1 }}>
          <Fill color="#49EDFF" />
          <Path path={letterPath} color="black" strokeWidth={10}>
            <Morphology radius={6} />
          </Path>
          <Path path={letterPath} color="white" strokeWidth={10}>
            <Morphology radius={3} />
          </Path>
          <Mask
            mask={
              <Path
                path={drawPath}
                color="black"
                strokeWidth={100}
                style="stroke"
              />
            }
          >
            <Path path={letterPath} color="#FA00FF" strokeWidth={10} />
          </Mask>
        </Canvas>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default App;
