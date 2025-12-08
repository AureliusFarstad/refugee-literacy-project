import React from "react";
import { StyleSheet, View } from "react-native";

// Import default values
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";

import ChoiceOptions from "./components/ChoiceOptions";
// Import components
import FlipCard from "./components/FlipCard";
// Import custom hook
import { useWordGame } from "./hooks/useWordGame";
// Import types
import type { ColorTheme, WordChoiceScreenProps } from "./types";

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
  wordSets,
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

  if (!currentWordSet) {
    return null; // Or a loading spinner
  }

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
        isInteractionLocked={gameState.isInteractionLocked}
        colors={colors}
        onSelect={gameState.handleWordSelect}
        shakeAnimation={gameState.shakeAnimation}
        renderOption={renderOption}
      />
    </View>
  );
};

export default WordChoiceScreen;
