import React, { useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  BLENDING_AUDIO_SOURCES,
  BLENDING_WORD_LIST_BY_LEVEL,
} from "@/assets/blending";
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import Header from "@/ui/core/headers";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EarButton } from "@/ui/icons/circular/ear-button";
interface ColorTheme {
  appBackgroundColor: string;
  appWhiteColor: string;
  appBlackColor: string;
  appGreyColor: string;
  appGreenColor: string;
  appRedColor: string;
  sectionPrimaryColor: string;
  sectionSecondaryColor: string;
}
interface WordSet {
  correctAnswer: string;
  options: string[];
}
interface WordChoiceScreenProps {
  wordSets?: WordSet[];
  audioSets?: Record<string, { file: any }>;
  // imageSets?: Record<string, { file: React.FC<SvgProps> }>;
  colors: ColorTheme;
  onGameComplete?: () => void;
}

type AnimatedValue = Animated.Value;
type AnimatedInterpolation = Animated.AnimatedInterpolation<number>;

const GeneratedWordSets: WordSet[] = BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1.map(
  (word: string) => {
    return {
      correctAnswer: word,
      options: BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1.filter(
        (option) => option !== word,
      )
        .slice(0, 2)
        .concat(word),
    };
  },
);

const DEFAULT_COLORS: ColorTheme = {
  appBackgroundColor: APP_COLORS.backgroundgrey,
  appWhiteColor: APP_COLORS.offwhite,
  appBlackColor: APP_COLORS.offblack,
  appGreyColor: APP_COLORS.grey,
  appGreenColor: APP_COLORS.green,
  appRedColor: APP_COLORS.red,
  sectionPrimaryColor: SECTION_COLORS.blending.primary,
  sectionSecondaryColor: SECTION_COLORS.blending.light,
};

