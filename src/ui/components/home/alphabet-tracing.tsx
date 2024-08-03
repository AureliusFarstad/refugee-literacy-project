import {
  Canvas,
  Circle,
  Fill,
  Mask,
  Morphology,
  Path,
  Skia,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { WIDTH } from "@/utils/layout";

const letterCoordinatesToRender = {
  N: "M14 166C10.5333 166 7.33333 164.933 4.4 162.8C1.46667 160.667 7.15256e-07 157.467 7.15256e-07 153.2V18.4C7.15256e-07 12.2667 1.86667 7.73332 5.6 4.8C9.6 1.59999 13.8667 -1.23978e-05 18.4 -1.23978e-05C25.3333 -1.23978e-05 30.4 2.66666 33.6 7.99999L99.6 111.6C100.933 113.733 102.4 114.8 104 114.8C106.4 114.8 107.6 112.933 107.6 109.2L106 12.8C106 8.53332 107.467 5.33332 110.4 3.19999C113.333 1.06666 116.533 -1.23978e-05 120 -1.23978e-05C123.467 -1.23978e-05 126.667 1.06666 129.6 3.19999C132.533 5.33332 134 8.53332 134 12.8V148.4C134 154.267 132.267 158.667 128.8 161.6C125.333 164.533 121.333 166 116.8 166C113.6 166 110.4 165.2 107.2 163.6C104.267 162.267 101.733 160 99.6 156.8L34.8 56C33.4667 53.8667 32 52.8 30.4 52.8C28 52.8 26.8 54.6667 26.8 58.4L28 153.2C28 157.467 26.5333 160.667 23.6 162.8C20.9333 164.933 17.7333 166 14 166Z",
  T: "M62 164C57.7333 164 54.2667 162.8 51.6 160.4C49.2 158 48 154.933 48 151.2V34.8C48 28.1333 44.5333 24.8 37.6 24.8H12.4C4.13333 24.8 2.83122e-07 20.6667 2.83122e-07 12.4C2.83122e-07 4.13333 4.13333 -2.38419e-06 12.4 -2.38419e-06H111.2C114.933 -2.38419e-06 118 1.19999 120.4 3.59999C122.8 5.73332 124 8.66666 124 12.4C124 16.1333 122.8 19.2 120.4 21.6C118 23.7333 114.933 24.8 111.2 24.8H86.4C79.4667 24.8 76 28.1333 76 34.8V151.2C76 154.933 74.6667 158 72 160.4C69.6 162.8 66.2667 164 62 164Z",
  I: "M14 166C10.5333 166 7.33334 164.8 4.4 162.4C1.46667 160.267 2.98023e-07 157.067 2.98023e-07 152.8V13.2C2.98023e-07 8.66666 1.46667 5.33332 4.4 3.19999C7.33334 1.06666 10.5333 -1.23978e-05 14 -1.23978e-05C17.7333 -1.23978e-05 20.9333 1.06666 23.6 3.19999C26.5333 5.33332 28 8.66666 28 13.2V152.8C28 157.067 26.5333 160.267 23.6 162.4C20.9333 164.8 17.7333 166 14 166Z",
  P: "M18 166C13.2 166 8.93333 164.4 5.2 161.2C1.73333 157.733 7.15256e-07 153.733 7.15256e-07 149.2V26C7.15256e-07 18.2667 2.4 12 7.2 7.19999C12 2.39999 18.2667 -1.23978e-05 26 -1.23978e-05H66.4C82.4 -1.23978e-05 95.6 4.53332 106 13.6C116.667 22.6667 122 34.6667 122 49.6C122 65.8667 116.8 79.0667 106.4 89.2C96 99.3333 82.8 104.4 66.8 104.4H43.2C37.8667 104.4 35.2 107.067 35.2 112.4L36 149.2C36 153.733 34.1333 157.733 30.4 161.2C26.9333 164.4 22.8 166 18 166ZM41.2 72.4H62.4C78.9333 72.4 87.2 65.6 87.2 52C87.2 38.6667 79.4667 32 64 32H41.2C37.2 32 35.2 34 35.2 38V66.4C35.2 70.4 37.2 72.4 41.2 72.4Z",
  A: "M16.5 210C12.1667 210 8.33333 208.5 5 205.5C1.66667 202.5 7.07805e-07 198.5 7.07805e-07 193.5C7.07805e-07 191.833 0.333334 189.667 1 187L63.5 17.5C65.8333 11.8333 69.3333 7.49999 74 4.49999C78.6667 1.49999 83.6667 -1.3113e-05 89 -1.3113e-05C94.3333 -1.3113e-05 99.3333 1.49999 104 4.49999C109 7.49999 112.667 11.8333 115 17.5L181.5 187C182.167 189.667 182.5 191.833 182.5 193.5C182.5 198.5 180.833 202.5 177.5 205.5C174.167 208.5 170.333 210 166 210C163 210 159.833 209.167 156.5 207.5C153.5 206.167 151.167 203.833 149.5 200.5L133 156.5C132.667 154.5 131.333 153.5 129 153.5H52.5C50.1667 153.5 48.6667 154.5 48 156.5L33 200.5C31.3333 203.833 28.8333 206.167 25.5 207.5C22.5 209.167 19.5 210 16.5 210ZM67.5 123.5H112.5C114.5 123.5 116 122.833 117 121.5C118.333 119.833 118.667 117.833 118 115.5L94 47C93 43.6667 91.5 42 89.5 42C87.1667 42 85.5 43.6667 84.5 47L62 116C61.3333 118 61.5 119.833 62.5 121.5C63.8333 122.833 65.5 123.5 67.5 123.5Z",
  n: "M50.2 61C48.4667 61 46.8667 60.4667 45.4 59.4C44.0667 58.3333 43.4 56.8 43.4 54.8V29.6C43.4 23.7333 42.0667 19.4 39.4 16.6C36.8667 13.8 33.4667 12.4 29.2 12.4C23.7333 12.4 19.7333 14.2 17.2 17.8C14.8 21.2667 13.6 25.1333 13.6 29.4V54.8C13.6 56.8 12.8667 58.3333 11.4 59.4C10.0667 60.4667 8.53333 61 6.8 61C5.06667 61 3.46667 60.4667 2 59.4C0.666667 58.3333 5.66244e-07 56.8 5.66244e-07 54.8V7.8C5.66244e-07 5.53333 0.666667 3.86667 2 2.8C3.46667 1.6 5.06667 0.999996 6.8 0.999996C8.53333 0.999996 10.0667 1.6 11.4 2.8C12.8667 3.86667 13.6 5.53333 13.6 7.8C15.8667 5.53333 18.8 3.66667 22.4 2.2C26 0.73333 29.4 -3.33786e-06 32.6 -3.33786e-06C40.0667 -3.33786e-06 46 2.4 50.4 7.2C54.8 12 57 19.0667 57 28.4V54.8C57 56.8 56.2667 58.3333 54.8 59.4C53.3333 60.4667 51.8 61 50.2 61Z",
  t: "M29.6 84C24.4 84 20.1333 82.4 16.8 79.2C13.4667 76 11.8 71.2 11.8 64.8V39.4C11.8 38.0667 11.1333 37.4 9.8 37.4H6.2C4.46667 37.4 3 36.8667 1.8 35.8C0.6 34.6 7.07805e-08 33.1333 7.07805e-08 31.4C7.07805e-08 29.5333 0.6 28 1.8 26.8C3 25.6 4.46667 25 6.2 25H9.8C11.1333 25 11.8 24.3333 11.8 23V6.2C11.8 4.33333 12.4 2.86666 13.6 1.8C14.9333 0.599995 16.5333 -5.24521e-06 18.4 -5.24521e-06C20.4 -5.24521e-06 22 0.599995 23.2 1.8C24.5333 2.86666 25.2 4.33333 25.2 6.2V23C25.2 24.3333 25.8667 25 27.2 25H38C39.6 25 41 25.6 42.2 26.8C43.4 28 44 29.5333 44 31.4C44 33.1333 43.4 34.6 42.2 35.8C41.1333 36.8667 39.6667 37.4 37.8 37.4H27.2C25.8667 37.4 25.2 38.0667 25.2 39.4V63C25.2 68.6 27.4667 71.4 32 71.4C33.3333 71.4 34.7333 71.2 36.2 70.8C37.6667 70.4 38.6667 70.2 39.2 70.2C41.0667 70.2 42.4667 70.8 43.4 72C44.4667 73.2 45 74.6 45 76.2C45 77.4 44.6667 78.6 44 79.8C43.3333 80.8667 42.2667 81.6667 40.8 82.2C39.3333 82.7333 37.4667 83.1333 35.2 83.4C33.0667 83.8 31.2 84 29.6 84Z",
  i: "M9 89C7.26667 89 5.66667 88.4667 4.2 87.4C2.86667 86.3333 2.2 84.8 2.2 82.8V34.8C2.2 32.5333 2.86667 30.8667 4.2 29.8C5.66667 28.6 7.26667 28 9 28C10.7333 28 12.2667 28.6 13.6 29.8C15.0667 30.8667 15.8 32.5333 15.8 34.8V82.8C15.8 84.8 15.0667 86.3333 13.6 87.4C12.2667 88.4667 10.7333 89 9 89ZM9.2 17C6.66667 17 4.46667 16.2 2.6 14.6C0.866667 12.8667 2.38419e-07 10.8 2.38419e-07 8.4C2.38419e-07 6.13333 0.866667 4.2 2.6 2.6C4.46667 0.866661 6.66667 -6.4373e-06 9.2 -6.4373e-06C11.6 -6.4373e-06 13.6667 0.866661 15.4 2.6C17.1333 4.2 18 6.13333 18 8.4C18 10.8 17.1333 12.8667 15.4 14.6C13.6667 16.2 11.6 17 9.2 17Z",
  p: "M31.2 61C27.4667 61 24.1333 60.3333 21.2 59C18.2667 57.8 15.7333 56.1333 13.6 54V81.8C13.6 83.8 12.8667 85.3333 11.4 86.4C10.0667 87.4667 8.53333 88 6.8 88C5.06667 88 3.46667 87.4667 2 86.4C0.666667 85.3333 5.66244e-07 83.8 5.66244e-07 81.8V7.8C5.66244e-07 5.53333 0.666667 3.86667 2 2.8C3.46667 1.6 5.06667 0.999996 6.8 0.999996C8.4 0.999996 9.86667 1.53333 11.2 2.6C12.5333 3.53333 13.3333 4.93333 13.6 6.8C15.7333 4.8 18.2667 3.2 21.2 1.99999C24.1333 0.666663 27.4667 -3.33786e-06 31.2 -3.33786e-06C37.0667 -3.33786e-06 42.2 1.33333 46.6 4C51.1333 6.53333 54.6667 10.0667 57.2 14.6C59.7333 19.1333 61 24.2667 61 30C61 35.8667 59.7333 41.2 57.2 46C54.6667 50.6667 51.1333 54.3333 46.6 57C42.2 59.6667 37.0667 61 31.2 61ZM30 48.6C35.2 48.6 39.4 46.9333 42.6 43.6C45.8 40.1333 47.4 35.6 47.4 30C47.4 24.6667 45.8 20.4 42.6 17.2C39.4 14 35.2 12.4 30 12.4C24.9333 12.4 20.9333 14 18 17.2C15.0667 20.4 13.6 24.6667 13.6 30C13.6 35.6 15.0667 40.1333 18 43.6C20.9333 46.9333 24.9333 48.6 30 48.6Z",
  a: "M29.8 61C24.0667 61 18.9333 59.6667 14.4 57C9.86667 54.3333 6.33333 50.6667 3.8 46C1.26667 41.2 2.83122e-07 35.8667 2.83122e-07 30C2.83122e-07 24.2667 1.26667 19.1333 3.8 14.6C6.33333 10.0667 9.86667 6.53333 14.4 4C18.9333 1.33333 24.0667 -3.33786e-06 29.8 -3.33786e-06C33.5333 -3.33786e-06 36.8667 0.666663 39.8 1.99999C42.7333 3.2 45.2667 4.8 47.4 6.8C47.6667 4.93333 48.4667 3.53333 49.8 2.6C51.1333 1.53333 52.6 0.999996 54.2 0.999996C55.9333 0.999996 57.4667 1.6 58.8 2.8C60.2667 3.86667 61 5.53333 61 7.8V54.8C61 56.8 60.2667 58.3333 58.8 59.4C57.4667 60.4667 55.9333 61 54.2 61C52.4667 61 50.8667 60.4667 49.4 59.4C48.0667 58.3333 47.4 56.8 47.4 54.8V54C45.2667 56.1333 42.7333 57.8 39.8 59C36.8667 60.3333 33.5333 61 29.8 61ZM31 48.6C36.0667 48.6 40.0667 46.9333 43 43.6C45.9333 40.1333 47.4 35.6 47.4 30C47.4 24.6667 45.9333 20.4 43 17.2C40.0667 14 36.0667 12.4 31 12.4C25.8 12.4 21.6 14 18.4 17.2C15.2 20.4 13.6 24.6667 13.6 30C13.6 35.6 15.2 40.1333 18.4 43.6C21.6 46.9333 25.8 48.6 31 48.6Z",
};

const getPathStartPoint = (pathData: string): { x: number; y: number } => {
  const match = pathData.match(/M\s*(-?\d+(\.\d+)?)\s*(-?\d+(\.\d+)?)/);
  if (match) {
    return { x: parseFloat(match[1]), y: parseFloat(match[3]) };
  }
  return { x: 0, y: 0 }; // Default to (0, 0) if no match found
};

type AlphabetTracingProps = {
  letter: string;
};

const STROKE_WIDTH = 50;

const radius = 30;

const AlphabetTracing = ({ letter }: AlphabetTracingProps) => {
  const letterPath = Skia.Path.MakeFromSVGString(
    letterCoordinatesToRender[letter as "A" | "T" | "P" | "I" | "N"],
  )!;
  const drawPath = useSharedValue(Skia.Path.Make());

  const x = useSharedValue(100);
  const y = useSharedValue(100);

  const style = useAnimatedStyle(() => ({
    position: "absolute",
    top: -radius,
    left: -radius,
    width: radius * 2,
    zIndex: 50,
    height: radius * 2,
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      drawPath.value.moveTo(event.x, event.y);
      drawPath.modify();
    })
    .onChange((event) => {
      x.value = event.x;
      y.value = event.y;
      drawPath.value.lineTo(event.x, event.y);
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
    const startPoint = getPathStartPoint(
      letterCoordinatesToRender[letter as "A" | "T" | "P" | "I" | "N"],
    );
    x.value = startPoint.x * scale + centerX;
    y.value = startPoint.y * scale + centerY;
  }, [letter, drawPath, x, y, scale, centerX, centerY]);

  return (
    <GestureDetector gesture={gesture}>
      <View className="relative z-20 h-72 w-full items-center justify-center border-4 border-pink-500">
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
          <Circle cx={x} cy={y} r={20} color="#C385F8" />
        </Canvas>
        <Animated.View style={style} className={"z-50"} />
      </View>
    </GestureDetector>
  );
};

export default AlphabetTracing;
