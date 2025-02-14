import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LEVEL_COLORS } from "@/constants/routes";
import { BlendingFlashCard } from "@/ui/components/blending-flashcard";
import Header from "@/ui/core/headers";

const FLASH_CARDS = [
  {
    id: "1",
    letters: ["p", "a", "n"],
    word: "pan",
    image:
      "https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    letters: ["s", "i", "t"],
    word: "sit",
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const colors = {
  background_color: "#F2EFF0",
  primary_color: LEVEL_COLORS.levelFour.primary,
  secondary_color: LEVEL_COLORS.levelFour.secondary,
  off_white_color: "#FAFAFA",
  off_black_color: "#313136",
};

export default function FlashCardContainer() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F2EFF0",
      }}
    >
      <Header title="Blending Flashcards" />

      <FlatList
        data={FLASH_CARDS}
        renderItem={({ item }) => (
          <BlendingFlashCard content={item} colors={colors} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