const WordChoiceScreen: React.FC<WordChoiceScreenProps> = ({
  wordSets = GeneratedWordSets,
  audioSets = BLENDING_AUDIO_SOURCES,
  // imageSets = BLENDING_IMAGE_SOURCES,
  colors = DEFAULT_COLORS,
  onGameComplete,
}) => {
  const [currentSetIndex, setCurrentSetIndex] = useState<number>(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [disabledWords, setDisabledWords] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const shakeAnimation = useRef<AnimatedValue>(new Animated.Value(0)).current;
  const flipAnimation = useRef<AnimatedValue>(new Animated.Value(0)).current;

  const currentWordSet = wordSets[currentSetIndex];

  const flipValue: AnimatedInterpolation = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backFlipValue: AnimatedInterpolation = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontOpacity: AnimatedInterpolation = flipAnimation.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [1, 0, 0],
  });

  const backOpacity: AnimatedInterpolation = flipAnimation.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [0, 0, 1],
  });

  const resetGame = (): void => {
    flipAnimation.setValue(0);
    setSelectedWord(null);
    setDisabledWords([]);
    setIsError(false);
    setIsSuccess(false);
  };

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
    });
  };

  const startFlip = (): void => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      // Wait for 1.5 seconds after flip completes before moving to next set
      setTimeout(moveToNextSet, 1500);
    });
  };

  const handleWordSelect = (word: string): void => {
    if (disabledWords.includes(word)) {
      return;
    }

    setSelectedWord(word);

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

  const buttonStyles: ButtonColorProps = {
    primaryColor: colors.sectionPrimaryColor,
    secondaryColor: colors.sectionSecondaryColor,
    offwhiteColor: colors.appWhiteColor,
    offblackColor: colors.appBlackColor,
    backgroundColor: colors.appBackgroundColor,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.appBackgroundColor,
    },
    content: {
      flex: 1,
      padding: 20,
      paddingBottom: 40,
      justifyContent: "space-between", // Ensures top, middle, and bottom spacing
      alignItems: "center",
    },
    progressContainer: {
      height: 40,
      alignItems: "center",
      justifyContent: "center", // Centers the progress text
    },
    progressText: {
      fontSize: 18,
      fontWeight: "500",
      color: colors.appBlackColor,
    },
    cardContainer: {
      width: 280,
      height: 260,
      maxHeight: 260,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center", // Ensures it stays centered
      flex: 1, // Takes up available space
    },
    cardFace: {
      borderRadius: 16,
      backgroundColor: "white",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      backfaceVisibility: "hidden",
      width: "100%",
      height: "100%",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: colors.sectionPrimaryColor,
    },
    cardFront: {
      zIndex: 1,
    },
    cardBackImageContainer: {
      width: "100%",
      height: 200,
      padding: 20,
      backgroundColor: colors.appBackgroundColor,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 40,
      position: "relative",
    },
    cardBackImage: {
      // width: "100%",
      // height: 200,
      borderRadius: 8,
    },
    cardBackText: {
      fontSize: 36,
      fontWeight: "bold",
      color: colors.appWhiteColor,
    },
    choicesContainer: {
      flexDirection: "row",
      justifyContent: "center", // Centers buttons
      flexWrap: "wrap",
      alignItems: "center",
      alignSelf: "center", // Center this container itself
    },
    choiceButton: {
      backgroundColor: "white",
      width: 80, // Fixed size
      height: 80, // Fixed size
      aspectRatio: 1, // Ensures square
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    selectedButton: {
      backgroundColor: colors.sectionPrimaryColor,
    },
    errorButton: {
      backgroundColor: colors.appRedColor,
    },
    successButton: {
      backgroundColor: colors.appGreenColor,
    },
    disabledButton: {
      backgroundColor: colors.appGreyColor,
    },
    choiceText: {
      fontSize: 24,
      fontWeight: "500",
    },
    disabledText: {
      color: colors.appWhiteColor,
    },
  });

  const { isLowercase } = useLetterCase();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Blending Multiple Choice" />
      <View style={styles.content}>
        {/* Progress Tracker TODO: Maybe remove? */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {currentSetIndex + 1} / {wordSets.length}
          </Text>
        </View>

        {/* Card Front */}
        <View style={styles.cardContainer}>
          <Animated.View
            style={[
              styles.cardFace,
              styles.cardFront,
              {
                opacity: frontOpacity,
                transform: [{ rotateY: flipValue }],
              },
            ]}
          >
            {/* Audio Button */}
            <AnimatedAudioButton
              audioSource={
                (audioSets as Record<string, { file: any }>)[
                  currentWordSet.correctAnswer
                ].file
              }
              width={120}
              height={120}
            >
              <View style={[{ width: 120, height: 120 }]}>
                <EarButton {...buttonStyles} />
              </View>
            </AnimatedAudioButton>
          </Animated.View>
          <Animated.View
            style={[
              styles.cardFace,
              {
                opacity: backOpacity,
                transform: [{ rotateY: backFlipValue }],
              },
            ]}
          >
            <Text style={styles.cardBackText}>
              {isLowercase
                ? currentWordSet.correctAnswer.toLowerCase()
                : currentWordSet.correctAnswer.toUpperCase()}
            </Text>
          </Animated.View>
        </View>

        <View style={[styles.choicesContainer]}>
          {currentWordSet.options.map((word) => (
            <TouchableOpacity
              key={word}
              onPress={() => handleWordSelect(word)}
              disabled={disabledWords.includes(word) || isSuccess}
              style={{ flex: 1 }}
            >
              <Animated.View
                style={[
                  styles.choiceButton,
                  selectedWord === word && styles.selectedButton,
                  isError && selectedWord === word && styles.errorButton,
                  isSuccess &&
                    word === currentWordSet.correctAnswer &&
                    styles.successButton,
                  disabledWords.includes(word) && styles.disabledButton,
                  selectedWord === word && {
                    transform: [
                      {
                        translateX: shakeAnimation,
                      },
                    ],
                  },
                ]}
              >
                <Text
                  style={[
                    styles.choiceText,
                    disabledWords.includes(word) && styles.disabledText,
                  ]}
                >
                  {isLowercase ? word.toLowerCase() : word.toUpperCase()}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WordChoiceScreen;
