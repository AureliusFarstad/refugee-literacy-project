import { FlatList, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { VOCABULARY_WORD_LIST_BY_LEVEL } from "@/assets/vocabulary";
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { VocabularyFlashCard } from "@/ui/components/vocabulary-flashcard";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { globalStyles } from "@/ui/styles";
import { HEIGHT, IS_IOS } from "@/utils/layout";

const Footer = () => {
  return <View className="h-40" />;
};

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
  // TODO: update with correct resource
  const { isPlaying, playGuideAudio } = useGuideAudio({
    screenName: "flashcard",
    module: "vocabulary-module",
  });

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <View
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
          flex: 1,
        }}
      >
        <GuidanceAudioHeader
          title="Blending Flashcards"
          isPlaying={isPlaying}
          onPressGuide={playGuideAudio}
          showLetterCaseSwitch={false}
        />
        <View className="flex size-full items-center">
          <FlatList
            style={styles.scrollable}
            data={VOCABULARY_WORD_LIST_BY_LEVEL.LEVEL_1}
            renderItem={({ item }) => (
              <VocabularyFlashCard word={item} colors={colors} />
            )}
            keyExtractor={(item) => item}
            ListFooterComponent={Footer}
          />
          {/* Help TODO: Om, I can't get a nice padding on the bottom of the scrollable area to align with the bottom tab bar*/}
        </View>
      </View>
    </SafeAreaView>
  );
}
