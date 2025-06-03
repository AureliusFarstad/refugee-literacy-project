import { useRef, useState } from "react";
import { Animated } from "react-native";

import type { WordGameState, WordSet } from "../types";

/**
 * Custom hook to manage word game state and animations
 */
export const useWordGame = (
  wordSets: WordSet[],
  onGameComplete?: () => void,
): WordGameState => {
  // Game state
  const [currentSetIndex, setCurrentSetIndex] = useState<number>(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [disabledWords, setDisabledWords] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isInteractionLocked, setIsInteractionLocked] = useState<boolean>(false);

  // Animations
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const flipAnimation = useRef(new Animated.Value(0)).current;

  // Animation interpolations
  const flipValue = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backFlipValue = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontOpacity = flipAnimation.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [1, 0, 0],
  });

  const backOpacity = flipAnimation.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [0, 0, 1],
  });

  // Reset game state
  const resetGame = (): void => {
    flipAnimation.setValue(0);
    setSelectedWord(null);
    setDisabledWords([]);
    setIsError(false);
    setIsSuccess(false);
    setIsInteractionLocked(false);
  };

  // Move to the next word set
  const moveToNextSet = (): void => {
    if (currentSetIndex < wordSets.length - 1) {
      setCurrentSetIndex((prev) => prev + 1);
      resetGame();
    } else {
      // Game finished. Resets the sets.
      onGameComplete?.();
      setCurrentSetIndex(0);
      resetGame();
    }
  };

  // Shake animation for incorrect answers
  const startShake = (): void => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsError(false);
      setIsInteractionLocked(false);
    });
  };

  // Flip animation for correct answers
  const startFlip = (): void => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      setIsInteractionLocked(false);
      // Wait before moving to next set
      setTimeout(moveToNextSet, 1500);
    });
  };

  // Handle word selection
  const handleWordSelect = (word: string): void => {
    if (isInteractionLocked || disabledWords.includes(word)) {
      return;
    }

    setIsInteractionLocked(true);
    setSelectedWord(word);
    const currentWordSet = wordSets[currentSetIndex];

    if (word !== currentWordSet.correctAnswer) {
      setIsError(true);
      startShake();

      setTimeout(() => {
        setDisabledWords([...disabledWords, word]);
        setSelectedWord(null);
      }, 800);
    } else {
      setIsSuccess(true);
      startFlip();
    }
  };

  return {
    currentSetIndex,
    selectedWord,
    disabledWords,
    isError,
    isSuccess,
    moveToNextSet,
    resetGame,
    handleWordSelect,
    startShake,
    startFlip,
    shakeAnimation,
    flipAnimation,
    flipValue,
    backFlipValue,
    frontOpacity,
    backOpacity,
    isInteractionLocked,
  };
};
