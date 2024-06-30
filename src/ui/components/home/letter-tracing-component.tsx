// import React, { useState, useRef } from "react";
// import { View, StyleSheet, PanResponder } from "react-native";
// import Svg, { Path as SvgPath } from "react-native-svg";

// type Path = {
//   pathString: string;
//   startingPoint: { x1: number; y1: number };
//   endingPoint: { x2: number; y2: number };
// };

// const LineDrawingComponent = () => {
//   const [paths, setPaths] = useState<Path[]>([]);
//   const [currentPath, setCurrentPath] = useState<string>("");
//   const pathRef = useRef<string>("");
//   const startPointRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: (evt) => {
//         const { locationX, locationY } = evt.nativeEvent;
//         startPointRef.current = { x: locationX, y: locationY };
//         pathRef.current = `M${locationX},${locationY}`;
//         setCurrentPath(pathRef.current);
//       },
//       onPanResponderMove: (evt) => {
//         const { locationX, locationY } = evt.nativeEvent;
//         pathRef.current += ` L${locationX},${locationY}`;
//         setCurrentPath(pathRef.current);
//       },
//       onPanResponderRelease: (evt) => {
//         const { locationX, locationY } = evt.nativeEvent;
//         const newPath: Path = {
//           pathString: pathRef.current,
//           startingPoint: {
//             x1: startPointRef.current.x,
//             y1: startPointRef.current.y,
//           },
//           endingPoint: { x2: locationX, y2: locationY },
//         };
//         setPaths((prevPaths) => [...prevPaths, newPath]);
//         setCurrentPath("");
//       },
//     })
//   ).current;

//   console.log(`paths`, JSON.stringify(paths, null, 2));

//   return (
//     <View style={styles.container} {...panResponder.panHandlers}>
//       <Svg height="100%" width="100%">
//         {paths.map((p, index) => (
//           <SvgPath
//             key={index}
//             d={p.pathString}
//             stroke="green"
//             strokeWidth="2"
//             fill="none"
//           />
//         ))}
//         <SvgPath d={currentPath} stroke="blue" strokeWidth="2" fill="none" />
//       </Svg>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5FCFF",
//   },
// });

// export default LineDrawingComponent;

// import React, { useState, useRef } from "react";
// import { View, StyleSheet, PanResponder } from "react-native";
// import Svg, { Path as SvgPath, Text as SvgText } from "react-native-svg";

// type Path = {
//   pathString: string;
//   startingPoint: { x1: number; y1: number };
//   endingPoint: { x2: number; y2: number };
// };

// const LineDrawingComponent = () => {
// const [paths, setPaths] = useState<Path[]>([]);
// const [currentPath, setCurrentPath] = useState<string>("");
// const pathRef = useRef<string>("");
// const startPointRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

// const panResponder = useRef(
//   PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderGrant: (evt) => {
//       const { locationX, locationY } = evt.nativeEvent;
//       startPointRef.current = { x: locationX, y: locationY };
//       pathRef.current = `M${locationX},${locationY}`;
//       setCurrentPath(pathRef.current);
//     },
//     onPanResponderMove: (evt) => {
//       const { locationX, locationY } = evt.nativeEvent;
//       pathRef.current += ` L${locationX},${locationY}`;
//       setCurrentPath(pathRef.current);
//     },
//     onPanResponderRelease: (evt) => {
//       const { locationX, locationY } = evt.nativeEvent;
//       const newPath: Path = {
//         pathString: pathRef.current,
//         startingPoint: {
//           x1: Math.floor(startPointRef.current.x),
//           y1: Math.floor(startPointRef.current.y),
//         },
//         endingPoint: { x2: Math.floor(locationX), y2: Math.floor(locationY) },
//       };
//       setPaths((prevPaths) => [...prevPaths, newPath]);
//       setCurrentPath("");
//     },
//   })
// ).current;

//   return (
// <View style={styles.container} {...panResponder.panHandlers}>
//   <Svg height="100%" width="100%">
//     {paths.map((p, index) => (
//       <React.Fragment key={index}>
//         <SvgPath
//           d={p.pathString}
//           stroke="green"
//           strokeWidth="2"
//           fill="none"
//         />
//         <SvgText
//           x={p.startingPoint.x1}
//           y={p.startingPoint.y1}
//           fontSize="12"
//           fill="red"
//         >{`(${p.startingPoint.x1},${p.startingPoint.y1})`}</SvgText>
//         <SvgText
//           x={p.endingPoint.x2}
//           y={p.endingPoint.y2}
//           fontSize="12"
//           fill="red"
//         >{`(${p.endingPoint.x2},${p.endingPoint.y2})`}</SvgText>
//       </React.Fragment>
//     ))}
//     <SvgPath d={currentPath} stroke="blue" strokeWidth="2" fill="none" />
//   </Svg>
// </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5FCFF",
//   },
// });

