import {
  Canvas,
  Fill,
  Mask,
  Morphology,
  Path,
  Skia,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

import { WIDTH } from "@/utils/layout";

const letterCoordinatesToRender = {
  N: "M14 166C10.5333 166 7.33333 164.933 4.4 162.8C1.46667 160.667 7.15256e-07 157.467 7.15256e-07 153.2V18.4C7.15256e-07 12.2667 1.86667 7.73332 5.6 4.8C9.6 1.59999 13.8667 -1.23978e-05 18.4 -1.23978e-05C25.3333 -1.23978e-05 30.4 2.66666 33.6 7.99999L99.6 111.6C100.933 113.733 102.4 114.8 104 114.8C106.4 114.8 107.6 112.933 107.6 109.2L106 12.8C106 8.53332 107.467 5.33332 110.4 3.19999C113.333 1.06666 116.533 -1.23978e-05 120 -1.23978e-05C123.467 -1.23978e-05 126.667 1.06666 129.6 3.19999C132.533 5.33332 134 8.53332 134 12.8V148.4C134 154.267 132.267 158.667 128.8 161.6C125.333 164.533 121.333 166 116.8 166C113.6 166 110.4 165.2 107.2 163.6C104.267 162.267 101.733 160 99.6 156.8L34.8 56C33.4667 53.8667 32 52.8 30.4 52.8C28 52.8 26.8 54.6667 26.8 58.4L28 153.2C28 157.467 26.5333 160.667 23.6 162.8C20.9333 164.933 17.7333 166 14 166Z",
  T: "M62 164C57.7333 164 54.2667 162.8 51.6 160.4C49.2 158 48 154.933 48 151.2V34.8C48 28.1333 44.5333 24.8 37.6 24.8H12.4C4.13333 24.8 2.83122e-07 20.6667 2.83122e-07 12.4C2.83122e-07 4.13333 4.13333 -2.38419e-06 12.4 -2.38419e-06H111.2C114.933 -2.38419e-06 118 1.19999 120.4 3.59999C122.8 5.73332 124 8.66666 124 12.4C124 16.1333 122.8 19.2 120.4 21.6C118 23.7333 114.933 24.8 111.2 24.8H86.4C79.4667 24.8 76 28.1333 76 34.8V151.2C76 154.933 74.6667 158 72 160.4C69.6 162.8 66.2667 164 62 164Z",
  I: "M14 166C10.5333 166 7.33334 164.8 4.4 162.4C1.46667 160.267 2.98023e-07 157.067 2.98023e-07 152.8V13.2C2.98023e-07 8.66666 1.46667 5.33332 4.4 3.19999C7.33334 1.06666 10.5333 -1.23978e-05 14 -1.23978e-05C17.7333 -1.23978e-05 20.9333 1.06666 23.6 3.19999C26.5333 5.33332 28 8.66666 28 13.2V152.8C28 157.067 26.5333 160.267 23.6 162.4C20.9333 164.8 17.7333 166 14 166Z",
  P: "M18 166C13.2 166 8.93333 164.4 5.2 161.2C1.73333 157.733 7.15256e-07 153.733 7.15256e-07 149.2V26C7.15256e-07 18.2667 2.4 12 7.2 7.19999C12 2.39999 18.2667 -1.23978e-05 26 -1.23978e-05H66.4C82.4 -1.23978e-05 95.6 4.53332 106 13.6C116.667 22.6667 122 34.6667 122 49.6C122 65.8667 116.8 79.0667 106.4 89.2C96 99.3333 82.8 104.4 66.8 104.4H43.2C37.8667 104.4 35.2 107.067 35.2 112.4L36 149.2C36 153.733 34.1333 157.733 30.4 161.2C26.9333 164.4 22.8 166 18 166ZM41.2 72.4H62.4C78.9333 72.4 87.2 65.6 87.2 52C87.2 38.6667 79.4667 32 64 32H41.2C37.2 32 35.2 34 35.2 38V66.4C35.2 70.4 37.2 72.4 41.2 72.4Z",
  A: "M16.5 210C12.1667 210 8.33333 208.5 5 205.5C1.66667 202.5 7.07805e-07 198.5 7.07805e-07 193.5C7.07805e-07 191.833 0.333334 189.667 1 187L63.5 17.5C65.8333 11.8333 69.3333 7.49999 74 4.49999C78.6667 1.49999 83.6667 -1.3113e-05 89 -1.3113e-05C94.3333 -1.3113e-05 99.3333 1.49999 104 4.49999C109 7.49999 112.667 11.8333 115 17.5L181.5 187C182.167 189.667 182.5 191.833 182.5 193.5C182.5 198.5 180.833 202.5 177.5 205.5C174.167 208.5 170.333 210 166 210C163 210 159.833 209.167 156.5 207.5C153.5 206.167 151.167 203.833 149.5 200.5L133 156.5C132.667 154.5 131.333 153.5 129 153.5H52.5C50.1667 153.5 48.6667 154.5 48 156.5L33 200.5C31.3333 203.833 28.8333 206.167 25.5 207.5C22.5 209.167 19.5 210 16.5 210ZM67.5 123.5H112.5C114.5 123.5 116 122.833 117 121.5C118.333 119.833 118.667 117.833 118 115.5L94 47C93 43.6667 91.5 42 89.5 42C87.1667 42 85.5 43.6667 84.5 47L62 116C61.3333 118 61.5 119.833 62.5 121.5C63.8333 122.833 65.5 123.5 67.5 123.5Z",
};

type AlphabetTracingProps = {
  letter: string;
};

const STROKE_WIDTH = 96;

const AlphabetTracing = ({ letter }: AlphabetTracingProps) => {
  const letterPath = Skia.Path.MakeFromSVGString(
    letterCoordinatesToRender[letter as "A" | "T" | "P" | "I" | "N"]
  )!;
  const drawPath = useSharedValue(Skia.Path.Make());

  const cursorPosition = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      drawPath.value.moveTo(event.x, event.y);
      drawPath.modify();
    })
    .onChange((event) => {
      drawPath.value.lineTo(event.x, event.y);
      cursorPosition.value = { x: event.x, y: event.y };
      drawPath.modify();
    });

  const canvasWidth = WIDTH;
  const canvasHeight = 256;

  // Get the bounding box of the letter path
  const bounds = letterPath.getBounds();

  // Calculate the scaling factor to fit the letter within the canvas
  const scale =
    Math.min(canvasWidth / bounds.width, canvasHeight / bounds.height) * 0.8; // 0.8 to leave some margin

  // Calculate the translation to center the letter
  const centerX = canvasWidth / 2 - (bounds.x + bounds.width / 2) * scale;
  const centerY = canvasHeight / 2 - (bounds.y + bounds.height / 2) * scale;

  const matrix = Skia.Matrix();
  matrix.scale(scale, scale);
  matrix.translate(centerX / scale, centerY / scale);
  letterPath.transform(matrix);

  useEffect(() => {
    drawPath.value = Skia.Path.Make();
    cursorPosition.value = { x: 0, y: 0 };
  }, [cursorPosition, drawPath, letter]);

  return (
    <GestureDetector gesture={gesture}>
      <View className="w-fulßl relative h-72 items-center justify-center ">
        <Canvas
          style={{
            height: canvasHeight,
            width: canvasWidth,
          }}
        >
          <Fill color="white" />
          {/* Letter black border */}
          <Path path={letterPath} color="#E4E4E7" strokeWidth={10 / scale}>
            <Morphology radius={6 / scale} />
          </Path>

          {/* Letter white background */}
          <Path path={letterPath} color="#E4E4E7" strokeWidth={10 / scale}>
            <Morphology radius={3 / scale} />
          </Path>

          <Mask
            mask={
              <Path
                path={drawPath}
                color="black"
                strokeWidth={STROKE_WIDTH}
                style="stroke"
              />
            }
          >
            <Path path={letterPath} color="black" strokeWidth={10 / scale} />
          </Mask>
        </Canvas>
      </View>
    </GestureDetector>
  );
};

export default AlphabetTracing;
