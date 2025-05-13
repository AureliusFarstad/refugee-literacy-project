import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import {
  ALPHABET_LETTER_LIST_BY_LEVEL,
} from "@/assets/alphabet";
import {
  ALPHABET_AUDIO_SOURCES
} from "@/assets/alphabet_sounds";
import type { SectionColorTheme } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { WordChoiceScreen } from "@/ui/components/multiple-choice";
import type { WordSet } from "@/ui/components/multiple-choice/types";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { HEIGHT, IS_IOS } from "@/utils/layout";

import { SECTION_COLOR } from "./_layout";
import { APP_COLORS } from "@/constants/routes";
import { NameButton } from "@/ui/icons/circular/name-button";

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
const generatedLetterSets: WordSet[] = ALPHABET_LETTER_LIST_BY_LEVEL.LEVEL_1.map(
  (letter: string) => {
    return {
      correctAnswer: letter,
      options: ALPHABET_LETTER_LIST_BY_LEVEL.LEVEL_1.filter(
        (option) => option !== letter,
      )
        .slice(0, 2)
        .concat(letter),
    };
  },
);

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
      fontSize: 24,
      color: colors.appBlackColor,
      textAlign: "center",
      fontFamily: "sans-serif",
      // letterSpacing: 2, // TODO: Maybe have letter spacing everywhere?
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
      fontSize: 24,
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
  const insets = useSafeAreaInsets();
  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "multiple-choice",
    module: "alphabet-module",
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
          flex: 1,
        }}
      >
        <GuidanceAudioHeader
          title="Sound"
          isPlaying={isPlayingGuidanceAudio}
          onPressGuide={playGuideAudio}
          colorType="DEFAULT"
        />
        <WordChoiceScreen
          wordSets={generatedLetterSets}
          colors={sectionColorTheme}
          renderFrontCard={RenderFrontCard}
          renderBackCard={RenderBackCard}
          renderOption={RenderOption}
        />
      </View>
    </SafeAreaView>
  );
};

export default LetterNameScreen;
