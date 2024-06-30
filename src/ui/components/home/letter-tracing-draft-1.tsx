import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  PanResponder,
  Dimensions,
  GestureResponderEvent,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { LetterMatchIcon } from "@/ui/icons";

const { width, height } = Dimensions.get("window");

interface ILetter {
  id: string;
  value: string;
}

interface ITracedPath {
  letter: string;
  path: string;
}

const LetterTracingAndMatching: React.FC = () => {
  const dynamicModalRef = useRef<any>(null);
  const [leftLetters, setLeftLetters] = useState<ILetter[]>([]);
  const [rightLetters, setRightLetters] = useState<ILetter[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<ILetter | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [tracedPaths, setTracedPaths] = useState<ITracedPath[]>([]);
  const pathRef = useRef<string>("");
  const startPointRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const initializeGame = useCallback(() => {
    const letters = ["a", "b", "c", "d"];
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
    setCurrentPath("");
    setTracedPaths([]);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const shuffle = (array: ILetter[]): ILetter[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const checkLetterShape = (letter: string, path: string): boolean => {
    const { x: startX, y: startY } = startPointRef.current;
    const points = path
      .split(" ")
      .slice(1)
      .map((point) => {
        const [x, y] = point.split(",");
        return { x: parseFloat(x), y: parseFloat(y) };
      });

    const endPoint = points[points.length - 1];
    const dx = endPoint.x - startX;
    const dy = endPoint.y - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    switch (letter.toLowerCase()) {
      case "a":
        return distance < 50 && points.length > 20;
      case "b":
        return Math.abs(dy) > Math.abs(dx) && points.length > 30;
      case "c":
        return dx < 0 && Math.abs(dy) < 50 && points.length > 15;
      case "d":
        return Math.abs(dy) > Math.abs(dx) && points.length > 25;
      default:
        return false;
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt: GestureResponderEvent) => {
        const { locationX, locationY } = evt.nativeEvent;
        startPointRef.current = { x: locationX, y: locationY };
        pathRef.current = `M${locationX},${locationY}`;
        setCurrentPath(pathRef.current);
      },
      onPanResponderMove: (evt: GestureResponderEvent) => {
        const { locationX, locationY } = evt.nativeEvent;
        pathRef.current += ` L${locationX},${locationY}`;
        setCurrentPath(pathRef.current);
      },
      onPanResponderRelease: () => {
        if (selectedLeft) {
          const isCorrectShape = checkLetterShape(
            selectedLeft.value,
            pathRef.current
          );
          if (isCorrectShape) {
            setTracedPaths((prev) => [
              ...prev,
              { letter: selectedLeft.value, path: pathRef.current },
            ]);
            Alert.alert(
              "Good job!",
              `You correctly traced the letter ${selectedLeft.value.toUpperCase()}`
            );
          } else {
            Alert.alert(
              "Try again",
              "The traced shape doesn't match the letter. Keep practicing!"
            );
          }
        }
        setCurrentPath("");
      },
    })
  ).current;

  const handleLeftLetterPress = (letter: ILetter) => {
    if (!matchedPairs.includes(letter.value)) {
      setSelectedLeft(letter);
    }
  };

  const handleRightLetterPress = (letter: ILetter) => {
    if (selectedLeft && selectedLeft.value.toUpperCase() === letter.value) {
      setMatchedPairs((prev) => [...prev, selectedLeft.value]);
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
    onPress: (letter: ILetter) => void
  ) => (
    <View className="items-center">
      {letters.map((letter) => (
        <TouchableOpacity
          key={letter.id}
          className={`m-[14px] size-[64px] items-center justify-center rounded-[10px] ${
            matchedPairs.includes(letter.value.toLowerCase())
              ? "bg-[#8AC65B]"
              : selectedLeft?.id === letter.id
              ? "bg-[#7471F0]"
              : "bg-colors-purple-500"
          }`}
          onPress={() => onPress(letter)}
        >
          <Text className="text-2xl font-bold text-white">{letter.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView>
      <Header title="Tracing & Matching" modalRef={dynamicModalRef} />
      <View className="flex-1" {...panResponder.panHandlers}>
        <Svg height={height} width={width} style={{ position: "absolute" }}>
          {tracedPaths.map(({ letter, path }, index) => (
            <Path
              key={`${letter}-${index}`}
              d={path}
              stroke="green"
              strokeWidth="2"
              fill="none"
            />
          ))}
          <Path d={currentPath} stroke="blue" strokeWidth="2" fill="none" />
        </Svg>
        <View className="flex flex-row justify-between px-10">
          {renderLetters(leftLetters, handleLeftLetterPress)}
          {renderLetters(rightLetters, handleRightLetterPress)}
        </View>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter Tracing and Matching Activity</Text>
          <View className="flex h-20 items-center justify-center">
            <LetterMatchIcon />
          </View>
          <Text className="mt-4">
            Trace the letters and match lowercase with uppercase. The game will
            check if your tracing matches the letter shape. All correctly traced
            letters will remain on the screen. Have fun learning!
          </Text>
        </View>
      </DynamicModal>
    </SafeAreaView>
  );
};

export default LetterTracingAndMatching;
