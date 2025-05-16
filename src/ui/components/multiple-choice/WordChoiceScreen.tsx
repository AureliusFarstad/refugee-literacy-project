import React from "react";
import { StyleSheet, View } from "react-native";

import { BLENDING_WORD_LIST_BY_LEVEL } from "@/assets/blending";
// Import default values
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";

import ChoiceOptions from "./components/ChoiceOptions";
// Import components
import FlipCard from "./components/FlipCard";
// Import custom hook
import { useWordGame } from "./hooks/useWordGame";
// Import types
import type { ColorTheme, WordChoiceScreenProps, WordSet } from "./types";

// Generate default word sets
const GeneratedWordSets: WordSet[] = BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1.map(
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

// Default color theme
const DEFAULT_COLORS: ColorTheme = {
  appBackgroundColor: APP_COLORS.backgroundgrey,
  appWhiteColor: APP_COLORS.offwhite,
  appBlackColor: APP_COLORS.offblack,
  appGreyColor: APP_COLORS.grey,
  appGreenColor: APP_COLORS.green,
  appRedColor: APP_COLORS.red,
  sectionPrimaryColor: SECTION_COLORS.vocabulary.primary,
  sectionSecondaryColor: SECTION_COLORS.vocabulary.light,
};

/**
 * WordChoiceScreen - Main component for the word choice game
 *
 * This component orchestrates the game flow by:
 * 1. Managing game state through useWordGame hook
 * 2. Rendering card content based on display preferences
 * 3. Handling user interactions and animations
 */
const WordChoiceScreen: React.FC<WordChoiceScreenProps> = ({
  wordSets = GeneratedWordSets,
  colors = DEFAULT_COLORS,
  onGameComplete,
  renderFrontCard,
  renderBackCard,
  renderOption,
}) => {
  // Get current game state from custom hook
  const gameState = useWordGame(wordSets, onGameComplete);

  // Get current set
  const currentWordSet = wordSets[gameState.currentSetIndex];

  // Create styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-evenly", // Change from space-between to center
      backgroundColor: colors.appBackgroundColor,
      zIndex: 0,
    },
  });

  // Prepare front and back card content
  const frontContent = renderFrontCard(currentWordSet.correctAnswer, colors);

  const backContent = renderBackCard(currentWordSet.correctAnswer, colors);

  return (
    <View style={styles.container}>
      {/* Progress Tracker */}
      {/* <ProgressTracker 
        current={gameState.currentSetIndex} 
        total={wordSets.length} 
        colors={colors} 
      /> */}

      {/* Card with front/back content - Now passing animation values directly */}
      <FlipCard
        frontContent={frontContent}
        backContent={backContent}
        colors={colors}
        flipValue={gameState.flipValue}
        backFlipValue={gameState.backFlipValue}
        frontOpacity={gameState.frontOpacity}
        backOpacity={gameState.backOpacity}
      />

      {/* Choice Options */}
      <ChoiceOptions
        words={currentWordSet.options}
        correctAnswer={currentWordSet.correctAnswer}
        selectedWord={gameState.selectedWord}
        disabledWords={gameState.disabledWords}
        isError={gameState.isError}
        isSuccess={gameState.isSuccess}
        colors={colors}
        onSelect={gameState.handleWordSelect}
        shakeAnimation={gameState.shakeAnimation}
        renderOption={renderOption}
      />
    </View>
  );
};

export default WordChoiceScreen;
