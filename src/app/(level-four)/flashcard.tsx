import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import { VocabularyFlashCard } from "@/ui/components/vocabulary-flashcard";
import Header from "@/ui/core/headers";
import { HEIGHT, IS_IOS } from "@/utils/layout";

const VOCABULARY_FLASHCARDS = [
  {
    id: "1",
    word: "pan",
    image:
      "https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    word: "tap",
    image:
      "https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
