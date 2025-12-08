import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ALPHABET_LETTER_LIST_BY_LEVEL } from "@/assets/alphabet";
import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet/alphabet_sounds";
import type { SectionColorTheme } from "@/constants/routes";
import { APP_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { WordChoiceScreen } from "@/ui/components/multiple-choice";
import type { WordSet } from "@/ui/components/multiple-choice/types";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { NameButton } from "@/ui/icons/circular/name-button";
import { globalStyles } from "@/ui/styles";
import { generateMultipleChoiceOptions, shuffleArray } from "@/utils/helpers";

import { SECTION_COLOR } from "./_layout";

// TODO: Refactor this color logic...
const sectionColorTheme: SectionColorTheme = {
  appBackgroundColor: APP_COLORS.backgroundgrey,
  appWhiteColor: APP_COLORS.offwhite,
  appBlackColor: APP_COLORS.offblack,
  appGreyColor: APP_COLORS.grey,
  appGreenColor: APP_COLORS.green,
  appRedColor: APP_COLORS.red,
  sectionPrimaryColor: SECTION_COLOR.primary,
  sectionSecondaryColor: SECTION_COLOR.dark,
};

// TODO: Not sure if we want to generate these or have a static list.

// TODO: Refactor this out to _layout?
const buttonStyles: ButtonColorProps = {
  primaryColor: SECTION_COLOR.primary,
  secondaryColor: SECTION_COLOR.dark,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const RenderFrontCard = (letter: string) => {
  return (
    <AnimatedAudioButton
      audioSource={ALPHABET_AUDIO_SOURCES[letter].name}
      width={120}
      height={120}
    >
      <View style={[{ width: 120, height: 120 }]}>
        <NameButton {...buttonStyles} />
      </View>
    </AnimatedAudioButton>
  );
};

const RenderBackCard = (letter: string, colors: SectionColorTheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: APP_COLORS.backgroundgrey,
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
    cardBackText: {
      color: colors.appBlackColor,
      fontFamily: "Thomas",
      fontSize: 140,
      lineHeight: 168,
    },
  });

  const { isLowercase } = useLetterCase();

  return (
    <View style={styles.cardContainer}>
      {/* Text */}
      <Text style={styles.cardBackText}>
        {isLowercase ? letter.toLowerCase() : letter.toUpperCase()}
      </Text>
    </View>
  );
};

const RenderOption = (
  letter: string,
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
      fontSize: 70,
      lineHeight: 84,
      color: APP_COLORS.offblack,
    },
    disabledText: {
      color: colors.appWhiteColor,
    },
  };

  const { isLowercase } = useLetterCase();

  return (
    <Text style={[styles.optionText, isDisabled && styles.disabledText]}>
      {isLowercase ? letter.toLowerCase() : letter.toUpperCase()}
    </Text>
  );
};

const LetterNameScreen = () => {
  const [letterSets, setLetterSets] = useState<WordSet[]>([]);

  const generateNewSets = useCallback(() => {
    const newLetterSets = shuffleArray([
      ...ALPHABET_LETTER_LIST_BY_LEVEL.LEVEL_1,
    ]).map(
      (letter: string): WordSet => ({
        correctAnswer: letter,
        options: generateMultipleChoiceOptions(
          ALPHABET_LETTER_LIST_BY_LEVEL.LEVEL_1,
          letter,
          3,
        ),
      }),
    );
    setLetterSets(newLetterSets);
  }, []);

  useEffect(() => {
    generateNewSets();
  }, [generateNewSets]);

  const {
    playGuideAudio,
    stopGuideAudio,
    isPlaying: isPlayingGuidanceAudio,
  } = useGuideAudio({
    screenName: "letter-name",
    module: "alphabet-module",
  });

  if (letterSets.length === 0) {
    return null; // Or a loading spinner
  }

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["top", "left", "right"]}
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
          wordSets={letterSets}
          colors={sectionColorTheme}
          renderFrontCard={RenderFrontCard}
          renderBackCard={RenderBackCard}
          renderOption={RenderOption}
          onGameComplete={generateNewSets}
        />
      </View>
    </SafeAreaView>
  );
};

export default LetterNameScreen;
