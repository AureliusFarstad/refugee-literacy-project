import React from "react";
import { Animated, StyleSheet } from "react-native";

import type { ChoiceOptionProps } from "../types";

/**
 * Individual choice option in the multiple choice game
 */
const ChoiceOption: React.FC<ChoiceOptionProps> = ({
  word,
  isSelected,
  isDisabled,
  isError,
  isSuccess,
  isCorrect,
  colors,
  shakeAnimation,
  renderOption,
}) => {
  // Create styles with the provided colors
  const styles = StyleSheet.create({
    choiceButton: {
      backgroundColor: "white",
      width: 80,
      height: 80,
      aspectRatio: 1,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      borderWidth: 1,
      borderColor: colors.appGreyColor,
    },
    selectedButton: {
      backgroundColor: colors.sectionPrimaryColor,
    },
    errorButton: {
      backgroundColor: colors.appRedColor,
    },
    successButton: {
      backgroundColor: colors.appGreenColor,
    },
    disabledButton: {
      backgroundColor: colors.appGreyColor,
    },
    choiceText: {
      fontSize: 24,
      fontWeight: "500",
    },
    disabledText: {
      color: colors.appWhiteColor,
    },
  });

  // Apply the appropriate styles based on state
  const buttonStyles = [
    styles.choiceButton,
    isSelected && styles.selectedButton,
    isError && isSelected && styles.errorButton,
    isSuccess && isCorrect && styles.successButton,
    isDisabled && styles.disabledButton,
    isSelected &&
      shakeAnimation && { transform: [{ translateX: shakeAnimation }] },
  ];

  // Render based on display type
  // const SvgComponent = imageSources?.[word]?.file;

  return (
    <Animated.View style={buttonStyles}>
      {renderOption(
        word,
        isSelected,
        isDisabled,
        isError,
        isSuccess,
        isCorrect,
        colors,
      )}
      {/* {optionDisplayType === 'image' && SvgComponent ? (
        <SvgComponent width={50} height={50} />
      ) : (
        <Text
          style={[
            styles.choiceText,
            isDisabled && styles.disabledText,
          ]}
        >
          {formatText(word)}
        </Text>
      )} */}
    </Animated.View>
  );
};

export default ChoiceOption;
