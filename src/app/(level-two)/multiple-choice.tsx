import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { SvgProps } from "react-native-svg";

import {
  BLENDING_AUDIO_SOURCES,
  BLENDING_IMAGE_SOURCES,
  BLENDING_WORD_LIST_BY_LEVEL,
} from "@/assets/blending";
import type { SectionColorTheme } from "@/constants/routes";
import { WordChoiceScreen } from "@/ui/components/multiple-choice";
import type { WordSet } from "@/ui/components/multiple-choice/types";
import Header from "@/ui/core/headers";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EarButton } from "@/ui/icons/circular/ear-button";
import { HEIGHT, IS_IOS } from "@/utils/layout";

import { SECTION_COLOR } from "./_layout";
// TODO: Not sure if we want to generate these or have a static list.
const generatedWordSets: WordSet[] = BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1.map(
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
      audioSource={BLENDING_AUDIO_SOURCES[word].file}
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
      fontSize: 24,
      color: colors.appBlackColor,
      textAlign: "center",
      fontFamily: "sans-serif",
      // letterSpacing: 2, // TODO: Maybe have letter spacing everywhere?
    },
  });

  const SvgComponent = BLENDING_IMAGE_SOURCES[
    word as keyof typeof BLENDING_IMAGE_SOURCES
  ].file as React.FC<SvgProps>;

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
      fontSize: 24,
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
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
          flex: 1,
        }}
      >
        <Header title="Image Multiple Choice" />
        <WordChoiceScreen
          wordSets={generatedWordSets}
          colors={SECTION_COLOR}
          renderFrontCard={RenderFrontCard}
          renderBackCard={RenderBackCard}
          renderOption={RenderOption}
        />
      </View>
    </SafeAreaView>
  );
};

export default AudioMultipleChoice;
