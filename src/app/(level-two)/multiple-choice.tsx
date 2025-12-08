import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  BLENDING_WORD_LIST_BY_LEVEL,
  requireEnglishAudioForWord,
  requireImageForWord,
} from "@/assets/blending";
import { type SectionColorTheme } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { WordChoiceScreen } from "@/ui/components/multiple-choice";
import type { WordSet } from "@/ui/components/multiple-choice/types";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EarButton } from "@/ui/icons/circular/ear-button";
import { globalStyles } from "@/ui/styles";
import { generateMultipleChoiceOptions, shuffleArray } from "@/utils/helpers";

import { SECTION_COLOR } from "./_layout";
// TODO: Not sure if we want to generate these or have a static list.

// TODO: Refactor this out to _layout?
const buttonStyles: ButtonColorProps = {
  primaryColor: SECTION_COLOR.sectionPrimaryColor,
  secondaryColor: SECTION_COLOR.sectionSecondaryColor,
  offwhiteColor: SECTION_COLOR.appWhiteColor,
  offblackColor: SECTION_COLOR.appBlackColor,
  backgroundColor: SECTION_COLOR.appBackgroundColor,
};

const RenderFrontCard = (word: string) => {
  return (
    <AnimatedAudioButton
      audioSource={requireEnglishAudioForWord(word)}
      width={120}
      height={120}
    >
      <View style={[{ width: 120, height: 120 }]}>
        <EarButton {...buttonStyles} />
      </View>
    </AnimatedAudioButton>
  );
};

const RenderBackCard = (word: string, colors: SectionColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fafafa",
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
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%", // Ensure the container has width
      padding: 10,
    },
    cardBackImageContainer: {
      width: "100%", // Full width of parent container
      height: "70%", // 70% of parent container height
      borderRadius: 12, // TODO: Check this value
      backgroundColor: colors.appGreyColor, // TODO: Check this value
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    cardBackImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain", // This ensures the image fits while maintaining aspect ratio
    },
    cardBackText: {
      fontSize: 42,
      lineHeight: 48,
      color: colors.appBlackColor,
      textAlign: "center",
      fontFamily: "Thomas",
      // letterSpacing: 2, // TODO: Maybe have letter spacing everywhere?
    },
  });

  const SvgComponent = requireImageForWord(word);

  const { isLowercase } = useLetterCase();

  return (
    <View style={styles.cardContainer}>
      {/* Image */}
      <View style={styles.cardBackImageContainer}>
        <SvgComponent style={styles.cardBackImage} />
      </View>
      {/* Text */}
      <Text style={styles.cardBackText}>
        {isLowercase ? word.toLowerCase() : word.toUpperCase()}
      </Text>
    </View>
  );
};

const RenderOption = (
  word: string,
  isSelected: boolean,
  isDisabled: boolean,
  isError: boolean,
  isSuccess: boolean,
  isCorrect: boolean,
  colors: SectionColorTheme,
) => {
  const styles = {
    optionText: {
      fontFamily: "Thomas",
      fontSize: 40,
      lineHeight: 50,
      color: colors.appBlackColor,
    },
    disabledText: {
      color: colors.appWhiteColor,
    },
  };

  const { isLowercase } = useLetterCase();

  return (
    <Text style={[styles.optionText, isDisabled && styles.disabledText]}>
      {isLowercase ? word.toLowerCase() : word.toUpperCase()}
    </Text>
  );
};

const AudioMultipleChoice = () => {
  const [wordSets, setWordSets] = useState<WordSet[]>([]);

  const generateNewSets = useCallback(() => {
    const newWordSets = shuffleArray([
      ...BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1,
    ]).map(
      (word: string): WordSet => ({
        correctAnswer: word,
        options: generateMultipleChoiceOptions(
          BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1,
          word,
          3,
        ),
      }),
    );
    setWordSets(newWordSets);
  }, []);

  useEffect(() => {
    generateNewSets();
  }, [generateNewSets]);

  const {
    playGuideAudio,
    stopGuideAudio,
    isPlaying: isPlayingGuidanceAudio,
  } = useGuideAudio({
    screenName: "multiple-choice-tab",
    module: "blending-module",
  });

  if (wordSets.length === 0) {
    return null; // Or a loading spinner
  }

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["top", "right", "left"]}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <GuidanceAudioHeader
          title="Sound"
          isPlaying={isPlayingGuidanceAudio}
          onPressGuide={playGuideAudio}
          onStopGuide={stopGuideAudio}
          showLetterCaseSwitch={true}
        />
        <WordChoiceScreen
          wordSets={wordSets}
          colors={SECTION_COLOR}
          renderFrontCard={RenderFrontCard}
          renderBackCard={RenderBackCard}
          renderOption={RenderOption}
          onGameComplete={generateNewSets}
        />
      </View>
    </SafeAreaView>
  );
};

export default AudioMultipleChoice;
