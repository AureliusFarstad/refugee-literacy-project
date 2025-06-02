import { FlatList, StyleSheet } from "react-native";
import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { VOCABULARY_WORD_LIST_BY_LEVEL } from "@/assets/vocabulary";
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { VocabularyFlashCard } from "@/ui/components/vocabulary-flashcard";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { globalStyles } from "@/ui/styles";

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

  // TODO: update with correct resource
  const { isPlaying, playGuideAudio } = useGuideAudio({
    screenName: "flashcard",
    module: "vocabulary-module",
  });

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["top", "right", "left"]}
    >
      <GuidanceAudioHeader
        title="Blending Flashcards"
        isPlaying={isPlaying}
        onPressGuide={playGuideAudio}
        showLetterCaseSwitch={false}
      />
      <FlatList
        style={styles.scrollable}
        data={VOCABULARY_WORD_LIST_BY_LEVEL.LEVEL_1}
        renderItem={({ item }) => (
          <VocabularyFlashCard word={item} colors={colors} />
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </SafeAreaView>
  );
}