// export default LineDrawingComponent;

import { SafeAreaView, Text, TouchableOpacity } from "@/ui";
import Header from "@/ui/core/headers";
import { HEIGHT, WIDTH } from "@/utils/layout";
import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, PanResponder, View } from "react-native";
import Svg, { Path as SvgPath, Text as SvgText } from "react-native-svg";

type Path = {
  pathString: string;
  startingPoint: { x1: number; y1: number };
  endingPoint: { x2: number; y2: number };
};

/**
 * Shuffle letters
 */

export const shuffleLetters = (letters: string[]) => {
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters;
};

interface ILetter {
  id: string;
  value: string;
}

const LetterTapMatching = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  const [leftLetters, setLeftLetters] = useState<ILetter[]>([]);
  const [rightLetters, setRightLetters] = useState<ILetter[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<ILetter | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

  const [lettersLayout, setLettersLayout] = useState<
    { id: string; x: number; y: number; value: string }[]
  >([]);

  const [paths, setPaths] = useState<Path[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");
  const pathRef = useRef<string>("");
  const startPointRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const layoutValuesRef = useRef<
    {
      x: number;
      y: number;
      id: string;
      value: string;
    }[]
  >();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        startPointRef.current = { x: locationX, y: locationY };
        pathRef.current = `M${locationX},${locationY}`;
        setCurrentPath(`M${locationX},${locationY} L${locationX},${locationY}`);
      },
      onPanResponderMove: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        const newPath = `M${startPointRef.current.x},${startPointRef.current.y} L${locationX},${locationY}`;
        pathRef.current = newPath;
        setCurrentPath(newPath);
      },
      onPanResponderRelease: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;

        const newPath: Path = {
          pathString: `M${startPointRef.current.x},${startPointRef.current.y} L${locationX},${locationY}`,
          startingPoint: {
            x1: Math.floor(startPointRef.current.x),
            y1: Math.floor(startPointRef.current.y),
          },
          endingPoint: {
            x2: Math.floor(locationX),
            y2: Math.floor(locationY),
          },
        };
        /**
         * Calculate the two letters
         * left value
         * right value
         */
        const letterFoundInLeft = checkLeftLetterValue({
          x1: Math.floor(startPointRef.current.x),
          y1: Math.floor(startPointRef.current.y),
        });
        const letterFoundInRight = checkRightLetterValue({
          x1: locationX,
          y1: locationY,
        });
        /**
         * Update the paths
         */
        console.log(`🍟🍟🍟`);
        console.log({ letterFoundInLeft });
        console.log({ letterFoundInRight });
        console.log(`🍟🍟🍟`);

        checkIfLettersMatch(letterFoundInLeft, letterFoundInRight, newPath);
        setCurrentPath("");
      },
    })
  ).current;

  const checkIfLettersMatch = (
    letterFoundInLeft: string,
    letterFoundInRight: string,
    newPath: Path
  ) => {
    console.log(`🍟🍟🍟`);
    console.log(letterFoundInLeft, letterFoundInRight);
    if (letterFoundInLeft === letterFoundInRight) {
      console.log({ letterFoundInLeft });
      console.log({ letterFoundInRight });
      setPaths((prevPaths) => [...prevPaths, newPath]);
      setMatchedPairs((prev) => [...prev, letterFoundInRight]);
    }
  };

  const initializeGame = useCallback(() => {
    const letters = shuffleLetters(["s", "n", "i", "t", "p", "a"]);
    const left = letters.map((value, index) => ({
      id: `left-${index}`,
      value,
    }));
    const right = shuffle(
      letters.map((value, index) => ({
        id: `right-${index}`,
        value: value.toUpperCase(),
      }))
    );
    setLeftLetters(left);
    setRightLetters(right);
    setSelectedLeft(null);
    setMatchedPairs([]);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const shuffle = (array: ILetter[]): ILetter[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleLeftLetterPress = (letter: ILetter) => {
    if (!matchedPairs.includes(letter.value)) {
      setSelectedLeft(letter);
    }
  };

  const handleRightLetterPress = (letter: ILetter) => {
    if (selectedLeft && selectedLeft.value.toUpperCase() === letter.value) {
      setMatchedPairs([...matchedPairs, selectedLeft.value]);
      setSelectedLeft(null);
      if (matchedPairs.length + 1 === leftLetters.length) {
        Alert.alert("Level", "Completed", [
          { text: "Play Again", onPress: initializeGame },
        ]);
      }
    } else {
      setSelectedLeft(null);
    }
  };

  const renderLetters = (
    letters: ILetter[],
    onPress: (letter: ILetter) => void,
    isRight: boolean
  ) => (
    <View className="items-center">
      {letters.map((letter, index) => {
        return (
          <View key={letter.id} className="items-center">
            <TouchableOpacity
              className={clsx(
                "my-[14px] size-[64px] items-center justify-center rounded-[10px] ",
                {
                  "bg-[#8AC65B]": matchedPairs.includes(
                    letter.value.toLowerCase()
                  ),
                  "bg-[#7471F0]": selectedLeft?.id === letter.id,
                  "bg-colors-purple-500":
                    !matchedPairs.includes(letter.value.toLowerCase()) &&
                    selectedLeft?.id !== letter.id,
                }
              )}
              onPress={() => onPress(letter)}
            >
              <Text className="text-2xl font-bold text-white">
                {letter.value}
                {/* {" "}
                <Text className="text-xs">
                  {lettersLayout.find((l) => l.id === letter.id)?.x}-
                  {lettersLayout.find((l) => l.id === letter.id)?.y}
                </Text> */}
              </Text>
              <View
                className={clsx("size-4 border-2  absolute rounded-full ", {
                  "right-24": isRight,
                  "left-24": !isRight,
                  "bg-[#8AC65B] border-[#8AC65B]": matchedPairs.includes(
                    letter.value.toLowerCase()
                  ),
                  "bg-[#7471F0] border-[#7471F0]":
                    selectedLeft?.id === letter.id,
                  "border-colors-purple-500":
                    !matchedPairs.includes(letter.value.toLowerCase()) &&
                    selectedLeft?.id !== letter.id,
                })}
                onLayout={(e) => {
                  e.target.measure((x, y, width, height, pageX, pageY) => {
                    console.log({ pageX });
                    console.log({ pageY });
                    console.log({ WIDTH });
                    console.log({ HEIGHT });
                    if (layoutValuesRef.current) {
                      layoutValuesRef.current = [
                        ...layoutValuesRef.current,
                        {
                          x: -x + pageX,
                          y: y + pageY,
                          id: letter.id,
                          value: letter.value,
                        },
                      ];
                    } else {
                      layoutValuesRef.current = [
                        {
                          id: letter.id,
                          x: -x + pageX,
                          y: y + pageY,
                          value: letter.value,
                        },
                      ];
                    }
                    if (index === letters.length - 1) {
                      setLettersLayout([...layoutValuesRef.current]);
                    }
                  });
                }}
              ></View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );

  console.log(`lettersLayout`, JSON.stringify(lettersLayout, null, 2));

  const checkLeftLetterValue = ({ x1, y1 }: { x1: number; y1: number }) => {
    if (!layoutValuesRef.current) return "";
    let letterFoundInLeft = "";

    for (let index = 0; index < layoutValuesRef.current.length; index++) {
      const element = layoutValuesRef.current[index];
      if (element.id.includes("left")) {
        const a = y1 + 90;
        const b = element.y;

        const difference = Math.abs(a - b);
        if (difference <= 40) {
          letterFoundInLeft = element.value;
        }
      }
    }
    return letterFoundInLeft.toLowerCase();
  };

  const checkRightLetterValue = ({ x1, y1 }: { x1: number; y1: number }) => {
    if (!layoutValuesRef.current) return "";
    let letterFoundInRight = "";

    for (let index = 0; index < layoutValuesRef.current.length; index++) {
      const element = layoutValuesRef.current[index];
      if (element.id.includes("right")) {
        const a = y1 + 90;
        const b = element.y;

        const difference = Math.abs(a - b);
        if (difference <= 40) {
          letterFoundInRight = element.value;
        }
      }
    }
    return letterFoundInRight.toLowerCase();
  };

  return (
    <SafeAreaView>
      <Header title="Matching" modalRef={dynamicModalRef} />
      <View className="flex flex-row relative justify-between px-10  border-yellow-500">
        {renderLetters(leftLetters, handleLeftLetterPress, false)}
        <View className=" border-pink-500 flex-1">
          <View {...panResponder.panHandlers} className="flex-1">
            <Svg height="100%" width="100%">
              {paths.map((p, index) => (
                <React.Fragment key={index}>
                  <SvgPath
                    d={p.pathString}
                    stroke="#8AC65B"
                    strokeWidth="2"
                    fill="none"
                  />
                </React.Fragment>
              ))}
              <SvgPath
                d={currentPath}
                stroke="blue"
                strokeWidth="2"
                fill="none"
              />
            </Svg>
          </View>
        </View>
        {renderLetters(rightLetters, handleRightLetterPress, true)}
      </View>
    </SafeAreaView>
  );
};

export default LetterTapMatching;
