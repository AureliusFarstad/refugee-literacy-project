import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ENGLISH_VOCABULARY_AUDIO_SOURCES,
  NATIVE_VOCABULARY_AUDIO_SOURCES,
  VOCABULARY_IMAGE_SOURCES,
  VOCABULARY_WORD_LIST_BY_LEVEL,
} from "@/assets/vocabulary";
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import { VocabularyFlashCard } from "@/ui/components/vocabulary-flashcard";
import Header from "@/ui/core/headers";
import { HEIGHT, IS_IOS } from "@/utils/layout";

// TODO: Maybe construct in assets/blending/index.ts?
const VOCABULARY_FLASHCARDS = VOCABULARY_WORD_LIST_BY_LEVEL.LEVEL_1.map(
  (word: string) => {
    return {
      id: word,
      svg: VOCABULARY_IMAGE_SOURCES[
        word as keyof typeof VOCABULARY_IMAGE_SOURCES
      ].file, // TODO: Improve syntax here with types?
      english_normal_speed:
        ENGLISH_VOCABULARY_AUDIO_SOURCES[
          word as keyof typeof ENGLISH_VOCABULARY_AUDIO_SOURCES
        ].normal_speed,
      english_snail_speed:
        ENGLISH_VOCABULARY_AUDIO_SOURCES[
          word as keyof typeof ENGLISH_VOCABULARY_AUDIO_SOURCES
        ].snail_speed,
      native_file:
        NATIVE_VOCABULARY_AUDIO_SOURCES[
          word as keyof typeof NATIVE_VOCABULARY_AUDIO_SOURCES
        ].file,
    };
  },
);

const colors = {
  background_color: APP_COLORS.backgroundgrey,
  primary_color: SECTION_COLORS.vocabulary.primary,
  secondary_color: SECTION_COLORS.vocabulary.light,
  off_white_color: APP_COLORS.offwhite,
  off_black_color: APP_COLORS.offblack,
};

export default function FlashCardContainer() {
  // TODO: Refactor StyleSheet out of function?
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: APP_COLORS.backgroundgrey,
    },
    scrollable: {
      flex: 1,
      width: "100%",
      backgroundColor: APP_COLORS.backgroundgrey,
      // paddingBottom: 1000, // TODO: See comment below.
    },
  });

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
        <Header title="Blending Flashcards" />
        <View className="flex size-full items-center">
          <FlatList
            style={styles.scrollable}
            data={VOCABULARY_FLASHCARDS}
            renderItem={({ item }) => (
              <VocabularyFlashCard content={item} colors={colors} />
            )}
            keyExtractor={(item) => item.id}
          />
          {/* Help TODO: Om, I can't get a nice padding on the bottom of the scrollable area to align with the bottom tab bar*/}
        </View>
      </View>
    </SafeAreaView>
  );
}
