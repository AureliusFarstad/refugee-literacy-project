import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SECTION_COLORS, APP_COLORS } from "@/constants/routes";

import Header from "@/ui/core/headers";
import { BlendingFlashCard } from "@/ui/components/blending-flashcard";

const BLENDING_FLASHCARDS = [
  {
    id: "1",
    letters: ["p", "a", "n"],
    word: "pan",
    image:
      "https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    letters: ["t", "i", "n"],
    word: "tin",
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    letters: ["p", "i", "n"],
    word: "pin",
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    letters: ["a", "n", "t"],
    word: "ant",
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    letters: ["i", "n"],
    word: "in",
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    letters: ["t", "a", "p"],
    word: "tap",
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
      // paddingBottom: 1000, // TODO: See comment below.
    }
  });

  return (
    <SafeAreaView>
      <Header title="Blending Flashcards" />
      <View className="flex h-full w-full items-center">
        <FlatList
          style={styles.scrollable}
          data={BLENDING_FLASHCARDS}
          renderItem={({ item }) => (
            <BlendingFlashCard content={item} colors={colors} />
          )}
          keyExtractor={(item) => item.id}
        />
        {/* Help TODO: Om, I can't get a nice padding on the bottom of the scrollable area to align with the bottom tab bar*/}
        <View className="t-400">
          <Text>Hello.</Text>
        </View>
      </View>  
    </SafeAreaView>
  );
}
