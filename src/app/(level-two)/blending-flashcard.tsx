import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  BLENDING_WORD_LIST_BY_LEVEL,
  requireImageForWord,
} from "@/assets/blending";
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { BlendingFlashCard } from "@/ui/components/blending-flashcard";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { globalStyles } from "@/ui/styles";

// TODO: Maybe construct in assets/blending/index.ts?
const BLENDING_FLASHCARDS = BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1.map(
  (word: string) => {
    return {
      id: word,
      letters: word.split(""),
      word: word,
      svg: requireImageForWord(word),
    };
  },
);

// TODO: PLUG IN NATIVE AUDIO SOURCES...

const colors = {
  background_color: APP_COLORS.backgroundgrey,
  primary_color: SECTION_COLORS.blending.primary,
  secondary_color: SECTION_COLORS.blending.light,
  off_white_color: APP_COLORS.offwhite,
  off_black_color: APP_COLORS.offblack,
};

export default function FlashCardContainer() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: APP_COLORS.backgroundgrey,
    },
    scrollable: {
      flex: 1,
      width: "100%",
      backgroundColor: APP_COLORS.backgroundgrey,
    },
  });

  const {
    playGuideAudio,
    stopGuideAudio,
    isPlaying: isPlayingGuidanceAudio,
  } = useGuideAudio({
    screenName: "blending-flashcard",
    module: "blending-module",
  });

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["top", "right", "left"]}
    >
      <GuidanceAudioHeader
        title="Sound"
        isPlaying={isPlayingGuidanceAudio}
        onPressGuide={playGuideAudio}
        onStopGuide={stopGuideAudio}
        showLetterCaseSwitch={true}
      />
      <FlatList
        style={styles.scrollable}
        data={BLENDING_FLASHCARDS}
        renderItem={({ item }) => (
          <BlendingFlashCard content={item} colors={colors} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </SafeAreaView>
  );
}
