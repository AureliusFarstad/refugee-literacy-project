import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import type { ChoiceOptionsProps } from "../types";
import ChoiceOption from "./ChoiceOption";

/**
 * Container for multiple choice options
 */
const ChoiceOptions: React.FC<ChoiceOptionsProps> = ({
  words,
  correctAnswer,
  selectedWord,
  disabledWords,
  isError,
  isSuccess,
  isInteractionLocked,
  colors,
  onSelect,
  shakeAnimation,
  renderOption,
}) => {
  // Create styles
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
      alignSelf: "center",
      width: "100%",
    },
    optionWrapper: {
      margin: 5,
    },
  });

  return (
    <View style={styles.container}>
      {words.map((word) => (
        <TouchableOpacity
          key={word}
          onPress={() => onSelect(word)}
          disabled={disabledWords.includes(word) || isSuccess || isInteractionLocked}
          style={styles.optionWrapper}
        >
          <ChoiceOption
            word={word}
            isSelected={selectedWord === word}
            isDisabled={disabledWords.includes(word)}
            isError={isError}
            isSuccess={isSuccess}
            isCorrect={word === correctAnswer}
            colors={colors}
            shakeAnimation={shakeAnimation}
            renderOption={renderOption}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChoiceOptions;
