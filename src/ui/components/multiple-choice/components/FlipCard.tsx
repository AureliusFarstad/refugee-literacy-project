import React from "react";
import { Animated, StyleSheet, View } from "react-native";

import type { FlipCardProps } from "../types";

/**
 * A card component that can flip from front to back
 */
const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  colors,
  // Instead of a simple boolean, we'll use the actual animation values
  flipValue,
  backFlipValue,
  frontOpacity,
  backOpacity,
}) => {
  // Create styles with the provided colors
  const styles = StyleSheet.create({
    cardContainer: {
      width: 280,
      height: 260,
      maxHeight: 260,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      flex: 1,
    },
    cardFace: {
      borderRadius: 16,
      backgroundColor: "white",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      backfaceVisibility: "hidden",
      width: "100%",
      height: "100%",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: colors.sectionPrimaryColor,
    },
    cardFront: {
      zIndex: 1,
    },
  });

  return (
    <View style={styles.cardContainer}>
      {/* Front of card */}
      <Animated.View
        style={[
          styles.cardFace,
          styles.cardFront,
          {
            opacity: frontOpacity,
            transform: [{ rotateY: flipValue }],
          },
        ]}
      >
        {frontContent}
      </Animated.View>

      {/* Back of card */}
      <Animated.View
        style={[
          styles.cardFace,
          {
            opacity: backOpacity,
            transform: [{ rotateY: backFlipValue }],
          },
        ]}
      >
        {backContent}
      </Animated.View>
    </View>
  );
};

export default FlipCard;
