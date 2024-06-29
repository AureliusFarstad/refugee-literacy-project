import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";

import { SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { LetterMatchIcon } from "@/ui/icons";
import { shuffleLetters } from "@/utils/level-one";

/**
 *
 * For the alphabets we have two states, leftLetters and rightLetters, the right ones are randomly shuffled, matchedPairs will have values that the user have matched
 * correctly for instance if he tapped on a and A, p and P, the matchedPairs array
 * will look like ["a","p"]
 * On tapping of the left letter if it's not in the matchedPairs we will store it in selectedLeft
 * On the tap of the right letter if it matches with the selectedLeft (uppercase) we add it to the matchedPairs array and check if all of them have been matched if so
 * render activity completed
 * If it doesn't match we reset the selected left tapped item
 */

const LetterMatching = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  const [leftLetters, setLeftLetters] = useState<ILetter[]>([]);
  const [rightLetters, setRightLetters] = useState<ILetter[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<ILetter | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

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
    onPress: (letter: ILetter) => void
  ) => (
    <View className="items-center">
      {letters.map((letter) => (
        <TouchableOpacity
          key={letter.id}
          className={clsx(
            "m-[14px] size-[64px] items-center justify-center rounded-[10px] ",
            {
              "bg-[#8AC65B]": matchedPairs.includes(letter.value.toLowerCase()),
              "bg-[#7471F0]": selectedLeft?.id === letter.id,
              "bg-colors-purple-500":
                !matchedPairs.includes(letter.value.toLowerCase()) &&
                selectedLeft?.id !== letter.id,
            }
          )}
          onPress={() => onPress(letter)}
        >
          <Text className="text-2xl font-bold text-white">{letter.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView>
      <Header title="Matching" modalRef={dynamicModalRef} />
      <View className="flex flex-row  justify-between px-10">
        {renderLetters(leftLetters, handleLeftLetterPress)}
        {renderLetters(rightLetters, handleRightLetterPress)}
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter introduction activity</Text>
          <View className="flex h-20 items-center justify-center">
            <LetterMatchIcon />
          </View>
          <Text className="mt-4">
            Start your language learning adventure. Let A, B, C, and D be the
            building blocks of your multilingual journey!
          </Text>
        </View>
      </DynamicModal>
    </SafeAreaView>
  );
};

export default LetterMatching;
