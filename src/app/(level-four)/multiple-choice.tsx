import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { SectionColorTheme } from "@/constants/routes";
import { WordChoiceScreen } from "@/ui/components/multiple-choice";
import Header from "@/ui/core/headers";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { HEIGHT, IS_IOS } from "@/utils/layout";

import { SECTION_COLOR } from "./_layout";
// import { useLetterCase } from "@/ui/core/headers/letter-case-context";
// import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
// import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
// import { EarButton } from "@/ui/icons/circular/ear-button";

const renderFrontCardSnail = (word: string, colors: any) => {
  const styles = {
    cardText: {
      fontSize: 36,
      color: colors.appBlackColor,
    },
  };
  return <Text style={styles.cardText}>{word}</Text>;
};

const renderBackCardSnail = (word: string, colors: any) => {
  const styles = {
    cardText: {
      fontSize: 36,
      color: colors.appBlackColor,
    },
  };
  return <Text style={styles.cardText}>{word}</Text>;
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

  // <Text style={styles.cardText}>{word}</Text>;
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
          wordSets={[{ correctAnswer: "TAP", options: ["PAN", "TAP", "NAP"] }]}
          colors={SECTION_COLOR}
          renderFrontCard={renderFrontCardSnail}
          renderBackCard={renderBackCardSnail}
          renderOption={RenderOption}
        />
      </View>
    </SafeAreaView>
  );
};

export default AudioMultipleChoice;
