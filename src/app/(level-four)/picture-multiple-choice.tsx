import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { SvgProps } from "react-native-svg";

import {
  ENGLISH_VOCABULARY_AUDIO_SOURCES,
  VOCABULARY_IMAGE_SOURCES,
  VOCABULARY_WORD_LIST_BY_LEVEL,
} from "@/assets/vocabulary";
import { WordChoiceScreen } from "@/ui/components/multiple-choice";
import type { WordSet } from "@/ui/components/multiple-choice/types";
import Header from "@/ui/core/headers";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EnglishButton } from "@/ui/icons/circular/english-button";
import { SnailButton } from "@/ui/icons/circular/snail-button";
import { HEIGHT, IS_IOS } from "@/utils/layout";

import { SECTION_COLOR } from "./_layout";

// TODO: Refactor this out to _layout?
const buttonStyles: ButtonColorProps = {
  primaryColor: SECTION_COLOR.sectionPrimaryColor,
  secondaryColor: SECTION_COLOR.sectionSecondaryColor,
  offwhiteColor: SECTION_COLOR.appWhiteColor,
  offblackColor: SECTION_COLOR.appBlackColor,
  backgroundColor: SECTION_COLOR.appBackgroundColor,
};

// TODO: Not sure if we want to generate these or have a static list.
const generatedWordSets: WordSet[] = VOCABULARY_WORD_LIST_BY_LEVEL.LEVEL_1.map(
  (word: string) => {
    return {
      correctAnswer: word,
      options: VOCABULARY_WORD_LIST_BY_LEVEL.LEVEL_1.filter(
        (option) => option !== word,
      )
        .slice(0, 2)
        .concat(word),
    };
  },
);

const RenderFrontCard = (word: string) => {
  // TODO: Refactor this out of function
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      // space-around
      justifyContent: "space-evenly",
    },
  });
  return (
    <View style={styles.container}>
      <AnimatedAudioButton
        audioSource={ENGLISH_VOCABULARY_AUDIO_SOURCES[word].normal_speed}
        width={100}
        height={100}
      >
        <View style={[{ width: 100, height: 100 }]}>
          <EnglishButton {...buttonStyles} />
        </View>
      </AnimatedAudioButton>
      <AnimatedAudioButton
        audioSource={ENGLISH_VOCABULARY_AUDIO_SOURCES[word].snail_speed}
        width={100}
        height={100}
      >
        <View style={[{ width: 100, height: 100 }]}>
          <SnailButton {...buttonStyles} />
        </View>
      </AnimatedAudioButton>
    </View>
  );
};

const renderBackCardSnail = (word: string) => {
  const styles = StyleSheet.create({
    cardContainer: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
      padding: 5,
    },
  });

  const SvgComponent = VOCABULARY_IMAGE_SOURCES[
    word as keyof typeof VOCABULARY_IMAGE_SOURCES
  ].file as React.FC<SvgProps>;

  return (
    <View style={[styles.cardContainer]}>
      <SvgComponent
        width="60%"
        height="60%"
        preserveAspectRatio="xMidYMid meet"
      />
    </View>
  );
};

const RenderOption = (
  word: string,
  // isSelected: boolean,
  isDisabled: boolean,
  // isError: boolean,
  // isSuccess: boolean,
  // isCorrect: boolean,
  // colors: SectionColorTheme,
) => {
  // TODO: Refactor this out of function
  const styles = StyleSheet.create({
    cardContainer: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
      padding: 5,
    },
  });

  const SvgComponent = VOCABULARY_IMAGE_SOURCES[
    word as keyof typeof VOCABULARY_IMAGE_SOURCES
  ].file as React.FC<SvgProps>;

  return (
    <View style={[styles.cardContainer]}>
      <SvgComponent
        width="90%"
        height="90%"
        preserveAspectRatio="xMidYMid meet"
        opacity={isDisabled ? 0.3 : 1} // Reduce opacity when disabled
      />
    </View>
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
          renderBackCard={renderBackCardSnail}
          renderOption={RenderOption}
        />
      </View>
    </SafeAreaView>
  );
};

export default AudioMultipleChoice;
